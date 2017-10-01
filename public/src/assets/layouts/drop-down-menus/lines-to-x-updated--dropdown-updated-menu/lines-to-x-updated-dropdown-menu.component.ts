import {Component, OnInit, Input, HostListener} from '@angular/core';


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
  selector: 'app-lines-to-x-updated-dropdown-menu',
  templateUrl: 'lines-to-x-updated--dropdown-menu.component.html',
  styleUrls: ['lines-to-x-updated-dropdown-menu.component.css']
})
export class LinesToXDropDownMenuComponent implements OnInit {
  @Input() public functionList: Array<any>;
  @Input() public functionParameterList: Array<Array<string>>;
  @Input() public linkNameList: Array<string>;

  @HostListener('window:click', ['$event']) dropDownClickListener($event) {
    console.log($event);
    this.onOutsideToggleButtonClick($event.target);
  }

  constructor() { }

  ngOnInit() {
    console.log(this.functionList);
    //this.functionList[0]();
  }

  // public openPopupOne() {
  //   alert('Home');
  // }
  //
  // public openPopupTwo() {
  //   alert('About');
  // }
  //
  // public openPopupThree() {
  //   alert('Contracts');
  // }

  // public myFunction(evt: any) {
  //   document.getElementById("myDropdownMain").classList.toggle("show");
  // }

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

  private toggleContent(element: any) {
    const hamburgerContainer = element.parentNode;
    const dropDownContents = hamburgerContainer.getElementsByClassName(HAMBURGER.CLASS_CONTENT);
    dropDownContents[0].classList.toggle(HAMBURGER.CLASS_CONTENT_SHOW);
  }

  private onOutsideToggleButtonClick(element: any) {
    const isToggleButton = element.classList.contains(HAMBURGER.CLASS_TOGGLE_BUTTON);
    const isBarTop = element.classList.contains(HAMBURGER.CLASS_BAR_TOP);
    const isBarMiddle = element.classList.contains(HAMBURGER.CLASS_BAR_MIDDLE);
    const isBarBottom = element.classList.contains(HAMBURGER.CLASS_BAR_BOTTOM);

    if (!isToggleButton && !isBarTop && !isBarMiddle && !isBarBottom) {
      this.toggleContentByOutsideClick();
      this.removeCrossClassByOutsideClick();
    }
  }

  private toggleContentByOutsideClick() {
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
