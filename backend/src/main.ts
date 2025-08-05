import { NestFactory } from '@nestjs/core';
import * as cookieParser from 'cookie-parser';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(cookieParser());

  app.enableCors({
    origin: process.env.CLIENT,
    credentials: true,
  });

  await app.listen(process.env.PORT ?? 3000);

  console.log(`Server is running on ${process.env.PORT ?? 3000}`);
}
bootstrap();
