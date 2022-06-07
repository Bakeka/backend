import { Accessibility, Material, Size, Type } from "./enums";

/**
 * Type Filter represents a transient object used to query the API for boards.
 */
export interface Filter {
  /**
   * Filter the results' accessibility, if defined.
   *
   * @isArray
   * @maxItems 3
   * @uniqueItems true
   * @example ["PUBLIC", "PRIVATE"]
   */
  accessibility?: Accessibility[]

  /**
   * Filter the results' material, if defined.
   *
   * @isArray
   * @maxItems 5
   * @uniqueItems true
   * @example ["GLASS", "WOOD", "OTHER"]
   */
  material?: Material[]

  /**
   * Filter the results' size, if defined.
   *
   * @isArray
   * @maxItems 3
   * @uniqueItems true
   * @example ["SMALL", "LARGE"]
   */
  size?: Size[]

  /**
   * Filter the results' traffic amount, if defined.
   *
   * @isArray
   * @minimum 1
   * @maximum 5
   * @uniqueItems true
   * @example [2, 5]
   */
  traffic?: number[]

  /**
   * Filter the results' type, if defined.
   *
   * @isArray
   * @maxItems 5
   * @uniqueItems true
   * @example ["OBITUARY", "PUBLIC"]
   */
  type?: Type[]

  /**
   * Longitude and latitude "box" for the results. All boards returned will be
   * located inside this box. Each of the array items is the tuple
   * `[longitude, latitude]`, akin to GeoJSON points.
   *
   * @isArray
   * @minItems 2
   * @maxItems 2
   * @items array
   * @example [[-103.4, -45.7], [95.8, 23.2]]
   */
  box?: number[][]
}
