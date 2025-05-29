import { IsEmail, IsNotEmpty, IsString, IsStrongPassword } from 'class-validator';
import { CreateUserDTO } from './createUser.dto';

export class UpdatePutUserDTO extends CreateUserDTO{
 // ao fazer extends CreateUserDTO estou herdando os validators do createUserDTO para ca!

 
}
