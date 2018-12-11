import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionaryCompleteCheckboxComponent } from './questionary-complete-checkbox.component';

describe('QuestionaryCompleteCheckboxComponent', () => {
  let component: QuestionaryCompleteCheckboxComponent;
  let fixture: ComponentFixture<QuestionaryCompleteCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionaryCompleteCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionaryCompleteCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
