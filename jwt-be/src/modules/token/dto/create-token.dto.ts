import { IsString, MinLength } from "class-validator";

export class CreateTokenDto {
  @IsString({ message: 'El nombre de usuario debe ser un string' })
  @MinLength(3, { message: 'El nombre de usuario debe tener al menos 3 caracteres' })
  userName: string;
}
