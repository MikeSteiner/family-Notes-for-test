import { Component, OnInit } from '@angular/core';
// import {  } from '../../../../../node_modules/ng-pick-datetime/assets/style/picker.min.css'

@Component({
  selector: 'app-primeng-calender',
  templateUrl: 'primeng-calender.component.html',
  styleUrls: [
    'primeng-calender.component.css',
    '../../../../../node_modules/ng-pick-datetime/assets/style/picker.min.css'
  ]
})
export class PrimeNgCalenderComponent implements OnInit {

  public selectedDateTime: Date;
  public selectedDateTimeStr: any;

  public input1Moment: any;

  constructor() { }

  ngOnInit() {
  }

}
