import { IsString, IsOptional, MaxLength } from 'class-validator';
import { IUpdatePaste } from '../interfaces/paste.interface';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdatePasteDto implements IUpdatePaste {
  @ApiPropertyOptional({
    description: 'The name of the paste',
    maxLength: 500,
    example: 'My First Paste',
  })
  @IsOptional()
  @IsString()
  @MaxLength(500, { message: 'Name must not exceed 500 characters' })
  name?: string;

  @ApiPropertyOptional({
    description: 'The content of the paste',
    example: 'This is my first paste content',
    maxLength: 10000,
  })
  @IsOptional()
  @IsString()
  content?: string;
}
