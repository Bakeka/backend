import { Prop } from "@typegoose/typegoose"

/**
 * Type Point represents a GeoJSON point.
 */
 export class Point {
  /**
   * GeoJSON type. Is always "Point".
   */
  @Prop({ type: String })
  public readonly type = "Point"

  /**
   * GeoJSON coordinates. Longitude is the first element and latitude follows.
   *
   * @isArray
   * @items float
   * @minItems 2
   * @maxItems 2
   * @example [-103.4, -45.7]
   */
  @Prop({ type: Number })
  public coordinates: number[] = []
}
