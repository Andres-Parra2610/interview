import { Controller, Get, Post, Body, Delete } from '@nestjs/common';
import { TokenService } from './token.service';
import { CreateTokenDto } from './dto/create-token.dto';
import { Headers } from '@nestjs/common';
import { extractTokenFromHeader } from './helpers';

@Controller('token')
export class TokenController {
  constructor(private readonly tokenService: TokenService) { }

  @Post()
  create(@Body() createJwtDto: CreateTokenDto) {
    return this.tokenService.createToken(createJwtDto);
  }


  @Get('verify')
  verify(@Headers() headers: Headers) {
    const token = extractTokenFromHeader(headers);
    return this.tokenService.verifytoken(token);
  }

  @Delete()
  delete(@Headers() headers: Headers) {
    const token = extractTokenFromHeader(headers);
    return this.tokenService.deleteToken(token);
  }

}
