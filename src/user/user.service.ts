import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './user.dto/createUser.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prismaservice: PrismaService) {}

 async create({ name, email, password }: CreateUserDTO) {
   return await this.prismaservice.user.create({
      data: {
        name,
        email,
        password,
      },select:{
        id: true,
        name: true
      }
    });
  }
}
