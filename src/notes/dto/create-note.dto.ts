import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateNoteDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @ApiProperty()
  name: string;

  @IsString()
  @IsOptional()
  @IsNotEmpty()
  @MaxLength(300)
  @ApiProperty({ required: false })
  content?: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  category: string;

  @IsBoolean()
  @ApiProperty({ required: true, default: false })
  archive = false;
}
