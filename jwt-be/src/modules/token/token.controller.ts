import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TokenService } from './token.service';
import { CreateTokenDto } from './dto/create-token.dto';
import { UpdateTokenDto } from './dto/update-token.dto';

@Controller('token')
export class TokenController {
  constructor(private readonly jwtService: TokenService) { }

  @Post()
  create(@Body() createJwtDto: CreateTokenDto) {
    return this.jwtService.create(createJwtDto);
  }


  @Patch(':id')
  update(@Param('id') id: string, @Body() updateJwtDto: UpdateTokenDto) {
    return this.jwtService.update(+id, updateJwtDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.jwtService.remove(+id);
  }
}
