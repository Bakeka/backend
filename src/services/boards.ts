import { injectable, singleton } from "tsyringe"

import { Board } from "../entities/board"
import { Filter } from "../entities/filter"
import { Numbers } from "../entities/numbers"
// import { MongooseService } from "./mongoose"

@injectable()
@singleton()
export class BoardsService {
  // constructor(private mongooseService: MongooseService) {}

  public async filter(filter: Filter): Promise<Board[]> {
    // console.log(this.mongooseService.connection.id)
    console.log(filter)
    throw "not implemented"
  }

  public async get(boardId: string): Promise<Board> {
    console.log(boardId)
    throw "not implemented"
  }

  public async update(boardId: string, board: Board): Promise<void> {
    console.log({
      "id": boardId,
      "board": board
    })
    throw "not implemented"
  }

  public async numbers(): Promise<Numbers> {
    throw "not implemented"
  }
}
