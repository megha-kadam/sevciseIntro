import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SnackbarService } from 'src/app/services/snacbar.service';
import { TodoService } from 'src/app/services/todo.service';
import { Itodo } from 'src/app/shared/models/todo.interface';
import { GetConfirmComponent } from '../get-confirm/get-confirm.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
todosArr : Array<Itodo> = [];

constructor(private _todoService : TodoService,
          private _matdialog : MatDialog,
         private _snackBar : SnackbarService

){}

onRemoveTodo(todo : Itodo){
  let matconfig = new MatDialogConfig();
  matconfig.width = "400px";
  
  let matdialog = this._matdialog.open(GetConfirmComponent, matconfig);

  matdialog.afterClosed()
  .subscribe(res => {
    if(res){
      this._todoService.removeTodo(todo);

      this._snackBar.openSnackBar(`${todo.todoItem} removed successfully!!`)
    }
  })
}

 ngOnInit(): void {
   this.todosArr = this._todoService.fetchAllTodo()
 }

}
