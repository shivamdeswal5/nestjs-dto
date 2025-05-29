import { IsString, IsNotEmpty, IsDateString } from 'class-validator';

export class TaskDto {
  @IsString({ message: 'Task title must be a string.' })
  @IsNotEmpty({ message: 'Task title is required.' })
  title: string;

  @IsDateString({}, { message: 'Starting Date must be a valid' })
  startDate: string;

  @IsDateString({}, { message: 'Ending Date must be a valid' })
  endDate: string;
}
