import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionaryWorkComponent } from './questionary-work.component';

describe('QuestionaryWorkComponent', () => {
  let component: QuestionaryWorkComponent;
  let fixture: ComponentFixture<QuestionaryWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionaryWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionaryWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
