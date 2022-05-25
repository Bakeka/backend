import { ObjectId } from "mongodb";
import { Accessibility, Material, Size, Type } from "./Enums";

/**
 * Type Board represents a bulletin board.
 */
export interface Board {
  _id: ObjectId

  /**
   * Latitude coordinate of the board. Has to be between `-90.0` and `90.0`.
   *
   * @isFloat
   * @minimum -90.0
   * @maximum +90.0
   */
  latitude: number

  /**
   * Longitude coordinate of the board. Has to be between `-180.0` and `180.0`.
   *
   * @isFloat
   * @minimum -180.0
   * @maximum +180.0
   */
  longitude: number

  /**
   * Board accessibility.
   */
  accessibility: Accessibility

  /**
   * Board material.
   */
  material: Material

  /**
   * Board size.
   */
  size: Size

  /**
   * Board traffic amount.
   *
   * @isInt
   * @minimum 1
   * @maximum 5
   */
  traffic: number

  /**
   * Board type.
   */
  type: Type

  /**
   * Board creation date.
   */
  created: Date

  /**
   * Board last modification date.
   */
  modified: Date
}


