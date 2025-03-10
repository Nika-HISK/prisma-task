import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {}

  getUsers() {
    const name = 'john';
    return this.prisma.user.findMany({ include: { Posts: true } });
  }

  createUser(name: string, email: string) {
    return this.prisma.user.create({
      data: {
        name,
        email,
        Posts: {
          create: { title: 'Hello World', content: 'This is a test post' },
        },
      },
    });
  }

  updateUser(id: string, name: string, email: string) {
    return this.prisma.user.update({
      where: { id },
      data: { name, email },
    });
  }

  delete(id: string) {
    return this.prisma.user.delete({
      where: { id },
    });
  }


  sqlRequest() {
    return this.prisma.$queryRaw`SELECT * FROM User where email = ${'test@test.com'}`;
  }
}
