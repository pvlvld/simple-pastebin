import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Paste } from './paste.entity';
import { CreatePasteDto } from './dto/create-paste.dto';
import { UpdatePasteDto } from './dto/update-paste.dto';
import { PASTE_TYPEORM_REPOSITORY } from 'src/common/consts';

@Injectable()
export class PasteService {
  constructor(
    @Inject(PASTE_TYPEORM_REPOSITORY)
    private readonly pasteRepository: Repository<Paste>,
  ) {}

  async create(createPasteDto: CreatePasteDto): Promise<Paste> {
    const paste = this.pasteRepository.create(createPasteDto);
    return this.pasteRepository.save(paste);
  }

  async findOne(id: number): Promise<Paste | null> {
    return this.pasteRepository.findOneBy({ id });
  }

  async update(
    id: number,
    updatePasteDto: UpdatePasteDto,
  ): Promise<Paste | null> {
    await this.pasteRepository.update(id, updatePasteDto);
    return this.findOne(id);
  }

  async incrementViews(id: number): Promise<void> {
    await this.pasteRepository.increment({ id }, 'views', 1);
  }

  async remove(id: number): Promise<void> {
    await this.pasteRepository.update(id, { isDeleted: true });
  }
}
