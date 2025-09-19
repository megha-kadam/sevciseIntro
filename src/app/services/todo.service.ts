import { Injectable } from "@angular/core";
import { Itodo } from "../shared/models/todo.interface";

@Injectable({
    providedIn : 'root'
})
export class TodoService{
    todosArr : Array<Itodo> = [
        {
            todoItem : 'HTML',
            todoId : '123'
        },
        {
            todoItem : 'CSS ',
             todoId : '124'
        },
        {
            todoItem : 'JS',
             todoId : '125'
        }
    ]

    fetchAllTodo() : Array<Itodo> {
        return this.todosArr
    }

    createTodo(todo : Itodo){
        this.todosArr.push(todo)
    }

    removeTodo(todo : Itodo){
        let getIndex = this.todosArr.findIndex(todo => todo.todoId === todo.todoId);
        this.todosArr.splice(getIndex, 1);
    }
}