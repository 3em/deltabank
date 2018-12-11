import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassSmsChangeComponent } from './pass-sms-change.component';

describe('PassSmsChangeComponent', () => {
  let component: PassSmsChangeComponent;
  let fixture: ComponentFixture<PassSmsChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassSmsChangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassSmsChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
