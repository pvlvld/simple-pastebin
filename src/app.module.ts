import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PasteController } from './paste/paste.controller';
import { PasteService } from './paste/paste.service';
import { PasteModule } from './paste/paste.module';
import { ConfigModule } from '@nestjs/config';
import Joi from 'joi';

@Module({
  imports: [
    PasteModule,
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        NODE_ENV: Joi.string()
          .valid('development', 'production')
          .default('development'),
        PORT: Joi.number().port().default(3000),
      }),
      validationOptions: {
        // allowUnknown: false,
        abortEarly: true,
        convert: true,
      },
    }),
  ],
  controllers: [AppController, PasteController],
  providers: [AppService, PasteService],
})
export class AppModule {}
