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
  get(@Param('id') id: string): string {
    return `getting paste ${id}`;
  }

  @Post()
  async create(@Body() body: any): Promise<number> {
    const paste = await this.pasteService.create(body);
    return paste.id;
  }
}
