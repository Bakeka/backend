import express from "express"
import * as handlers from "./handlers"

const v1 = express.Router()

v1.route("/boards")
  .get(handlers.boardsGet)
  .post(handlers.boardsPost)

v1.get("/boards/numbers", handlers.numbersGet)

v1.route("/boards/:id")
  .get(handlers.boardIdGet)
  .post(handlers.boardIdPost)

export { v1 }
