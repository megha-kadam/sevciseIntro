import { Injectable } from "@angular/core";
import { MatSnackBar, MatSnackBarConfig } from "@angular/material/snack-bar";

@Injectable({
    providedIn: 'root'
})
export class SnackbarService{
  constructor(private _snackbar : MatSnackBar){}

  private readonly matConfig : MatSnackBarConfig = {
    duration : 3000,
    horizontalPosition : "left",
    verticalPosition : "top"
  }
  

  openSnackBar(msg : string){
    this._snackbar.open(msg, "Close", this.matConfig)
  }
  
}