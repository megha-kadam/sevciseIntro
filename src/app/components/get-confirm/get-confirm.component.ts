import { DIALOG_DATA } from '@angular/cdk/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-get-confirm',
  templateUrl: './get-confirm.component.html',
  styleUrls: ['./get-confirm.component.scss']
})
export class GetConfirmComponent implements OnInit {
  msg !: string;

  constructor(private _matDialog : MatDialogRef<GetConfirmComponent>,
            @Inject(MAT_DIALOG_DATA)  getmsg : string 
  ) {this.msg = getmsg }

  onClose(flag : boolean){
    this._matDialog.close(flag);
  }

  ngOnInit(): void {
  }

}
