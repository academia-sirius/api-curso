import { Injectable } from '@nestjs/common';
@Injectable()
export class AppService {
  getHello(): string {
    return 'Applications is running'; 
  }
  setHello(): string {
    return 'post data';
  }
}
