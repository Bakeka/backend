import { transformAndValidate, TransformValidationOptions } from "class-transformer-validator"
import { Request, Response } from "express"
import { Board } from "../entities/Board"

const validatorConfig: TransformValidationOptions = {
  validator: {
    forbidUnknownValues: true,
    validationError: {
      target: false
    }
  }
}

async function boardsGet(req: Request, res: Response) {
  // var board: Board = req.body as Board
  // validate(board, validatorConfig).then(errors => {
  //   if (errors.length > 0)
  //     res.status(422).send(errors)
  // })
  // res.json(board)

  try {
    const board = await transformAndValidate(Board, req.body, validatorConfig)
    res.json(board)
  } catch(err) {
    res.status(422).send(err)
  }
}

async function boardsPost(_: Request, res: Response) {
  console.error("not implemented")
  res.send("ok")
}

async function numbersGet(_: Request, res: Response) {
  console.error("not implemented")
  res.send("ok")
}

async function boardIdGet(_: Request, res: Response) {
  console.error("not implemented")
  res.send("ok")
}

async function boardIdPost(_: Request, res: Response) {
  console.error("not implemented")
  res.send("ok")
}

export { boardsGet, boardsPost, numbersGet, boardIdGet, boardIdPost }
