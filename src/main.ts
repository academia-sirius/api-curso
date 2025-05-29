import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
const portNumber = 3000;
async function main() {
  const app = await NestFactory.create(AppModule);
  // permite validar os nossos DTOs
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.PORT ?? portNumber);
} 
main();