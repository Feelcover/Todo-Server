import {
  Body,
  Controller,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { CreateTodo } from './dto/createTodo.dto';
import { TodoService } from './todo.service';

@Controller('todos')
export class TodoContainer {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  GetAllTodos() {
    return this.todoService.findAll();
  }

  @Get(':id')
  GetTodoById(@Param('id') id: string) {
    return this.todoService.findOne(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Content-Type', 'application/json')
  CreateTodo(@Body() createTodo: CreateTodo) {
    return this.todoService.create(createTodo);
  }
}
