import { Component, Input, OnInit } from '@angular/core';
import { Ipass } from 'src/app/shared/models/passenger.interface';

@Component({
  selector: 'app-passenger-count',
  templateUrl: './passenger-count.component.html',
  styleUrls: ['./passenger-count.component.scss']
})
export class PassengerCountComponent implements OnInit {
  @Input() totalPassCount !: number;
  @Input() checkInCount !: number;

  constructor() { }

  ngOnInit(): void {
  }

}
