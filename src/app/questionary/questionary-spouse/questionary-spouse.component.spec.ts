import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionarySpouseComponent } from './questionary-spouse.component';

describe('QuestionarySpouseComponent', () => {
  let component: QuestionarySpouseComponent;
  let fixture: ComponentFixture<QuestionarySpouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionarySpouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionarySpouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
