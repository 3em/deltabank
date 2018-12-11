import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertySecondaryComponent } from './property-secondary.component';

describe('PropertySecondaryComponent', () => {
  let component: PropertySecondaryComponent;
  let fixture: ComponentFixture<PropertySecondaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertySecondaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertySecondaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
