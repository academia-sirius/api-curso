import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpException, ValidationPipe } from '@nestjs/common';
import { LogInterceptor } from './interceptors/log.interceptor';


async function main() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());  //  validar os nossos DTOs
  app.useGlobalInterceptors(new LogInterceptor()) // interceptar global
  
  // app.useGlobalFilters(new HttpExceptionFilter()); // Apply the global filter

  await app.listen(process.env.PORT ?? 3000);
} 
main();