import express, { NextFunction, Request, Response } from "express"
import process from "process"
import "@abraham/reflection"
import { container } from "tsyringe"

import * as routes from "./api/routes"
import * as config from "./config"
import { DatabaseService } from "./services/database"

import swaggerDoc from "./api/swagger.json"
import swaggerUi from "swagger-ui-express"
import { ValidateError } from "tsoa"

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

// Connect to DB
container.resolve(DatabaseService).connect()

// Only use JSON
const app = express()
app.use(express.json())

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

// Middleware, error handling
app.use((err: unknown, req: Request, res: Response, next: NextFunction): Response | void => {
  if (err instanceof ValidateError) {
    console.warn(`validation error for ${req.path}:`, err.fields);
    return res.status(422).json({
      message: "Validation Failed",
      details: err?.fields,
    })
  }

  if (err instanceof Error) {
    console.error(`error on ${req.path}:`, err)
    return res.status(500).json({
      message: "Internal Server Error",
    })
  }

  next()
})

// Middleware, not found
app.use((_req: Request, res: Response) => {
  res.status(404).send({
    message: "Not Found",
  })
})

// Middleware, timeout
app.use((_req: Request, res: Response, next: NextFunction) => {
  res.setTimeout(3000, () => next(new Error("Request timed out")))
  next()
})

// Entrypoint
const server = app.listen(cfg.port, () => {
  console.debug(`Started listening on ${cfg.port}`)
})

// Graceful shutdown
process.on("SIGTERM", () => {
  server.close()
  container.resolve(DatabaseService).disconnect()
})
