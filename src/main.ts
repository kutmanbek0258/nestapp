import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'dotenv/config';
import { warn } from 'console';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { UserModule } from './user/user.module';
import { HttpExceptionFilter } from './filters/http-exception.filter';
import { AppLogger } from './logger/logger.service';
import { ReferenceModule } from './reference/reference.module';
import { DocumentModule } from './document/document.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: new AppLogger(),
    cors: true,
  });

  app.useGlobalPipes(new ValidationPipe({}));

  app.useGlobalFilters(new HttpExceptionFilter());

  const swaggerOptions = new DocumentBuilder()
    .setTitle('API')
    .setDescription('Sumsar retail API')
    .setVersion('1.0')
    .addTag('API')
    .build();

  const swaggerDocument = SwaggerModule.createDocument(app, swaggerOptions, {
    include: [UserModule, ReferenceModule, DocumentModule],
  });

  SwaggerModule.setup('api', app, swaggerDocument);

  const PORT = process.env.PORT || 3000;
  await app.listen(PORT);
  warn(`APP IS LISTENING TO PORT ${PORT}`);
}
bootstrap();
