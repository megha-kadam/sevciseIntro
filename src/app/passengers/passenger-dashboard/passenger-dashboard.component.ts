import { Component, OnInit } from '@angular/core';
import { PassengerService } from 'src/app/services/passenger.service';
import { Ipass } from 'src/app/shared/models/passenger.interface';

@Component({
  selector: 'app-passenger-dashboard',
  templateUrl: './passenger-dashboard.component.html',
  styleUrls: ['./passenger-dashboard.component.scss']
})
export class PassengerDashboardComponent implements OnInit {
  passengersArr : Array<Ipass> = [];

  checkInCount !: number;
 
  constructor(private _passenger : PassengerService){}

  ngOnInit(): void {
   this.getAllPassenger();
  }

  getAllPassenger(){
     this._passenger.fetchAllPassenger()
    .subscribe({
      next : data => {
        this.passengersArr = data
        this.getCheckInCount()
      },
      error : err => console.log("Something went wrong")
    })
  }

  getCheckInCount(){
    let arr = this.passengersArr.filter(pass => pass.checkedIn);
    this.checkInCount = arr.length
  }

  getRemovFlag(event : boolean){
    this.getCheckInCount()
  }
}
