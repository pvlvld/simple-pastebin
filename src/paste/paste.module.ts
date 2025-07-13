import { Module } from '@nestjs/common';
import { PasteService } from './paste.service';
import { PasteController } from './paste.controller';

@Module({
  providers: [PasteService],
  controllers: [PasteController]
})
export class PasteModule {}
