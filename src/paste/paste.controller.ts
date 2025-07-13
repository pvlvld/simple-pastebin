import { Controller, Get, Param, Post } from '@nestjs/common';

@Controller()
export class PasteController {
  @Get(':id')
  get(@Param('id') id: string): string {
    return `getting paste ${id}`;
  }

  @Post()
  create(): string {
    return 'creating paste';
  }
}
