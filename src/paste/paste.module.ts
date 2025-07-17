import { Module } from '@nestjs/common';
import { PasteService } from './paste.service';
import { PasteController } from './paste.controller';
import { DatabaseModule } from 'src/database/database.module';
import { pasteProviders } from './paste.providers';

@Module({
  imports: [DatabaseModule],
  providers: [...pasteProviders, PasteService],
  controllers: [PasteController],
})
export class PasteModule {}
