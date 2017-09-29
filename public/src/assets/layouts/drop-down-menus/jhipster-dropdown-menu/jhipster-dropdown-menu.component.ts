import { Component, OnInit } from '@angular/core';

import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-jhipster-dropdown-menu',
  templateUrl: 'jhipster-dropdown-menu.component.html',
  styleUrls: ['jhipster-dropdown-menu.component.css']
})
export class JhipsterDropdownMenuComponent implements OnInit {

  modalRef: NgbModalRef;

  constructor() { }

  ngOnInit() {
  }

  public openPopupOne() {
    alert('popup one');
  }

  public openPopupTwo() {
    alert('popup two');
  }

  public openPopupThree() {
    alert('popup three');
  }

  public getImageUrl(): string {
    return 'false';
  }
}
