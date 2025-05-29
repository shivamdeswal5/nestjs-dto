import {IsEmail,IsInt,IsNotEmpty,IsNumber,IsString,ValidateNested,Min,Max,Length, IsArray, ArrayMinSize,} from 'class-validator';
import { HairDto } from './custom-validator/hair.dto';
import { AddressDto } from './custom-validator/address.dto';
import { Type } from 'class-transformer';
import { TaskDto } from './custom-validator/task.dto';

export class CreateUserDto {
  @IsInt({ message: 'ID must be an integer.' })
  @IsNotEmpty({ message: 'ID is required.' })
  id: number;

  @IsString({ message: 'First name must be a string.' })
  @Length(2, 20, { message: 'First name must be between 2 and 20 characters.' })
  firstName: string;

  @IsString({ message: 'Last name must be a string.' })
  @Length(2, 20, { message: 'Last name must be between 2 and 20 characters.' })
  lastName: string;

  @IsInt({ message: 'Age must be a number.' })
  @Min(0, { message: 'Age must be at least 0.' })
  @Max(90, { message: 'Age must not exceed 90.' })
  age: number;

  @IsString({ message: 'Gender must be a string.' })
  @IsNotEmpty({ message: 'Gender is required.' })
  gender: string;

  @IsEmail({}, { message: 'Email must be a valid email address.' })
  @IsNotEmpty({ message: 'Email is required.' })
  email: string;

  @IsNumber({}, { message: 'Phone must be a number.' })
  @IsNotEmpty({ message: 'Phone number is required.' })
  phone: number;

  @ValidateNested()
  @Type(() => HairDto)
  hair: HairDto;

  @ValidateNested()
  @Type(() => AddressDto)
  address: AddressDto;

  @IsArray({ message: 'Tasks must be an array.' })
  @ArrayMinSize(1, { message: 'At least one task is required.' })
  @ValidateNested({ each: true })
  @Type(() => TaskDto)
  tasks: TaskDto[];
}

