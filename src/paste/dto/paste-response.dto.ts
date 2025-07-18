import { Exclude } from 'class-transformer';
import { IPasteResponse } from '../interfaces/paste.interface';

export class PasteResponseDto implements IPasteResponse {
  id: number;

  name: string;

  content: string;

  views: number;

  @Exclude()
  isDeleted: boolean;
}
