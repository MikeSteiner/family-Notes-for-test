import {Component, OnInit, HostListener} from '@angular/core';

@Component({
  selector: 'app-threelines2x-dropdown-menu',
  templateUrl: 'threelines-toX-dropdown-menu.component.html',
  styleUrls: ['threelines-toX-dropdown-menu.component.css']
})
export class ThreeLinesToXDropdownMenuComponent implements OnInit {

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

    if (!$event.target.matches('.hamburger-toggle-button')) {
      // Todo later
      $event.target.classList.toggle("change");

      const dropdowns = document.getElementsByClassName("hamburger-content");
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


  public toggleClassShowContent(element: any) {
    //element.classList.toggle("show");
    const hamburgerContainer = element.parentNode;
    const dropdownContent = hamburgerContainer.getElementsByClassName("hamburger-content");
    dropdownContent[0].classList.toggle("show");
  }

  public toggleClassChangeBars(element: any) {

    const isBar1 = element.classList.contains('bar1');
    const isBar2 = element.classList.contains('bar2');
    const isBar3 = element.classList.contains('bar3');
    if (isBar1 || isBar2 || isBar3) {
      element = element.parentNode;
    }

    element.classList.toggle("change");

    this.toggleClassShowContent(element);
  }

}
