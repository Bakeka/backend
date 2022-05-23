import express from "express"
import { argv, exit } from "process"
import * as controller from "./api/controller"
import * as config from "./config"

const args = argv.slice(2)
if (args.length < 1) {
  console.log(`Usage: ${argv[1]} <config_file>`)
  exit(1)
}

const app = express()
app.use(express.json())

config.load(args[0])

app.use("/api/v1", controller.v1)

app.listen(8080)
