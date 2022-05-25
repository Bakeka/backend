import { Body, Controller, Get, Path, Post, Route } from "tsoa"
import { Board } from "../entities/Board"
import { Filter } from "../entities/Filter"
import { Numbers } from "../entities/Numbers"

@Route("boards")
export class BoardsController extends Controller {
  /**
   * Retrieves multiple board by using various filters. If any of the properties
   * of the filter is `undefined`, it will not be applied to the results.
   *
   * @param filter - The filter to apply
   */
  @Post()
  public async filterBoards(@Body() filter: Filter): Promise<Board[]> {
    console.log(filter)
    return []
  }

  /**
   * Retrieves a single board by its internal ID.
   *
   * @param boardId - The board's identifier
   */
  @Get("{boardId}")
  public async getBoard(@Path() boardId: string): Promise<Board> {
    console.log(boardId)
    throw "not implemented"
  }


  /**
   * Updated a single board by its internal ID.
   *
   * @param boardId - The board's identifier
   * @param board - The new board object
   */
  @Post("{boardId}")
  public async updateBoard(@Path() boardId: string, @Body() board: Board): Promise<void> {
    console.log(boardId)
    console.log(board)
    throw "not implemented"
  }

  @Get("numbers")
  public async getNumbers(): Promise<Numbers> {
    throw "not implemented"
  }
}
