import { Module } from '@nestjs/common';
import { TokenService } from './token.service';
import { TokenController } from './token.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Token } from './entities/token.entity';
import { JwtModule } from '@nestjs/jwt';
import { env } from 'src/config/env';


@Module({
  imports: [
    SequelizeModule.forFeature([Token]),
    JwtModule.register({
      global: true,
      secret: env.JWT_SECRET,
    })
  ],
  controllers: [TokenController],
  providers: [TokenService],
})
export class TokenModule { }
