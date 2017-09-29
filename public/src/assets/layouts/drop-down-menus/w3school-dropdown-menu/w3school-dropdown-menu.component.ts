import {Component, OnInit, HostListener} from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-w3school-dropdown-menu',
  templateUrl: 'w3school-dropdown-menu.component.html',
  styleUrls: ['w3school-dropdown-menu.component.css']
})
export class W3schoolDropdownMenuComponent implements OnInit {

  @HostListener('window:click', ['$event']) dropDownClickListener($event) {
    console.log($event);

    if (!$event.target.matches('.dropbtn')) {
      const dropdowns = document.getElementsByClassName("dropdown-w3-content");
      for (let i = 0; i < dropdowns.length; i++) {
        const openDropDown = dropdowns[i];
        if (openDropDown.classList.contains('show')) {
          openDropDown.classList.remove('show');
        }
      }
    }
  }

  constructor() { }

  ngOnInit() {
  }

  public openPopupOne() {
    alert('Home');
  }

  public openPopupTwo() {
    alert('About');
  }

  public openPopupThree() {
    alert('Contracts');
  }

  public myFunction(evt: any) {
    // document.getElementById("myDropdownMain").classList.toggle("show");
    document.getElementById("myDropdownMain").classList.toggle("show");
  }

}
