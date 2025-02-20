import { Module } from '@nestjs/common';
import { TokenModule } from './modules/token/token.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { DATABASE_ENTITIES } from './core/database/entities';
import { ExceptionError } from './core/exceptions/exception-error';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'db',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'jwt',
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
