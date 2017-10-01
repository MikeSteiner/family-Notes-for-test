import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinesToXDropDownMenuComponent } from './lines-to-x-updated-dropdown-menu.component';

describe('LinesToXDropDownMenuComponent', () => {
  let component: LinesToXDropDownMenuComponent;
  let fixture: ComponentFixture<LinesToXDropDownMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinesToXDropDownMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinesToXDropDownMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
