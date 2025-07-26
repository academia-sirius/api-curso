import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { LogInterceptor } from './interceptors/log.interceptor';


async function main() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());  //  validar os nossos DTOs
  app.useGlobalInterceptors(new LogInterceptor()) // interceptar global

  await app.listen(process.env.PORT ?? 3000);
} 
main();