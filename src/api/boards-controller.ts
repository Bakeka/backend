import { Body, Controller, Get, Path, Post, Route } from "tsoa"
import { injectable } from "tsyringe"

import { BoardsService } from "../services/boards"
import { Board } from "../entities/board"
import { Filter } from "../entities/filter"
import { Numbers } from "../entities/numbers"
import { DatabaseService } from "../services/database"

@injectable()
@Route("boards")
export class BoardsController extends Controller {
  constructor(private boardsService: BoardsService, private db: DatabaseService) {
    super()
  }

  /**
   * Retrieves multiple board by using various filters. If any of the properties
   * of the filter is `undefined`, it will not be applied to the results.
   *
   * @param filter The filter to apply
   */
  @Post()
  public async filterBoards(@Body() filter: Filter): Promise<Board[]> {
    console.log(this.db.connection.id)
    return this.boardsService.filter(filter)
  }

  /**
   * Retrieves a single board by its internal ID.
   *
   * @param boardId The board's identifier
   */
  @Get("{boardId}")
  public async getBoard(@Path() boardId: string): Promise<Board> {
    return this.boardsService.get(boardId)
  }


  /**
   * Updated a single board by its internal ID.
   *
   * @param boardId The board's identifier
   * @param board The new board object
   */
  @Post("{boardId}")
  public async updateBoard(@Path() boardId: string, @Body() board: Board): Promise<void> {
    return this.boardsService.update(boardId, board)
  }

  /**
   * Returns the total number of board registered for each type (see enum Type).
   */
  @Get("numbers")
  public async getNumbers(): Promise<Numbers> {
    return this.boardsService.numbers()
  }
}
