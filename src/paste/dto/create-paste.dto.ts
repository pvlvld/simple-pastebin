import { IsString, IsNotEmpty, MaxLength, Max } from 'class-validator';
import { ICreatePaste } from '../interfaces/paste.interface';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class CreatePasteDto implements ICreatePaste {
  @ApiPropertyOptional({
    description: 'The name of the paste',
    maxLength: 500,
    example: 'My First Paste',
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(500, { message: 'Name must not exceed 500 characters' })
  name: string;

  @ApiPropertyOptional({
    description: 'The content of the paste',
    example: 'This is my first paste content',
    maxLength: 10000,
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(10000, { message: 'Content must not exceed 10000 characters' })
  content: string;
}
