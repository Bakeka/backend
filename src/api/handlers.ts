import { transformAndValidate, TransformValidationOptions } from "class-transformer-validator"
import { Request, Response } from "express"
import { Filter } from "../entities/Filter"

const validatorConfig: TransformValidationOptions = {
  validator: {
    forbidUnknownValues: true,
    validationError: {
      target: false
    }
  }
}

async function boardsPost(req: Request, res: Response) {
  try {
    const filter = await transformAndValidate(Filter, req.body, validatorConfig)
    res.json(filter)
  } catch(err) {
    res.status(422).send(err)
  }
}

async function numbersGet(_: Request, res: Response) {
  console.error("not implemented")
  res.sendStatus(500)
}

async function boardIdGet(_: Request, res: Response) {
  console.error("not implemented")
  res.sendStatus(500)
}

async function boardIdPost(_: Request, res: Response) {
  console.error("not implemented")
  res.sendStatus(500)
}

export { boardsPost, numbersGet, boardIdGet, boardIdPost }
