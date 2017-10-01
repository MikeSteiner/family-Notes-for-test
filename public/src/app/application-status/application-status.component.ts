import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-application-status',
  templateUrl: './application-status.component.html',
  styleUrls: ['./application-status.component.css']
})
export class ApplicationStatusComponent implements OnInit {

  public functionList: Array<any >;
  public functionsArgValuesList: Array<Array<any>>;
  public linkNameList: Array<string>;

  public functionOpenPopupOneArgs: Array<any>;
  public functionOpenPopupTwoArgs: Array<any>;
  public functionOpenPopupThreeArgs: Array<any>;
  public functionOpenPopupFourNoArgs: Array<any>;

  constructor() {
    this.functionList = [this.openPopupOne, this.openPopupTwo, this.openPopupThree, this.openPopupFour];
    this.functionsArgValuesList = [];

    this.functionOpenPopupOneArgs = [1];
    this.functionOpenPopupTwoArgs = ['one', 'two'];
    this.functionOpenPopupThreeArgs = [1, 'two', {}];
    this.functionOpenPopupFourNoArgs = [];
    this.functionsArgValuesList.push(this.functionOpenPopupOneArgs);
    this.functionsArgValuesList.push(this.functionOpenPopupTwoArgs);
    this.functionsArgValuesList.push(this.functionOpenPopupThreeArgs);
    this.functionsArgValuesList.push(this.functionOpenPopupFourNoArgs);

    this.linkNameList = [
      'link one call openPopupOne',
      'link two call openPopupTwo',
      'link three call openPopupThree',
      'link three call openPopupFour'
    ]
  }

  ngOnInit() {
  }

  public openPopupOne = function(arg1?: number) {
    alert('openPopupOne from app component');
    console.log(arg1);
  };

  public openPopupTwo = function(arg1?: string, arg2?: string) {
    alert('openPopupTwo from app component');
    console.log(arg1);
    console.log(arg2);
  };

  public openPopupThree = function(arg1?: number, arg2?: string, arg3?: any) {
    alert('openPopupThree from app component');
    console.log(arg1);
    console.log(arg2);
    console.log(arg3);
  };

  public openPopupFour = function() {
    alert('openPopupFour has no args from app component');
  };

}
