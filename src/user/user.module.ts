import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

// para aceder as funcionalidades do prismaservice devo chamar o modulo dele no imports
@Module({
  imports: [PrismaModule],
  controllers: [UserController],
  providers: [UserService],
  exports: [],
})
export class UserModule {}
