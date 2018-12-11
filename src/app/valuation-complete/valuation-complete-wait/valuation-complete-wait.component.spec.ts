import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuationCompleteWaitComponent } from './valuation-complete-wait.component';

describe('ValuationCompleteWaitComponent', () => {
  let component: ValuationCompleteWaitComponent;
  let fixture: ComponentFixture<ValuationCompleteWaitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValuationCompleteWaitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValuationCompleteWaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
