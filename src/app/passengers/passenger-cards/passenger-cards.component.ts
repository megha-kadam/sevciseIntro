import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GetConfirmComponent } from 'src/app/components/get-confirm/get-confirm.component';
import { PassengerService } from 'src/app/services/passenger.service';
import { SnackbarService } from 'src/app/services/snacbar.service';
import { Ipass } from 'src/app/shared/models/passenger.interface';

@Component({
  selector: 'app-passenger-cards',
  templateUrl: './passenger-cards.component.html',
  styleUrls: ['./passenger-cards.component.scss']
})
export class PassengerCardsComponent implements OnInit {
  @Input() passCards !: Ipass;
  @Output() emitRemoveFlag : EventEmitter<boolean> = new EventEmitter<boolean>()

  constructor(private _passService : PassengerService,
              private _matdialog : MatDialog,
              private _snackbar : SnackbarService
  ){}

  isInEditMode : boolean = false;

  onUpdate(name : HTMLInputElement){
    let updateName = name.value;
    console.log(updateName);
    
    this._passService.updatePassengerDetails({
      ...this.passCards,
      fullName : updateName
    })
  }

  onRemovePassenger(pass : Ipass){
    let matCongig = new MatDialogConfig();
    matCongig.data = `Are you sure you want to remove ${pass.fullName} passenger`
    matCongig.width = "400px";
    matCongig.maxWidth = "90%";

    let matDialog = this._matdialog.open(GetConfirmComponent, matCongig);
    matDialog.afterClosed()
    .subscribe(res => {
      if(res){
        this._passService.removePassenger(pass);
        this.emitRemoveFlag.emit(true)
        this._snackbar.openSnackBar(`Passenger ${pass.fullName} removed successfully!!!`)
      }
    })
  }

 ngOnInit(): void {
   
 }
}
