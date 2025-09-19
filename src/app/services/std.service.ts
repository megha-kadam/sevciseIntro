import { Injectable } from "@angular/core";
import { Istd } from "../shared/models/std.interface";
import { Observable, of } from "rxjs";
import { MatSnackBar } from "@angular/material/snack-bar";
import { SnackbarService } from "./snacbar.service";

@Injectable({
    providedIn : 'root'
})
export class StdService{
    stdArr : Array<Istd> =  [
   {
            fName : "Jhon",
            lName : "Doe",
            email : "jd@gmail.com",
            contact : 1234567890,
            id : '123'
        },
        {
            fName : "June",
            lName : "Doe",
            email : "jd@gmail.com",
             id : '123',
            contact : 1234567890
        }
];

fetchAllStd() : Array<Istd> {
  return this.stdArr
}

createStd(std : Istd){
  this.stdArr.push(std)
}

removeStd(std : Istd){
  let getIndex = this.stdArr.findIndex(std => std.id === std.id);
  this.stdArr.splice(getIndex, 1);
}
}