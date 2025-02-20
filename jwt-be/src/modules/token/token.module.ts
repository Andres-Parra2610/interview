import { Module } from '@nestjs/common';
import { TokenService } from './token.service';
import { TokenController } from './token.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Token } from './entities/token.entity';
import { JwtModule } from '@nestjs/jwt';

export const JWT_SECRET = 'this is a secret';

@Module({
  imports: [
    SequelizeModule.forFeature([Token]),
    JwtModule.register({
      global: true,
      secret: JWT_SECRET,
    })
  ],
  controllers: [TokenController],
  providers: [TokenService],
})
export class TokenModule { }
