import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionarySavedCalcComponent } from './questionary-saved-calc.component';

describe('QuestionarySavedCalcComponent', () => {
  let component: QuestionarySavedCalcComponent;
  let fixture: ComponentFixture<QuestionarySavedCalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionarySavedCalcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionarySavedCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
