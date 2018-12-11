import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceSuccessComponent } from './insurance-success.component';

describe('InsuranceSuccessComponent', () => {
  let component: InsuranceSuccessComponent;
  let fixture: ComponentFixture<InsuranceSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsuranceSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuranceSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
