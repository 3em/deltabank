import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionaryIncomeComponent } from './questionary-income.component';

describe('QuestionaryIncomeComponent', () => {
  let component: QuestionaryIncomeComponent;
  let fixture: ComponentFixture<QuestionaryIncomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionaryIncomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionaryIncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
