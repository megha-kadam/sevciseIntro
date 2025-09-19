import { Injectable } from "@angular/core";
import { Ipass } from "../shared/models/passenger.interface";
import { Observable, of } from "rxjs";
import { SnackbarService } from "./snacbar.service";

@Injectable({
    providedIn : 'root'
})
export class PassengerService{
    passengerArr : Array<Ipass> = [
        {
            id : 1,
            fullName : "Stephen",
            checkedIn : true,
            checkInDate : 123460987,
            children : null,
        },
         {
            id : 2,
            fullName : "Rose",
            checkedIn : false,
            checkInDate : 123460987,
            children : [
                {fName : 'jhon', age : 24},
                {fName : 'june', age : 22}
            ]
        },
         {
            id : 3,
            fullName : "James",
            checkedIn : true,
            checkInDate : 123460987,
            children : null,
        },
          {
            id : 4,
            fullName : "Rose",
            checkedIn : false,
            checkInDate : 123460987,
            children : [
                {fName : 'May', age : 24},
                {fName : 'july', age : 22}
            ]
        },
         {
            id : 5,
            fullName : "Tina",
            checkedIn : false,
            checkInDate : 123460987,
            children : null,
        }
    ]

    constructor(private _snackbar : SnackbarService){}

    updatePassengerDetails(pass : Ipass){
        let getIndex = this.passengerArr.findIndex(pass => pass.id === pass.id);
        this.passengerArr[getIndex] = pass;

        this._snackbar.openSnackBar(`passenger fullname updated Successfully!!!`)
    }

    fetchAllPassenger() : Observable<Ipass[]> {
        return of(this.passengerArr)
    }

    removePassenger(pass : Ipass){
        let getIndex = this.passengerArr.findIndex(pass => pass.id === pass.id);
        this.passengerArr.splice(getIndex, 1)
    }
}