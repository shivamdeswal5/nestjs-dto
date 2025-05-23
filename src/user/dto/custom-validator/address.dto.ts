import { IsNotEmpty, IsString } from "class-validator";

export class AddressDto{

    @IsNotEmpty()
    @IsString()
    address: string

    @IsString()
    city: string

    @IsString()
    state: string

    @IsString()
    stateCode: string
    
    @IsString()
    country: string

}