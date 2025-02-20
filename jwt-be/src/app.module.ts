import { Module } from '@nestjs/common';
import { TokenModule } from './modules/token/token.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { DATABASE_ENTITIES } from './core/database/entities';
import { ExceptionError } from './core/exceptions/exception-error';
import { env } from './config/env';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: env.DB_HOST,
      port: env.DB_PORT,
      username: env.DB_USER,
      password: env.DB_PASSWORD,
      database: env.DB_NAME,
      models: DATABASE_ENTITIES,
      synchronize: true,
      autoLoadModels: true,
    }),
    TokenModule,
  ],
  providers: [
    ExceptionError
  ]
})
export class AppModule { }
