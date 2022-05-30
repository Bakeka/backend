import { DocumentType } from "@typegoose/typegoose"
import { FilterQuery } from "mongoose"
import { injectable, singleton } from "tsyringe"

import { Board, BoardModel } from "../entities/board"
import { Filter } from "../entities/filter"
import { Numbers } from "../entities/numbers"

@injectable()
@singleton()
export class BoardsService {
  /**
   * Retrieves board from the database using a filter. A board is added to the
   * results if it matches all the properties described in the filter.
   *
   * @param filter The filter to apply
   * @returns A promise containing a list of boards which match the filter
   */
  public async filter(filter: Filter): Promise<Board[]> {
    const query: FilterQuery<DocumentType<Board>> = {}

    if (filter.accessibility)
      query.accessibility = { $in: filter.accessibility }
    if (filter.material)
      query.material = { $in: filter.material }
    if (filter.size)
      query.size = { $in: filter.size }
    if (filter.traffic)
      query.traffic = { $in: filter.traffic }
    if (filter.type)
      query.type = { $in: filter.type }
    if (filter.box)
      query.location = {
        $geoWithin: {
          $box: [
            [
              Math.min(filter.box[0][0], filter.box[1][0]),
              Math.min(filter.box[0][1], filter.box[1][1])
            ],
            [
              Math.max(filter.box[0][0], filter.box[1][0]),
              Math.max(filter.box[0][1], filter.box[1][1])
            ]
          ]
        }
      }

    return BoardModel.find(query).exec()
  }

  /**
   * Fetches a single board from the database, given its object ID.
   *
   * @param boardId A Mongo ObjectID as string
   * @returns The matching Board or null if no board was found with the given ID
   */
  public async get(boardId: string): Promise<Board | null> {
    return BoardModel.findById(boardId).exec()
  }

  /**
   * Updated an existing board's data with a new board object's data. All
   * `undefined` fields in the new object will be ignored.
   *
   * @param boardId A Mongo ObjectID as string
   * @param board The new board object to use for the update
   */
  public async update(boardId: string, board: Board): Promise<void> {
    // Remove all empty/undefined values
    (Object.keys(board) as Array<keyof Board>).forEach((key: keyof Board) => {
      if (!board[key]) delete board[key]
    })

    // TODO: validate + calculate mean position etc
    BoardModel.updateOne({ _id: boardId }, board).exec()
  }

  /**
   * Returns the number of boards by their `type` field.
   *
   * @returns The total number of board by type
   */
  public async numbers(): Promise<Numbers> {
    return BoardModel.aggregate([
      // Count by type
      {
        $group: {
          _id: "$type",
          count: { $sum: 1 }
        }
      },

      // Transform the objects to a key/value array for $arrayToObject
      {
        $group: {
          _id: null,
          data: {
            $push: {
              k: {
                $toString: "$_id"
              },
              v: "$count"
            }
          }
        }
      },

      // Transform the data array into a Numbers object
      {
        $replaceRoot: {
          newRoot: {
            $arrayToObject: "$data"
          }
        }
      }
    ]).exec().then((res) => { return res[0] as Numbers })
  }
}
