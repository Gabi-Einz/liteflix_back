import { NestFactory } from '@nestjs/core';
import { AppModule } from 'apps/src/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3009);
}
bootstrap();