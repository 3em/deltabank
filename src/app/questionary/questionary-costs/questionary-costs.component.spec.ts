import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionaryCostsComponent } from './questionary-costs.component';

describe('QuestionaryCostsComponent', () => {
  let component: QuestionaryCostsComponent;
  let fixture: ComponentFixture<QuestionaryCostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionaryCostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionaryCostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
