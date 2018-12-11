import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionaryCompleteComponent } from './questionary-complete.component';

describe('QuestionaryCompleteComponent', () => {
  let component: QuestionaryCompleteComponent;
  let fixture: ComponentFixture<QuestionaryCompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionaryCompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionaryCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
