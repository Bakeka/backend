import { IsDateString, IsEnum, IsInt, IsLatitude, IsLongitude, IsMongoId, IsOptional, Max, Min } from "class-validator";
import { ObjectId } from "mongodb";
import { Accessibility, Material, Size, Type } from "./Enums";

export class Board {
  @IsOptional()
  @IsMongoId()
  id?: ObjectId

  @IsEnum(Accessibility)
  accessibility: Accessibility

  @IsLatitude()
  latitude: number

  @IsLongitude()
  longitude: number

  @IsEnum(Material)
  material: Material

  @IsEnum(Size)
  size: Size

  @IsInt()
  @Min(0)
  @Max(5)
  traffic: number

  @IsEnum(Type)
  type: Type

  @IsDateString()
  created: Date

  @IsDateString()
  modified: Date
}
