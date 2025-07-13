import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PasteController } from './paste/paste.controller';
import { PasteService } from './paste/paste.service';
import { PasteModule } from './paste/paste.module';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [PasteModule, ConfigModule],
  controllers: [AppController, PasteController],
  providers: [AppService, PasteService],
})
export class AppModule {}
