import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ChangeTodo } from './dto/changeTodo.dto';
import { CreateTodo } from './dto/createTodo.dto';
import { TodoService } from './todo.service';

@Controller('todos')
export class TodoContainer {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  getAllTodos() {
    return this.todoService.findAll();
  }

  @Get(':id')
  getTodoById(@Param('id') id: string) {
    return this.todoService.findOne(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Content-Type', 'application/json')
  createTodo(@Body() createTodo: CreateTodo) {
    return this.todoService.create(createTodo);
  }

  @Patch(':id')
  changeTodo(@Body() changeTodo: ChangeTodo, @Param('id') id: string) {
    return this.todoService.update(id, changeTodo);
  }

  @Delete(':id')
  removeTodo(@Param('id') id: string) {
    return this.todoService.remove(id);
  }
}
