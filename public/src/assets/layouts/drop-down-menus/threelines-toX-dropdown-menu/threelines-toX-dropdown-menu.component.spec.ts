import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeLinesToXDropdownMenuComponent } from './threelines-toX-dropdown-menu.component';

describe('ThreeLinesToXDropdownMenuComponent', () => {
  let component: ThreeLinesToXDropdownMenuComponent;
  let fixture: ComponentFixture<ThreeLinesToXDropdownMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreeLinesToXDropdownMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeLinesToXDropdownMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
