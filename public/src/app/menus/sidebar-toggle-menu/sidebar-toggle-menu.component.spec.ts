import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarToggleMenuComponent } from './sidebar-toggle-menu.component';

describe('SidebarToggleMenuComponent', () => {
  let component: SidebarToggleMenuComponent;
  let fixture: ComponentFixture<SidebarToggleMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarToggleMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarToggleMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
