import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
} from 'class-validator';
import { CreateUserDTO } from './createUser.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdatePatchUserDTO extends PartialType(CreateUserDTO) {
  // ao fazer PartialType(CreateUserDTO)  ele valida tudo no createUserDTO mas parcialmente
}
