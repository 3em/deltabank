import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionaryCalculationResultComponent } from './questionary-calculation-result.component';

describe('QuestionaryCalculationResultComponent', () => {
  let component: QuestionaryCalculationResultComponent;
  let fixture: ComponentFixture<QuestionaryCalculationResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionaryCalculationResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionaryCalculationResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
