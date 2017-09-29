import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { W3schoolDropdownMenuComponent } from './w3school-dropdown-menu.component';

describe('W3schoolDropdownMenuComponent', () => {
  let component: W3schoolDropdownMenuComponent;
  let fixture: ComponentFixture<W3schoolDropdownMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ W3schoolDropdownMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(W3schoolDropdownMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
