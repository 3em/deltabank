import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertySecondarySuccessComponent } from './property-secondary-success.component';

describe('PropertySecondarySuccessComponent', () => {
  let component: PropertySecondarySuccessComponent;
  let fixture: ComponentFixture<PropertySecondarySuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertySecondarySuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertySecondarySuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
