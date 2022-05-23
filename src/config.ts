import { readFileSync } from "fs"
import { resolve } from "path"
import { cwd, env } from "process"

export function load(path: string) {
  const data = readFileSync(resolve(cwd(), path))
  var config = JSON.parse(data.toString())

  // Override the config object with env variables
  Object.entries(env)
    .filter(
      ([key, _]) => key.startsWith("BKK_")
    )
    .map(
      ([key, value]) => [key.replace("BKK_", ""), value]
    )
    .forEach(
      ([key, value]) => key
        .split("_")
        .reduce((acc, current, index, keys) => {
          current = current.toLowerCase()
          if (keys.length - 1 === index) {
            acc[current] = value
            return acc
          }
          if (!acc[current])
            acc[current] = {}
          // TODO: throw err if acc[current] exists and is not object?
          return acc[current]
        }, config)
    )

  return config
}
