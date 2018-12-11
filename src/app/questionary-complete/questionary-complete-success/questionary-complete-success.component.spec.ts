import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionaryCompleteSuccessComponent } from './questionary-complete-success.component';

describe('QuestionaryCompleteSuccessComponent', () => {
  let component: QuestionaryCompleteSuccessComponent;
  let fixture: ComponentFixture<QuestionaryCompleteSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionaryCompleteSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionaryCompleteSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
