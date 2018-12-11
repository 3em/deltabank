import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionaryCompleteNotEnoughDataComponent } from './questionary-complete-not-enough-data.component';

describe('QuestionaryCompleteNotEnoughDataComponent', () => {
  let component: QuestionaryCompleteNotEnoughDataComponent;
  let fixture: ComponentFixture<QuestionaryCompleteNotEnoughDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionaryCompleteNotEnoughDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionaryCompleteNotEnoughDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
