import { Exclude } from 'class-transformer';
import { IPasteResponse } from '../interfaces/paste.interface';
import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';
import { MaxLength } from 'class-validator';

export class PasteResponseDto implements IPasteResponse {
  @ApiProperty({
    description: 'The unique identifier of the paste',
    example: 1,
  })
  id: number;

  @ApiProperty({
    description: 'The name of the paste',
    maxLength: 500,
    example: 'My First Paste',
  })
  name: string;

  @ApiProperty({
    description: 'The content of the paste',
    example: 'This is my first paste content',
    maxLength: 10000,
  })
  @MaxLength(10000, { message: 'Content must not exceed 10000 characters' })
  content: string;

  @ApiProperty({
    description: 'The number of views for the paste',
    example: 100,
  })
  views: number;

  @ApiHideProperty()
  @Exclude()
  isDeleted: boolean;
}
