import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-application-status',
  templateUrl: './application-status.component.html',
  styleUrls: ['./application-status.component.css']
})
export class ApplicationStatusComponent implements OnInit {

  public functionList: Array<any >;
  public functionsArgValuesList: Array<Array<any>>;
  public functionOpenPopupOneArgs: Array<any>;
  public functionOpenPopupTwoArgs: Array<any>;
  public functionOpenPopupThreeArgs: Array<any>;

  public linkNameList: Array<string>;

  constructor() {
    this.functionList = [this.openPopupOne, this.openPopupTwo, this.openPopupThree];
    this.functionsArgValuesList = [];

    this.functionOpenPopupOneArgs = [1, 2, 3];
    this.functionOpenPopupTwoArgs = ['one', 'two', 'three'];
    this.functionOpenPopupThreeArgs = [1, 'two', {}];
    this.functionsArgValuesList.push(this.functionOpenPopupOneArgs);
    this.functionsArgValuesList.push(this.functionOpenPopupTwoArgs);
    this.functionsArgValuesList.push(this.functionOpenPopupThreeArgs);

    this.linkNameList = [
      'Link one with f1',
      'Link two with f2',
      'Link three with f3'
    ]
  }

  ngOnInit() {
  }

  public openPopupOne = function() {
    alert('Home from app component');
  };

  public openPopupTwo = function() {
    alert('About  from app component');
  };

  public openPopupThree = function() {
    alert('Contracts  from app component');
  };

}
