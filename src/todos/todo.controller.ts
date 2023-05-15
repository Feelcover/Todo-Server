import { Controller, Get, Param } from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller("todos")
export class TodoContainer {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  GetAllTodos() {
    return this.todoService.findAll();
  }

  @Get(":id")
  GetTodoById(@Param("id") id: string) {
    return this.todoService.findOne(id);
  }
}
