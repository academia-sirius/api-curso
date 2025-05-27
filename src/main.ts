import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const portNumber = 3000;
async function bootstrap() {
const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? portNumber);
}
bootstrap();
