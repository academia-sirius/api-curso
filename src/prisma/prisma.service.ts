import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from 'generated/prisma';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    // throw new Error('Method not implemented.');
    await this.$connect();
  }

  async enableShutdownHook(app: INestApplication){
    process.on('beforeExit', async ()=>{
      await app.close();
    })
  }




  /**
   * 
   *   async enableShutdownHook(app: INestApplication){
    this.$on('beforeExit', async ()=>{
      await app.close();
    })
  }
   */
}
