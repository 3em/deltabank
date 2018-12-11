import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceDefaultComponent } from './insurance-default.component';

describe('InsuranceDefaultComponent', () => {
  let component: InsuranceDefaultComponent;
  let fixture: ComponentFixture<InsuranceDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsuranceDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuranceDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
