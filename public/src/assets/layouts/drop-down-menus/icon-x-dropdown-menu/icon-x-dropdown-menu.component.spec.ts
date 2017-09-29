import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconXDropdownMenuComponent } from './icon-x-dropdown-menu.component';

describe('IconXDropdownMenuComponent', () => {
  let component: IconXDropdownMenuComponent;
  let fixture: ComponentFixture<IconXDropdownMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconXDropdownMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconXDropdownMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
