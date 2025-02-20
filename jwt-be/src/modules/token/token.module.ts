import { Module } from '@nestjs/common';
import { TokenService } from './token.service';
import { TokenController } from './token.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Token } from './entities/token.entity';

@Module({
  imports: [
    SequelizeModule.forFeature([Token]),
    TokenModule
  ],
  controllers: [TokenController],
  providers: [TokenService],
})
export class TokenModule { }
