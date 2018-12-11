import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RowInputPhoneAlertComponent } from './row-input-phone-alert.component';

describe('RowInputPhoneAlertComponent', () => {
  let component: RowInputPhoneAlertComponent;
  let fixture: ComponentFixture<RowInputPhoneAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RowInputPhoneAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RowInputPhoneAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
