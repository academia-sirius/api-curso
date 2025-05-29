import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDTO } from './user.dto/createUser.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdatePutUserDTO } from './user.dto/updatePutUser.dto';
import { UpdatePatchUserDTO } from './user.dto/updatePatchUser.dto';

@Injectable()
export class UserService {
  constructor(private readonly prismaservice: PrismaService) {}

  async create({ name, email, password }: CreateUserDTO) {
    return await this.prismaservice.user.create({
      data: {
        name,
        email,
        password,
      },
      select: {
        id: true,
        name: true,
      },
    });
  }

  async readAll() {
    const ListUsers = this.prismaservice.user.findMany();
    return ListUsers;
  }

  async readOne(id: number) {
    const findId = this.prismaservice.user.findUnique({
      where: { id },
    });
    return findId;
  }

  async totalRegistro(): Promise<number> {
    return this.prismaservice.user.count();
  }

  async readOneOther(id: number) {
    const findId = this.prismaservice.user.findUnique({
      where: { id },
    });
    const total = await this.totalRegistro();
    if (id < 0 && id > total) {
        console.log('ID fora do intervalo');
        throw new NotFoundException('ID fora do intervalo');   
    }
   // console.log(`${id} :: ${total}`);
    return findId;
  }

  async updatePut(id: number, { name, email, password }: UpdatePutUserDTO) {
    if(email===undefined){ email =''; }
    return this.prismaservice.user.update({
        data: { name, email, password },
        where:{
            id
        }
    })
  }

  async updatePatch(id: number, data:UpdatePatchUserDTO){
    return this.prismaservice.user.update({
        data,
        where:{
            id
        }
    })
  }
}
