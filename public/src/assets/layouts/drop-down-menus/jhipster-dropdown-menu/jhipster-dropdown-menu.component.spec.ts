import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JhipsterDropdownMenuComponent } from './jhipster-dropdown-menu.component';

describe('JhipsterDropdownMenuComponent', () => {
  let component: JhipsterDropdownMenuComponent;
  let fixture: ComponentFixture<JhipsterDropdownMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JhipsterDropdownMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JhipsterDropdownMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
