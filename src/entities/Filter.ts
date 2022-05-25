import { Accessibility, Material, Size, Type } from "./Enums";

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
   * @isInt
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
   * Minimum and maximum latitudes for the results.
   *
   * @isArray
   * @minItems 2
   * @maxItems 2
   * @minimum -90.0
   * @maximum +90.0
   * @example [-45.7, 23.2]
   */
  latitude?: number[]

  /**
   * Minimum and maximum latitudes for the results.
   *
   * @isArray
   * @minItems 2
   * @maxItems 2
   * @minimum -180.0
   * @maximum +180.0
   * @example [-103.4, 95.8]
   */
  longitude?: number[]
}
