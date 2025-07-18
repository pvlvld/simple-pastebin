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

  async incrementViews(id: number): Promise<void> {
    await this.pasteRepository.increment({ id }, 'views', 1);
  }

  async remove(id: number): Promise<void> {
    await this.pasteRepository.update(id, { isDeleted: true });
  }
}
