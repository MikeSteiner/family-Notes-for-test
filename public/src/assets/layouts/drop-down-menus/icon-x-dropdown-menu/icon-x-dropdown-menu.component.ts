import {Component, OnInit, HostListener} from '@angular/core';

@Component({
  selector: 'app-threelines2x-dropdown-menu',
  templateUrl: 'icon-x-dropdown-menu.component.html',
  styleUrls: [
    'icon-x-dropdown-menu.component.css'
  ]
})
export class IconXDropdownMenuComponent implements OnInit {

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
    document.getElementById("myDropdownMain").classList.toggle("show");
  }

  public toggleClassChangeBars(element: any) {
    element.classList.toggle("change");
  }

}
