import { IsNotEmpty, IsString } from "class-validator";

export class HairDto{
  @IsString()
  @IsNotEmpty()
  color: string

  @IsString()
  type: string

}