import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Paste } from './paste.entity';

@Injectable()
export class PasteService {
  constructor(
    @Inject('PASTE_REPOSITORY')
    private readonly pasteRepository: Repository<Paste>,
  ) {}

  async create(paste: Paste): Promise<Paste> {
    return this.pasteRepository.save(paste);
  }
}
