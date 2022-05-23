import bodyParser from "body-parser"
import express, { Request, Response } from "express"
import { argv, exit } from "process"
import { RegisterRoutes } from "./api/routes"
import * as config from "./config"

import swaggerUi from "swagger-ui-express"
import swaggerDoc from "./api/swagger.json"

const args = argv.slice(2)
if (args.length < 1) {
  console.log(`Usage: ${argv[1]} <config_file>`)
  exit(1)
}

// Load config
const cfg = config.load(args[0])

// Only use JSON
const app = express()
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

// Swagger Docs
app.get('/docs/swagger.json', (_: Request, res: Response) => {
  res.send(swaggerDoc)
});

app.use(
  "/docs",
  express.static('node_modules/swagger-ui-dist/', { index: false }),
  swaggerUi.serve,
  swaggerUi.setup(swaggerDoc, { swaggerUrl: "/docs/swagger.json" })
)

RegisterRoutes(app)

// Entrypoint
app.listen(cfg.port)
