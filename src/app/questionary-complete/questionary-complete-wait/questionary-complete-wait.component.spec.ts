import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionaryCompleteWaitComponent } from './questionary-complete-wait.component';

describe('QuestionaryCompleteWaitComponent', () => {
  let component: QuestionaryCompleteWaitComponent;
  let fixture: ComponentFixture<QuestionaryCompleteWaitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionaryCompleteWaitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionaryCompleteWaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
