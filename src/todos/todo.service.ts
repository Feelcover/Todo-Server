import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateTodo } from './dto/createTodo.dto';
import { ChangeTodo } from './dto/changeTodo.dto';
import { TodoModel } from './models/todo.model';

@Injectable()
export class TodoService {
  constructor(
    @InjectModel(TodoModel)
    private todoModel: typeof TodoModel,
  ) {}
  async findAll(): Promise<TodoModel[]> {
    return this.todoModel.findAll();
  }
  async findOne(id: string): Promise<TodoModel> {
    return this.todoModel.findOne({
      where: {
        id,
      },
    });
  }

  create(createTodo: CreateTodo): Promise<TodoModel> {
    const todo = new TodoModel();
    todo.title = createTodo.title;
    todo.done = createTodo.done;

    return todo.save();
  }

  update(
    id: string,
    changeTodo: ChangeTodo,
  ): Promise<[affectedCount: number, affectedRows: TodoModel[]]> {
    return this.todoModel.update(
      { ...changeTodo },
      {
        where: {
          id,
        },
        returning: true,
      },
    );
  }
}
