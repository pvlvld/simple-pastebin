import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PasteController } from './paste/paste.controller';
import { PasteService } from './paste/paste.service';
import { PasteModule } from './paste/paste.module';
import { AppConfigModule } from './config/config.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [PasteModule, AppConfigModule, DatabaseModule],
  controllers: [AppController, PasteController],
  providers: [AppService, PasteService],
})
export class AppModule {}
