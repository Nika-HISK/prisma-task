import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('users')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getUsers() {
    return this.appService.getUsers();
  }

  @Post()
  createUser(@Body() body: { name: string; email: string }) {
    return this.appService.createUser(body.name, body.email);
  }

  @Put(':id')
  updateUser(
    @Param('id') id: string,
    @Body() body: { name: string; email: string },
  ) {
    return this.appService.updateUser(id, body.name, body.email);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.appService.delete(id);
  }
}
