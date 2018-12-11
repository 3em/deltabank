import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RowInputPhoneComponent } from './row-input-phone.component';

describe('RowInputPhoneComponent', () => {
  let component: RowInputPhoneComponent;
  let fixture: ComponentFixture<RowInputPhoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RowInputPhoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RowInputPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
