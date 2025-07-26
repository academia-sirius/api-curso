import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  ParseIntPipe,
  UseInterceptors,
} from '@nestjs/common';
import { CreateUserDTO } from './user.dto/createUser.dto';
import { UpdatePutUserDTO } from './user.dto/updatePutUser.dto';
import { UpdatePatchUserDTO } from './user.dto/updatePatchUser.dto';
import { UserService } from './user.service';
import { LogInterceptor } from 'src/interceptors/log.interceptor';

// @UseInterceptors(LogInterceptor)  // interceptors - class
@Controller('users')
export class UserController {
  constructor(private readonly userservice: UserService) {}

  // @UseInterceptors(LogInterceptor)  // interceptors - metodo
  @Post()
  async create(@Body() { name, email, password, birthAt }: CreateUserDTO) {
    // return { name,email,password };
   return this.userservice.create({ name, email, password, birthAt });
  }
  @Get()
  async read() {
    // return { users: [] };
    return this.userservice.readAll();
  }

  // nesse caso aqui o id do parseintpipe deve ser id:number
  @Get(':id')
  async readOne(@Param('id', ParseIntPipe) id: number) {
    // return { user: {}, id };
   // return this.userservice.readOne(id);
   return this.userservice.readOneOther(id);
  }

  @Put(':id')
  async updatePut(
    @Body() body: UpdatePutUserDTO,
    @Param('id', ParseIntPipe) id,
  ) {
   // return { method: 'Put', body, id };
   return this.userservice.updatePut(id,body);
  }

  @Patch(':id')
  async updatePatch(
    @Body() body: UpdatePatchUserDTO,
    @Param('id', ParseIntPipe) id,
  ) {
    //return { method: 'Patch', body, id };
    return this.userservice.updatePatch(id,body);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id) {
   // return { id };
   return this.userservice.Delete(id);
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
