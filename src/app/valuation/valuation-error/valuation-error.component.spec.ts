import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuationErrorComponent } from './valuation-error.component';

describe('ValuationErrorComponent', () => {
  let component: ValuationErrorComponent;
  let fixture: ComponentFixture<ValuationErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValuationErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValuationErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
