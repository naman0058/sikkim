import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SbsRecieptDetailsComponent } from './sbs-reciept-details.component';

describe('SbsRecieptDetailsComponent', () => {
  let component: SbsRecieptDetailsComponent;
  let fixture: ComponentFixture<SbsRecieptDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SbsRecieptDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SbsRecieptDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
