import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { TodoModel } from './models/todo.model';

@Injectable()
export class TodoService {
  constructor(
    @InjectModel(TodoModel)
    private todoModel: typeof TodoModel,
  ) {}
  async findAll():Promise<TodoModel[]> {
    return this.todoModel.findAll();
  }
}
