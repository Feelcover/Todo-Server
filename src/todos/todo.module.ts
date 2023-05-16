import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { TodoModel } from './models/todo.model';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';

@Module({
  imports: [SequelizeModule.forFeature([TodoModel])],
  providers: [TodoService],
  controllers: [TodoController],
})
export class TodoModule {}
