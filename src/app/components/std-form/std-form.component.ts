import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SnackbarService } from 'src/app/services/snacbar.service';
import { StdService } from 'src/app/services/std.service';
import { UuidService } from 'src/app/services/uuid.service';
import { Istd } from 'src/app/shared/models/std.interface';



@Component({
  selector: 'app-std-form',
  templateUrl: './std-form.component.html',
  styleUrls: ['./std-form.component.scss']
})
export class StdFormComponent implements OnInit {
  @ViewChild('stdForm') stdForm !: NgForm;

  constructor(private _stdService : StdService,
              private _snackbar : SnackbarService,
              private _uuidService : UuidService
  ){

  }

  onAddStd(){
    if(this.stdForm.valid){
      let stdObj : Istd = {
      ...this.stdForm.value,
      contact : +this.stdForm.controls["contact"].value,
      id : this._uuidService.generateUuid()
    }
    this.stdForm.reset()

    this._stdService.createStd(stdObj);
    this._snackbar.openSnackBar(`New student ${stdObj} added successfully!!!`)
    }
  }
 ngOnInit(): void {
   
 }
}
