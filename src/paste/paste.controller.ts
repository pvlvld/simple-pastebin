import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Delete,
  HttpCode,
  HttpStatus,
  UnauthorizedException,
} from '@nestjs/common';
import { PasteService } from './paste.service';
import { CreatePasteDto, UpdatePasteDto, PasteResponseDto } from './dto';
import { plainToClass } from 'class-transformer';
import { ConfigService } from '@nestjs/config';

@Controller()
export class PasteController {
  constructor(
    private readonly pasteService: PasteService,
    private readonly configService: ConfigService,
  ) {}

  @Get(':id')
  async get(@Param('id', ParseIntPipe) id: number): Promise<PasteResponseDto> {
    const paste = await this.pasteService.findOne(id);
    if (!paste || paste.isDeleted) {
      throw new NotFoundException(`Paste with id ${id} not found`);
    }

    await this.pasteService.incrementViews(id);
    paste.views++;

    return plainToClass(PasteResponseDto, paste);
  }

  @Post()
  async create(
    @Body() createPasteDto: CreatePasteDto,
  ): Promise<{ id: number }> {
    const paste = await this.pasteService.create(createPasteDto);

    if (!paste) {
      throw new NotFoundException('Failed to create paste');
    }

    return { id: paste.id };
  }

  // TODO: Implement accounts to restrict updates
  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePasteDto: UpdatePasteDto,
  ): Promise<PasteResponseDto> {
    if (this.configService.get('NODE_ENV') === 'development') {
      throw new UnauthorizedException();
    }

    const paste = await this.pasteService.update(id, updatePasteDto);

    if (!paste || paste.isDeleted) {
      throw new NotFoundException(`Paste with id ${id} not found`);
    }

    return plainToClass(PasteResponseDto, paste);
  }

  // TODO: Implement accounts to restrict deletions
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    if (this.configService.get('NODE_ENV') === 'development') {
      throw new UnauthorizedException();
    }

    const paste = await this.pasteService.findOne(id);

    if (!paste || paste.isDeleted) {
      throw new NotFoundException(`Paste with id ${id} not found`);
    }

    await this.pasteService.remove(id);
  }
}
