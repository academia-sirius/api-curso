import { Body, Controller, Delete, Get, Param, Patch, Post, Put, ParseIntPipe} from '@nestjs/common';
import {CreateUserDTO} from './user.dto/createUser.dto';
import { UpdatePutUserDTO } from './user.dto/updatePutUser.dto';
import { UpdatePatchUserDTO } from './user.dto/updatePatchUser.dto';

@Controller('users')
export class UserController {
  @Post()
  async create(@Body() {name,email,password}:CreateUserDTO) {
    return { name,email,password };
  }
  @Get()
  async read() {
    return { users: [] };
  }
  @Get(':id')
  async readOne(@Param('id',ParseIntPipe) id) {
    return { user: {}, id };
  }
  @Put(':id')
  async updatePut(@Body() body:UpdatePutUserDTO, @Param('id',ParseIntPipe) id) {
    return { method: 'Put', body, id };
  }
  @Patch(':id')
  async updatePatch(@Body() body:UpdatePatchUserDTO, @Param('id',ParseIntPipe) id) {
    return { method: 'Patch', body, id };
  }
  @Delete(':id')
  async delete(@Param('id',ParseIntPipe) id){
    return { id}
  }

  /** 
   * aqui embora receba id no Decorator Delete mas ele retorna todos os Param
   *  
   *  @Delete(':id')
        async delete(@Param() Param){
        return { Param}
  }

  @Get(':id')
  async readOne(@Param() Param) {
    return { user: {}, Param };
  }
  @Put(':id')
  async updatePut(@Body() body:UpdatePutUserDTO, @Param() Param) {
    return { method: 'Put', body, Param };
  }
  @Patch(':id')
  async updatePatch(@Body() body:UpdatePatchUserDTO, @Param() Param) {
    return { method: 'Patch', body, Param };
  }


   */
}
