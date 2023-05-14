import { Get } from "@nestjs/common";
import { TodoService } from "./todo.service";

export class TodoContainer {
    constructor (private readonly todoService: TodoService){
    }
    @Get()
}