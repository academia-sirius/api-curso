import { IsDateString, IsEmail, IsNotEmpty, IsOptional, IsString, IsStrongPassword } from 'class-validator';
import { IsAngolanID } from 'src/decorators/is-angolan-id.decorator';

export class CreateUserDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  
  @IsNotEmpty()
  @IsEmail()
  email: string;

  // se quiser usar senha fraca so zerar tudo menos minLength
  @IsStrongPassword({ minLength: 5, minLowercase: 1,  minUppercase: 1,  minNumbers: 1, minSymbols: 1, })
  @IsNotEmpty()
  password: string;

  @IsOptional()
  @IsDateString()
  birthAt: string;

  @IsAngolanID()
  bi?: string;
}
