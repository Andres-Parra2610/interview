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

  async verifytoken(token: string) {
    await this.findToken(token)
    return {
      statusCode: 200,
      message: 'Token verificado correctamente'
    }
  }

  async createToken(createJwtDto: CreateTokenDto) {
    const token = await this.signToken(createJwtDto);
    await this.tokenModel.create({ token })
    return {
      token,
      userName: createJwtDto.userName
    }
  }

  async findToken(token: string) {
    const dbToken = await this.tokenModel.findOne({ where: { token } })
    if (!dbToken) {
      throw new ErrorResponse({
        message: 'Token no encontrado',
        statusCode: 404
      })
    }
    return dbToken
  }

  async deleteToken(token: string) {
    const dbToken = await this.findToken(token)
    await this.tokenModel.destroy({ where: { token: dbToken.token } })
    return {
      statusCode: 200,
      message: 'Token eliminado correctamente'
    }

  }
}
