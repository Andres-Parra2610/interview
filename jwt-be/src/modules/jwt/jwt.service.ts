import { Injectable } from '@nestjs/common';
import { CreateJwtDto } from './dto/create-jwt.dto';
import { UpdateJwtDto } from './dto/update-jwt.dto';
import { Jwt } from './entities/jwt.entity';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class JwtService {

  constructor(@InjectModel(Jwt) private jwtModel: typeof Jwt) { }

  create(createJwtDto: CreateJwtDto) {
    return 'this action adds a new jwt';
  }

  find() {
    return `This action returns all jwt`;
  }

  update(id: number, updateJwtDto: UpdateJwtDto) {
    return `This action updates a #${id} jwt`;
  }

  remove(id: number) {
    return `This action removes a #${id} jwt`;
  }
}
