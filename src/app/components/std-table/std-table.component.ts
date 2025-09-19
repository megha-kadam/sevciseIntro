import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SnackbarService } from 'src/app/services/snacbar.service';
import { StdService } from 'src/app/services/std.service';
import { Istd } from 'src/app/shared/models/std.interface';
import { GetConfirmComponent } from '../get-confirm/get-confirm.component';

@Component({
  selector: 'app-std-table',
  templateUrl: './std-table.component.html',
  styleUrls: ['./std-table.component.scss']
})
export class StdTableComponent implements OnInit {
 stdArr : Array<Istd> = [];

 constructor(private _stdService : StdService,
            private _snackbar : SnackbarService,
            private _matDialog : MatDialog
 ){}

 onRemoveStd(std : Istd){
  let matConfig = new MatDialogConfig();
  matConfig.width = "400px"

  let matDialog = this._matDialog.open(GetConfirmComponent, matConfig);

  matDialog.afterClosed()
  .subscribe(res => {
    if(res){
      this._stdService.removeStd(std);
      this._snackbar.openSnackBar(`Studen ${std.fName} ${std.lName} removed successfully!!1`)
    }
  })
 }

  ngOnInit(): void {
  this.stdArr = this._stdService.fetchAllStd()
  }

}
