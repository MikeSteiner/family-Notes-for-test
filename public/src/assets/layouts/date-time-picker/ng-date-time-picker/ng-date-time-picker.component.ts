import { Component, OnInit } from '@angular/core';
// import {  } from '../../../../../node_modules/ng-pick-datetime/assets/style/picker.min.css'

@Component({
  selector: 'app-ng-date-time-picker',
  templateUrl: 'ng-date-time-picker.component.html',
  styleUrls: [
    'ng-date-time-picker.component.css',
    '../../../../../node_modules/ng-pick-datetime/assets/style/picker.min.css'
  ]
})
export class NgDateTimePickerComponent implements OnInit {

  public selectedDateTime: Date;
  public selectedDateTimeStr: any;

  public input1Moment: any;

  constructor() { }

  ngOnInit() {
  }

}
