import { Config } from "../config";
import { inject, singleton } from "tsyringe";

@singleton()
export class BoardsService {
  constructor(@inject("config") private config: Config) {}

  printConfig(): void {
    console.log(this.config)
  }

  print(): void {
    console.log("Hello from BoardsService")
  }
}
