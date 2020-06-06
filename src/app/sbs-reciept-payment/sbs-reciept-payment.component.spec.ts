import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SbsRecieptPaymentComponent } from './sbs-reciept-payment.component';

describe('SbsRecieptPaymentComponent', () => {
  let component: SbsRecieptPaymentComponent;
  let fixture: ComponentFixture<SbsRecieptPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SbsRecieptPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SbsRecieptPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
