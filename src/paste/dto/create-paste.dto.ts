import { IsString, IsNotEmpty, MaxLength } from 'class-validator';
import { ICreatePaste } from '../interfaces/paste.interface';

export class CreatePasteDto implements ICreatePaste {
  @IsString()
  @IsNotEmpty()
  @MaxLength(500, { message: 'Name must not exceed 500 characters' })
  name: string;

  @IsString()
  @IsNotEmpty()
  content: string;
}
