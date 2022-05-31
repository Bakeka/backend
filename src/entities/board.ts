import { getModelForClass, Index, Prop } from "@typegoose/typegoose"

import { Accessibility, Material, Size, Type } from "./enums"
import { Point } from "./point"

/**
 * Type Board represents a bulletin board.
 */
@Index({ location: '2dsphere' })
@Index({ type: 'text' })
export class Board {
  /**
   * Board position as GeoJSON Point (see
   * [geospatial queries](https://www.mongodb.com/docs/upcoming/geospatial-queries/)
   * and [type definition](https://www.mongodb.com/docs/manual/reference/geojson/)).
   * Longitude is the first element and latitude follows.
   */
  @Prop({ type: Point, _id: false })
  public location?: Point

  /**
   * Board accessibility.
   */
  @Prop({ type: String, enum: Accessibility })
  public accessibility?: Accessibility

  /**
   * Board material.
   */
  @Prop({ type: String, enum: Material })
  public material?: Material

  /**
   * Board size.
   */
  @Prop({ type: String, enum: Size })
  public size?: Size

  /**
   * Board traffic amount.
   *
   * @isInt
   * @minimum 1
   * @maximum 5
   */
  @Prop({ min: 1, max: 5 })
  public traffic?: number

  /**
   * Board type.
   */
  @Prop({ type: String, enum: Type, index: true })
  public type?: Type

  /**
   * Board creation date.
   */
  @Prop({ default: Date.now })
  public created?: Date

  /**
   * Board last modification date.
   */
  @Prop({ default: Date.now })
  public modified?: Date
}

/**
 * The MongoDB model for type Board.
 */
export const BoardModel = getModelForClass(Board)
