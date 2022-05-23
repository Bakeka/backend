import { readFileSync } from "fs"
import { resolve } from "path"
import { cwd, env } from "process"

type Indexable = { [key: string]: unknown }

export interface Config extends Indexable {
  port: number | string

  db?: DB
}

export interface DB extends Indexable {
  host: string
  port: string | number
  username: string
  password: string
}

type Prev = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  11, 12, 13, 14, 15, 16, 17, 18, 19, 20, ...0[]
]

type Join<K, P> = K extends string | number ?
  P extends string | number ?
    `${K}${"" extends P ? "" : "_"}${P}`
    : never
  : never;

type Leaves<T, D extends number = 10> = T extends object ?
  { [K in keyof T]-?: Join<K, Leaves<T[K], Prev[D]>> }[keyof T]
  : ""

type ConfigKey = Leaves<Config>

export function load(path: string): Config {
  const data = readFileSync(resolve(cwd(), path))
  const config: Config = <Config> JSON.parse(data.toString())

  // Override the config object with env variables
  Object.entries(env)
    .filter(
      ([key]) => key.startsWith("BKK_")
    )
    .map(
      ([key, value]) => [key.replace("BKK_", ""), value]
    )
    .forEach(
      ([key, value]) => key && key
        .split("_")
        .reduce((acc: any, current, index, keys) => {
          current = current.toLowerCase() as ConfigKey
          if (keys.length - 1 === index) {
            acc[current] = value
            return acc
          }
          if (!acc[current])
            acc[current] = {}
          return acc[current]
        }, config)
    )

  return config
}
