import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JwtModule } from './modules/jwt/jwt.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { DATABASE_ENTITIES } from './core/database/entities';
import { Jwt } from './modules/jwt/entities/jwt.entity';

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
    JwtModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
