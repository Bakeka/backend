import { Prop } from "@typegoose/typegoose"
import { FieldErrors, ValidateError } from "tsoa"

/**
 * Utility function to validate a `Point` object in an incoming request as
 * specified in [the documentation](https://www.mongodb.com/docs/manual/reference/geojson/#point).
 * Returns a `tsoa.ValidateError` with the details for each field or `undefined`
 * if the fields were valid.
 *
 * @param point The `Point` object to validate
 * @param objectPrefix A prefix for the value paths returned in the error
 * @returns A `ValidateError` with the relevant information or `undefined` if all is well
 */
export const validatePoint = (point: Point, objectPrefix: string) => {
  const errs: FieldErrors = {}
  let hasErr = false

  if (point.type !== "Point") {
    errs[`${objectPrefix}.type`] = {
      message: "type should be 'Point'",
      value: point.type
    }
    hasErr = true
  }

  if (point.coordinates[0] <= -180.0 || 180.0 <= point.coordinates[0]) {
    errs[`${objectPrefix}.coordinates[0]`] = {
      message: "longitude should be between -180.0 and 180.0 inclusive",
      value: point.coordinates[0]
    }
    hasErr = true
  }

  if (point.coordinates[1] <= -90.0 || 90.0 <= point.coordinates[1]) {
    errs[`${objectPrefix}.coordinates[1]`] = {
      message: "latitude should be between -90.0 and 90.0 inclusive",
      value: point.coordinates[1]
    }
    hasErr = true
  }

  if (hasErr) throw new ValidateError(errs, "invalid coordinates")
}

/**
 * Type Point represents a [GeoJSON point](https://www.mongodb.com/docs/manual/reference/geojson/#point).
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
