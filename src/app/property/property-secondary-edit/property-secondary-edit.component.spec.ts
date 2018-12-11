import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertySecondaryEditComponent } from './property-secondary-edit.component';

describe('PropertySecondaryEditComponent', () => {
  let component: PropertySecondaryEditComponent;
  let fixture: ComponentFixture<PropertySecondaryEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertySecondaryEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertySecondaryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
