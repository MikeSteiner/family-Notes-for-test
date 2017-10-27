import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationDatatableComponent } from './application-datatable.component';

describe('ApplicationDatatableComponent', () => {
  let component: ApplicationDatatableComponent;
  let fixture: ComponentFixture<ApplicationDatatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationDatatableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
