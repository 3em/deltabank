import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionaryMortgageComponent } from './questionary-mortgage.component';

describe('QuestionaryMortgageComponent', () => {
  let component: QuestionaryMortgageComponent;
  let fixture: ComponentFixture<QuestionaryMortgageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionaryMortgageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionaryMortgageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
