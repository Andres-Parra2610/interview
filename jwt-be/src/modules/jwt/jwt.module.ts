import { Module } from '@nestjs/common';
import { JwtService } from './jwt.service';
import { JwtController } from './jwt.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Jwt } from './entities/jwt.entity';

@Module({
  imports: [SequelizeModule.forFeature([Jwt])],
  controllers: [JwtController],
  providers: [JwtService],
})
export class JwtModule { }
