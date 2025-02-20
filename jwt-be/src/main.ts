import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ExceptionError } from './core/exceptions/exception-error';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
  }));

  const exception = app.get(ExceptionError);
  app.useGlobalFilters(exception);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
