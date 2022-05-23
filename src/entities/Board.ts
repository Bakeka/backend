import { ObjectId } from "mongodb";
import { Accessibility, Material, Size, Type } from "./Enums";

export interface Board {
  id?: ObjectId

  latitude: number
  longitude: number

  accessibility: Accessibility
  material: Material
  size: Size
  traffic: number
  type: Type

  created: Date
  modified: Date
}
