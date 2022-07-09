import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsEnum,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';
import { TaskComplete } from './enum.type';

export class CreateTodoDto {
  @ApiProperty({ example: 'saturday is fun' })
  @IsString()
  @Length(3, 40)
  readonly name: string;

  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  readonly isPublished: boolean;

  @ApiProperty({ enum: ['INITIAL', 'WORKING', 'SUCCESS', 'PENDING'] })
  @IsOptional()
  @IsEnum(TaskComplete)
  readonly taskComplete: TaskComplete;
}
