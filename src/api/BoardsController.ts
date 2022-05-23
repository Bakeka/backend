import { Body, Controller, Get, Path, Post, Route } from "tsoa"
import { Board } from "../entities/Board"
import { Filter } from "../entities/Filter"
import { Numbers } from "../entities/Numbers"

@Route("boards")
export class BoardsController extends Controller {
  @Post()
  public async filterBoards(@Body() requestBody: Filter): Promise<Board[]> {
    console.log(requestBody)
    return []
  }

  @Get("{boardId}")
  public async getBoard(@Path() boardId: string): Promise<Board> {
    console.log(boardId)
    throw "not implemented"
  }

  @Post("{boardId}")
  public async updateBoard(@Path() boardId: string, @Body() newBoard: Board): Promise<void> {
    console.log(boardId)
    console.log(newBoard)
    return
  }

  @Get("numbers")
  public async getNumbers(): Promise<Numbers> {
    throw "not implemented"
  }
}
