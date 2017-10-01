import { Component, OnInit } from '@angular/core';
// import * as $ from 'jquery';

@Component({
  selector: 'app-jhipster-dropdown-menu',
  templateUrl: 'jhipster-dropdown-menu.component.html',
  styleUrls: ['jhipster-dropdown-menu.component.css']
})
export class JhipsterDropdownMenuComponent implements OnInit {

  public functionList: Array<any >;
  public functionsArgValuesList: Array<Array<any>>;
  public linkNameList: Array<string>;

  public functionOpenPopupOneArgs: Array<any>;
  public functionOpenPopupTwoArgs: Array<any>;
  public functionOpenPopupThreeArgs: Array<any>;
  public functionOpenPopupFourNoArgs: Array<any>;

  public secondFunctionList: Array<any >;
  public secondFunctionsArgValuesList: Array<Array<any>>;
  public secondLinkNameList: Array<string>;

  constructor() {
    this.functionList = [this.openPopupOne, this.openPopupTwo, this.openPopupThree, this.openPopupFour];
    this.secondFunctionList = [this.openSecondPopupOne, this.openSecondPopupTwo];
    this.functionsArgValuesList = [];
    this.secondFunctionsArgValuesList = [];

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
    ];

    this.secondFunctionsArgValuesList.push(this.functionOpenPopupOneArgs);
    this.secondFunctionsArgValuesList.push(this.functionOpenPopupTwoArgs);
    this.secondLinkNameList = [
      'second link one call openPopupOne',
      'second link two call openPopupTwo'
    ];
  }

  ngOnInit() {
  }

  public openPopupOne = function(arg1?: number) {
    alert('openPopupOne from jhipster component');
    console.log(arg1);
  };

  public openPopupTwo = function(arg1?: string, arg2?: string) {
    alert('openPopupTwo from jhipster component');
    console.log(arg1);
    console.log(arg2);
  };

  public openPopupThree = function(arg1?: number, arg2?: string, arg3?: any) {
    alert('openPopupThree from jhipster component');
    console.log(arg1);
    console.log(arg2);
    console.log(arg3);
  };

  public openPopupFour = function() {
    alert('openPopupFour has no args from jhipster component');
  };


  public openSecondPopupOne = function(arg1?: number) {
    alert('openSecondPopupOne from jhipster component');
    console.log(arg1);
  };

  public openSecondPopupTwo = function(arg1?: string, arg2?: string) {
    alert('openSecondPopupTwo from jhipster component');
    console.log(arg1);
    console.log(arg2);
  };


  public openPopupOneForJh() {
    alert('popup one');
  }

  public openPopupTwoForJh() {
    alert('popup two');
  }

  public openPopupThreeForJh() {
    alert('popup three');
  }

  public getImageUrl(): string {
    return 'false';
  }
}
