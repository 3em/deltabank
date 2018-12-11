import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuationCompleteComponent } from './valuation-complete.component';

describe('ValuationCompleteComponent', () => {
  let component: ValuationCompleteComponent;
  let fixture: ComponentFixture<ValuationCompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValuationCompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValuationCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
