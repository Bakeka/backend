import { ArrayMaxSize, ArrayMinSize, IsEnum, IsInt, IsLatitude, IsLongitude, Max, Min } from "class-validator";
import { Accessibility, Material, Size, Type } from "./Enums";

export class Filter {
  @ArrayMaxSize(Object.keys(Accessibility).length / 2)
  @IsEnum(Accessibility, { each: true })
  accessibility?: Accessibility[]

  @ArrayMaxSize(2)
  @ArrayMinSize(2)
  @IsLatitude({ each: true })
  latitude?: number[]

  @ArrayMaxSize(2)
  @ArrayMinSize(2)
  @IsLongitude({ each: true })
  longitude?: number[]

  @ArrayMaxSize(Object.keys(Material).length / 2)
  @IsEnum(Material, { each: true })
  material?: Material[]

  @ArrayMaxSize(Object.keys(Size).length / 2)
  @IsEnum(Size, { each: true })
  size?: Size[]

  @ArrayMaxSize(5)
  @IsInt({ each: true })
  @Min(0, { each: true })
  @Max(5, { each: true })
  traffic?: number[]

  @ArrayMaxSize(Object.keys(Type).length / 2)
  @IsEnum(Type)
  type?: Type[]
}
