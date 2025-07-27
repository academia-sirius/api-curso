import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDTO } from './user.dto/createUser.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdatePutUserDTO } from './user.dto/updatePutUser.dto';
import { UpdatePatchUserDTO } from './user.dto/updatePatchUser.dto';

@Injectable()
export class UserService {
  constructor(private readonly prismaservice: PrismaService) {}

  async create({ name, email, password,birthAt}: CreateUserDTO) {
    return await this.prismaservice.user.create({
      data: {
        name,
        email,
        password,
        birthAt,
      },
      select: {
        id:true,
        name:true,
        email:true,
        password:true,
        birthAt:true,
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

  
  async LocatedID(id: number) {
    const findId = this.prismaservice.user.findUnique({
      where: { id },
    });
    return findId;
  }

  async updatePut(id: number, { name, email, password, birthAt }: UpdatePutUserDTO) {
    await this.Exists(id);
    return this.prismaservice.user.update({
        data: { name, email, password , birthAt : birthAt ? new Date(birthAt): ''},
        where:{
            id
        }
    })
  }

  async updatePatch(id: number, { name, email, password, birthAt }:UpdatePatchUserDTO){
    const data:any = {};
    if(birthAt){ data.birthAt = new Date(birthAt); }
    if(email){ data.email = email; }
    if(name){ data.name = name; }
    if(password){ data.password = password; }

    await this.Exists(id);
    return this.prismaservice.user.update({
        data,
        where:{
            id
        }
    })
  }

  async Delete(id:number){
    await this.Exists(id);
    return this.prismaservice.user.delete({where:{id}});
  }

  async Exists(id:number){
        if(!(await this.LocatedID(id))){
      throw new NotFoundException(`O usuario ${id} nao encontrado`)
    }
  }

  async readOneOther(id: number) {
    const findId = await this.prismaservice.user.findUnique({where: { id },});
    const total: number = await this.prismaservice.user.count();
    if(!(findId)){
      throw new NotFoundException(`O usuario ${id} nao existe no range de ${total}`)
    }
    return findId;
  }
}
