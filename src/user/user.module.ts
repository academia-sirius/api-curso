import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UserIdCheckMiddleware } from 'src/middlewares/user-id-check-middleware';

// para aceder as funcionalidades do prismaservice devo chamar o modulo dele no imports
@Module({
  imports: [PrismaModule],
  controllers: [UserController],
  providers: [UserService],
  exports: [],
})
export class UserModule implements NestModule {

  configure(consumer: MiddlewareConsumer) {
      consumer.apply(UserIdCheckMiddleware).forRoutes({
        path: 'users/:id',
        method: RequestMethod.ALL
      })
  }

}
