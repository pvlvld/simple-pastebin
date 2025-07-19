import { IsString, IsOptional, MaxLength } from 'class-validator';
import { IUpdatePaste } from '../interfaces/paste.interface';

export class UpdatePasteDto implements IUpdatePaste {
  @IsOptional()
  @IsString()
  @MaxLength(500, { message: 'Name must not exceed 500 characters' })
  name?: string;

  @IsOptional()
  @IsString()
  content?: string;
}
