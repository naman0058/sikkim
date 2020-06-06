import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SbsPaymentRecieptComponent } from './sbs-payment-reciept.component';

describe('SbsPaymentRecieptComponent', () => {
  let component: SbsPaymentRecieptComponent;
  let fixture: ComponentFixture<SbsPaymentRecieptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SbsPaymentRecieptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SbsPaymentRecieptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
