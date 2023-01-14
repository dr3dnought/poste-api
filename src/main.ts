import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(Number(process.env.PORT) || 5000);
}
bootstrap().then(() =>
  Logger.log(
    `Application started at port: ${process.env.PORT}. PID: ${process.pid}`,
  ),
);
