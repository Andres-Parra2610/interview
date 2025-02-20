import { Injectable } from '@nestjs/common';
import { CreateTokenDto } from './dto/create-token.dto';
import { UpdateTokenDto } from './dto/update-token.dto';
import { Token } from './entities/token.entity';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class TokenService {

  constructor(@InjectModel(Token) private jwtModel: typeof Token) { }

  create(createJwtDto: CreateTokenDto) {
    return 'this action adds a new jwt';
  }

  find() {
    return `This action returns all jwt`;
  }

  update(id: number, updateJwtDto: UpdateTokenDto) {
    return `This action updates a #${id} jwt`;
  }

  remove(id: number) {
    return `This action removes a #${id} jwt`;
  }
}
