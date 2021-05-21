import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './user.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(): Promise<User[]> {
    const user = await this.appService.createUser('test');

    // return this.appService.updateUser(user.id, 'Kioshi');

    // return this.appService.deleteUser(1);

    return this.appService.getAll();
  }
}
