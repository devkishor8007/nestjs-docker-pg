import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class TodoService {
  constructor(private readonly prismaService: PrismaService) {}
  async create(createTodoDto: Prisma.TodoCreateInput) {
    return await this.prismaService.todo.create({
      data: {
        name: createTodoDto.name,
        isPublished: createTodoDto.isPublished,
        taskComplete: createTodoDto.taskComplete,
      },
    });
  }

  async findAll() {
    const todos = await this.prismaService.todo.findMany({
      orderBy: {
        updateAt: 'desc',
      },
      select: {
        id: true,
        name: true,
        isPublished: true,
        taskComplete: true,
      },
    });
    return { count: todos.length, data: todos };
  }

  async findOne(id: string) {
    return await this.prismaService.todo.findUnique({
      where: { id },
    });
  }
}
