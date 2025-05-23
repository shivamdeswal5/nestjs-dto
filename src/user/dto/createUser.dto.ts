import { IsEmail, IsInt, IsNotEmpty, IsNumber, IsString, ValidateNested } from "class-validator";
import { HairDto } from "./custom-validator/hair.dto";
import { AddressDto } from "./custom-validator/address.dto";
import { Type } from "class-transformer";

export class CreateUserDto
{
    
    @IsInt()
    @IsNotEmpty()
    id: number;

    @IsString()
    @IsNotEmpty()
    firstName: string;

    @IsString()
    lastName: string;

    @IsNumber()
    @IsNotEmpty()
    age: number;

    @IsString()
    @IsNotEmpty()
    gender: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsNumber()
    @IsNotEmpty()
    phone: number;

    @ValidateNested()
    @Type(()=>HairDto)
    hair: HairDto;

    @ValidateNested()
    @Type(()=>AddressDto)
    address: AddressDto;
}