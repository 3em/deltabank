import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionaryCalculationComponent } from './questionary-calculation.component';

describe('QuestionaryCalculationComponent', () => {
  let component: QuestionaryCalculationComponent;
  let fixture: ComponentFixture<QuestionaryCalculationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionaryCalculationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionaryCalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
