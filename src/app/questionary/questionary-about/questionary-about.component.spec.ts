import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionaryAboutComponent } from './questionary-about.component';

describe('QuestionaryAboutComponent', () => {
  let component: QuestionaryAboutComponent;
  let fixture: ComponentFixture<QuestionaryAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionaryAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionaryAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
