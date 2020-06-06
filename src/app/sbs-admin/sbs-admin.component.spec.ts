import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SbsAdminComponent } from './sbs-admin.component';

describe('SbsAdminComponent', () => {
  let component: SbsAdminComponent;
  let fixture: ComponentFixture<SbsAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SbsAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SbsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
