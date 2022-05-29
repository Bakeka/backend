import { DocumentType } from "@typegoose/typegoose"
import { FilterQuery } from "mongoose"
import { injectable, singleton } from "tsyringe"

import { Board, BoardModel } from "../entities/board"
import { Filter } from "../entities/filter"
import { Numbers } from "../entities/numbers"

@injectable()
@singleton()
export class BoardsService {
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

  public async get(boardId: string): Promise<Board | null> {
    return BoardModel.findById(boardId).exec()
  }

  public async update(boardId: string, board: Board): Promise<void> {
    // Remove all empty/undefined values
    (Object.keys(board) as Array<keyof Board>).forEach((key: keyof Board) => {
      if (!board[key]) delete board[key]
    })

    // TODO: validate
    BoardModel.updateOne({ _id: boardId }, board).exec()
  }

  public async numbers(): Promise<Numbers> {
    throw "not implemented"
  }
}
