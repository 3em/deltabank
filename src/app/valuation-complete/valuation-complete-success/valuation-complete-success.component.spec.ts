import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuationCompleteSuccessComponent } from './valuation-complete-success.component';

describe('ValuationCompleteSuccessComponent', () => {
  let component: ValuationCompleteSuccessComponent;
  let fixture: ComponentFixture<ValuationCompleteSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValuationCompleteSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValuationCompleteSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
