import { Injectable } from '@nestjs/common';
import { CreateTokenDto } from './dto/create-token.dto';
import { Token } from './entities/token.entity';
import { InjectModel } from '@nestjs/sequelize';
import { IJwtPayload } from './interface';
import { JwtService } from '@nestjs/jwt';
import { ErrorResponse } from 'src/core/exceptions/interface';

@Injectable()
export class TokenService {

  constructor(
    @InjectModel(Token) private tokenModel: typeof Token,
    private jwtService: JwtService,
  ) { }

  async signToken(payload: IJwtPayload) {
    return this.jwtService.signAsync(payload)
  }

  async findToken(token: string) {
    const dbToken = await this.tokenModel.findOne({ where: { token } })

    if (!dbToken) {
      throw new ErrorResponse({
        message: 'Token no encontrado',
        statusCode: 404
      })
    }

    return {
      message: 'Token verificado correctamente'
    }

  }

  async create(createJwtDto: CreateTokenDto) {
    const token = await this.signToken(createJwtDto);
    await this.tokenModel.create({ token })
    return {
      token,
      userName: createJwtDto.userName
    }
  }
}
