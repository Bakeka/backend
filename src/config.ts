import { readFileSync } from "fs"
import { resolve } from "path"
import { cwd, env } from "process"

/**
 * Type Config represents the possible configuration options for the backend.
 */
export interface Config {
  /**
   * The (HTTP) port to serve the backend at.
   */
  port: number | string

  /**
   * Database-specific configuration.
   */
  db?: DB
}

/**
 * Type DB represents the possible configuration options for the database connection.
 */
export interface DB {
  /**
   * Database name.
   */
  db: string

  /**
   * Database host/FQDN.
   */
  host?: string

  /**
   * Database port. Defaults to `27017`.
   */
  port?: string | number

  /**
   * Username for the connection.
   */
  username?: string

  /**
   * Password for the connection.
   */
  password?: string
}

/**
 * Predefined read-only default configuration values. Some are left undefined
 * deliberately so modules can fail on missing configuration.
 */
export const DefaultConfig: Config = {
  port: 8080,
  db: {
    db: "bakeka",
    host: "localhost"
  }
}

/**
 * Loads a configuration file and overrides the resulting object with environment
 * variables with syntax `BKK_SECTION_KEY=value`. For example, setting
 * `BKK_DB_PORT=9090` will yield the object `{ db: { port: 9090 } }` (which
 * will then be merged over the parsed/default configuration).
 *
 * @param {(string|undefined)} path - The path (can be relative) of the JSON configuration file to load
 * @param {(Config|undefined)} defaultConfig - A Config object to use as default instead of `DefaultConfig`
 * @returns {Config} A populated {@link Config} object or DefaultConfig if `path` is `undefined`
 */
export function load(path: string | undefined, defaultConfig?: Config): Config {
  const config: Config = path ?
    <Config>JSON.parse(
      readFileSync(resolve(cwd(), path))
        .toString()
    ) : defaultConfig || DefaultConfig

  // Override the config object with env variables
  Object.entries(env)
    .filter(
      ([key]) => key.startsWith("BKK_")
    )
    .map(
      ([key, value]) => [key.replace("BKK_", ""), value]
    )
    .forEach(
      ([key, value]) => key && value && key
        .split("_")
        .reduce((acc: any, current, index, keys) => {
          current = current.toLowerCase()
          if (keys.length - 1 === index) {
            acc[current] = value
            return acc[current]
          }
          if (!acc[current])
            acc[current] = {}
          return acc[current]
        }, config)
    )

  return config
}
