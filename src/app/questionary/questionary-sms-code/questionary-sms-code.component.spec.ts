import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionarySmsCodeComponent } from './questionary-sms-code.component';

describe('QuestionarySmsCodeComponent', () => {
  let component: QuestionarySmsCodeComponent;
  let fixture: ComponentFixture<QuestionarySmsCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionarySmsCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionarySmsCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
