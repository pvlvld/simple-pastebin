import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  initializeSwagger(app);
  await app.listen(process.env.PORT ?? 3000);
}

function initializeSwagger(app: any) {
  const swaggerConfig = new DocumentBuilder()
    .setTitle('Simple Pastebin API')
    .setDescription('The Simple Pastebin API description')
    .setVersion('1.0')
    .addTag('paste')
    .build();
  const documentFactory = () =>
    SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, documentFactory);
}

bootstrap();
