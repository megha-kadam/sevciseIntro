import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SnackbarService } from 'src/app/services/snacbar.service';
import { TodoService } from 'src/app/services/todo.service';


@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
  @ViewChild('todoForm') todoForm !: NgForm;

  constructor(private _todoService : TodoService,
              private _snackBar : SnackbarService
  ){}
 
  onAddTodo(){
    let todoObj = this.todoForm.value;
    console.log(todoObj);
    
    this.todoForm.reset();
    this._todoService.createTodo(todoObj);
    this._snackBar.openSnackBar(`New Todo ${todoObj.todoItem} added successfully!!!`);
  }

  ngOnInit(): void {

  }

}
