import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PasteModule } from './paste/paste.module';
import { AppConfigModule } from './config/config.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [AppConfigModule, DatabaseModule, PasteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
