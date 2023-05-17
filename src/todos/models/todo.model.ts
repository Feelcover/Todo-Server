import { Column, Table, Model } from 'sequelize-typescript';

@Table
export class TodoModel extends Model {
  @Column
  title: string;

  @Column
  done: boolean = false;
}
