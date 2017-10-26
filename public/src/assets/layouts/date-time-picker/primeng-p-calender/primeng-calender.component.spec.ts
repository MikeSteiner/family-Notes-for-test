import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeNgCalenderComponent } from './primeng-calender.component';

describe('PrimeNgCalenderComponent', () => {
  let component: PrimeNgCalenderComponent;
  let fixture: ComponentFixture<PrimeNgCalenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimeNgCalenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeNgCalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
