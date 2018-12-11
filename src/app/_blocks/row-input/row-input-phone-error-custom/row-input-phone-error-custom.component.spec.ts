import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RowInputPhoneErrorCustomComponent } from './row-input-phone-error-custom.component';

describe('RowInputPhoneErrorCustomComponent', () => {
  let component: RowInputPhoneErrorCustomComponent;
  let fixture: ComponentFixture<RowInputPhoneErrorCustomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RowInputPhoneErrorCustomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RowInputPhoneErrorCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
