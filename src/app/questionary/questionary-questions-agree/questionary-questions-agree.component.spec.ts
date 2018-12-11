import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionaryQuestionsAgreeComponent } from './questionary-questions-agree.component';

describe('QuestionaryQuestionsAgreeComponent', () => {
  let component: QuestionaryQuestionsAgreeComponent;
  let fixture: ComponentFixture<QuestionaryQuestionsAgreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionaryQuestionsAgreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionaryQuestionsAgreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
