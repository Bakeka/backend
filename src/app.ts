import bodyParser from "body-parser"
import express, { Request, Response } from "express"
import process from "process"

import * as routes from "./api/routes"
import * as config from "./config"

import swaggerDoc from "./api/swagger.json"
import swaggerUi from "swagger-ui-express"
import { container } from "tsyringe"

// Parse CLI arguments
const args = process.argv.slice(2)
if (args.length > 1) {
  console.log(`Usage: ${process.argv[1]} [config_file]`)
  process.exit(1)
}

// Load config
const cfg = config.load(args.at(0))
// Register config object for dependency injection
container.register("config", {
  useValue: cfg
})

// Only use JSON
const app = express()
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

// API Docs
const swaggerConf: swaggerUi.SwaggerUiOptions = {
  customCss: ".swagger-ui .topbar { display: none }",
  customSiteTitle: "Bakeka API Docs",
}

app.get('/docs/swagger.json', (_: Request, res: Response) => {
  res.send(swaggerDoc)
})

app.use("/docs", swaggerUi.serve, async (_req: Request, res: Response) => {
  return res.send(swaggerUi.generateHTML(swaggerDoc, swaggerConf))
})

// Add the generated routes
routes.RegisterRoutes(app)

// Entrypoint
const server = app.listen(cfg.port, () => {
  console.debug(`Started listening on ${cfg.port}`)
})

// Graceful shutdown
process.on("SIGTERM", () => {
  server.close()
})
