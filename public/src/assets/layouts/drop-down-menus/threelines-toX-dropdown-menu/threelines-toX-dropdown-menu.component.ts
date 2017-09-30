import {Component, OnInit, HostListener} from '@angular/core';


class HAMBURGER {
  public static CLASS_CONTENT: string = 'hamburger-content';
  public static CLASS_CONTENT_SHOW: string = 'show';
  public static CLASS_TOGGLE_BUTTON: string = 'hamburger-toggle-button';
  public static CLASS_TOGGLE_BUTTON_CROSS: string = 'cross';
  public static CLASS_BAR_TOP: string = 'bar-top';
  public static CLASS_BAR_MIDDLE: string = 'bar-middle';
  public static CLASS_BAR_BOTTOM: string = 'bar-bottom';
}


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

    this.onOutsideToggleButtonClick($event.target);
    // const element = $event.target;
    // const isToggleButton = element.classList.contains('hamburger-toggle-button');
    // const isBarTop = element.classList.contains('bar-top');
    // const isBarMiddle = element.classList.contains('bar-middle');
    // const isBarBottom = element.classList.contains('bar-bottom');
    //
    // // if (!$event.target.matches('.hamburger-toggle-button')) {
    // if (!isToggleButton && !isBarTop && !isBarMiddle && !isBarBottom) {
    //
    //   const contents = document.getElementsByClassName("hamburger-content");
    //   for (let i = 0; i < contents.length; i++) {
    //     const content = contents[i];
    //     if (content.classList.contains('show')) {
    //       content.classList.remove('show');
    //     }
    //   }
    //
    //   const toggleButtons = document.getElementsByClassName("hamburger-toggle-button");
    //   for (let i = 0; i < toggleButtons.length; i++) {
    //     const toggleButton = toggleButtons[i];
    //     if (toggleButton.classList.contains('cross')) {
    //       toggleButton.classList.remove('cross');
    //     }
    //   }
    // }
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


  public toggleContent(element: any) {
    const hamburgerContainer = element.parentNode;
    const dropDownContents = hamburgerContainer.getElementsByClassName(HAMBURGER.CLASS_CONTENT);
    dropDownContents[0].classList.toggle(HAMBURGER.CLASS_CONTENT_SHOW);
  }

  public onToggleButtonClick(element: any) {
    const isBarTop = element.classList.contains(HAMBURGER.CLASS_BAR_TOP);
    const isBarMiddle = element.classList.contains(HAMBURGER.CLASS_BAR_MIDDLE);
    const isBarBottom = element.classList.contains(HAMBURGER.CLASS_BAR_BOTTOM);
    if (isBarTop || isBarMiddle || isBarBottom) {
      element = element.parentNode;
    }

    element.classList.toggle(HAMBURGER.CLASS_TOGGLE_BUTTON_CROSS);

    this.toggleContent(element);
  }

  public onOutsideToggleButtonClick(element: any) {
    const isToggleButton = element.classList.contains(HAMBURGER.CLASS_TOGGLE_BUTTON);
    const isBarTop = element.classList.contains(HAMBURGER.CLASS_BAR_TOP);
    const isBarMiddle = element.classList.contains(HAMBURGER.CLASS_BAR_MIDDLE);
    const isBarBottom = element.classList.contains(HAMBURGER.CLASS_BAR_BOTTOM);

    if (!isToggleButton && !isBarTop && !isBarMiddle && !isBarBottom) {

      // const contents = document.getElementsByClassName("hamburger-content");
      // for (let i = 0; i < contents.length; i++) {
      //   const content = contents[i];
      //   if (content.classList.contains('show')) {
      //     content.classList.remove('show');
      //   }
      // }
      this.toggleContentByOutsideClick();

      // const toggleButtons = document.getElementsByClassName("hamburger-toggle-button");
      // for (let i = 0; i < toggleButtons.length; i++) {
      //   const toggleButton = toggleButtons[i];
      //   if (toggleButton.classList.contains('cross')) {
      //     toggleButton.classList.remove('cross');
      //   }
      // }
      this.removeCrossClassByOutsideClick();
    }
  }

  private toggleContentByOutsideClick() {
    // const contents = document.getElementsByClassName("hamburger-content");
    const contents = document.getElementsByClassName(HAMBURGER.CLASS_CONTENT);
    for (let i = 0; i < contents.length; i++) {
      const element = contents[i];

      const hasClass = element.classList.contains(HAMBURGER.CLASS_CONTENT_SHOW);
      if (hasClass) {
        element.classList.remove(HAMBURGER.CLASS_CONTENT_SHOW);
      }
    }
  }

  private removeCrossClassByOutsideClick() {
    const toggleButtons = document.getElementsByClassName("hamburger-toggle-button");
    for (let i = 0; i < toggleButtons.length; i++) {
      const element = toggleButtons[i];

      const hasClass = element.classList.contains(HAMBURGER.CLASS_TOGGLE_BUTTON_CROSS);
      if (hasClass) {
        element.classList.remove(HAMBURGER.CLASS_TOGGLE_BUTTON_CROSS);
      }
    }
  }

}
