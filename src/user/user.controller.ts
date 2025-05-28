import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import e from 'express';

@Controller('users')
export class UserController {
  @Post()
  async create(@Body() body) {
    return { body };
  }
  @Get()
  async read() {
    return { users: [] };
  }
  @Get(':id')
  async readOne(@Param() Param) {
    return { user: {}, Param };
  }
  @Put(':id')
  async updatePut(@Body() body, @Param() Param) {
    return { method: 'Put', body, Param };
  }
  @Patch(':id')
  async updatePatch(@Body() body, @Param() Param) {
    return { method: 'Patch', body, Param };
  }
  @Delete(':id')
  async delete(@Param() Param){
    return { Param}
  }
}
