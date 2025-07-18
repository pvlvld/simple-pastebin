import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { PasteService } from './paste.service';

@Controller()
export class PasteController {
  constructor(private readonly pasteService: PasteService) {}
  @Get(':id')
  async get(@Param('id', ParseIntPipe) id: number): Promise<string> {
    const paste = await this.pasteService.findOne(id);
    if (paste) {
      return JSON.stringify(paste);
    }
    throw new NotFoundException(`Paste with id ${id} not found`);
  }

  @Post()
  async create(@Body() body: any): Promise<number> {
    const paste = await this.pasteService.create(body);
    return paste.id;
  }
}
