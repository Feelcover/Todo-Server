import { IsNotEmpty } from "class-validator";

export class CreateTodo {
    @IsNotEmpty()
  readonly title: string;
}
