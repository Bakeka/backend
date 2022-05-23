import { Accessibility, Material, Size, Type } from "./Enums";

export interface Filter {
  accessibility?: Accessibility[]
  material?: Material[]
  size?: Size[]
  traffic?: number[]
  type?: Type[]

  latitude?: number[]
  longitude?: number[]
}
