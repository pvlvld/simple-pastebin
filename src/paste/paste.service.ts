import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Paste } from './paste.entity';
import { PASTE_TYPEORM_REPOSITORY } from 'src/common/consts';

@Injectable()
export class PasteService {
  constructor(
    @Inject(PASTE_TYPEORM_REPOSITORY)
    private readonly pasteRepository: Repository<Paste>,
  ) {}

  async create(paste: Paste): Promise<Paste> {
    return this.pasteRepository.save(paste);
  }

  async findOne(id: number): Promise<Paste | null> {
    return this.pasteRepository.findOneBy({ id });
  }
}
