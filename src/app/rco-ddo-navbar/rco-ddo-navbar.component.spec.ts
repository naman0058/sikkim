import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RcoDdoNavbarComponent } from './rco-ddo-navbar.component';

describe('RcoDdoNavbarComponent', () => {
  let component: RcoDdoNavbarComponent;
  let fixture: ComponentFixture<RcoDdoNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RcoDdoNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RcoDdoNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
