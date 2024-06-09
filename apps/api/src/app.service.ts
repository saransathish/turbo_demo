import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  arr:string[] = ['agdg' , 'sjgfiu' , 'kugd']

  getHello(): string[] {
    return this.arr;
  }
}
