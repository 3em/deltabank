import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionaryQuestionsComponent } from './questionary-questions.component';

describe('QuestionaryQuestionsComponent', () => {
  let component: QuestionaryQuestionsComponent;
  let fixture: ComponentFixture<QuestionaryQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionaryQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionaryQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
