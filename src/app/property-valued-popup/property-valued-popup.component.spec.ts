import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyValuedPopupComponent } from './property-valued-popup.component';

describe('PropertyValuedPopupComponent', () => {
  let component: PropertyValuedPopupComponent;
  let fixture: ComponentFixture<PropertyValuedPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyValuedPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyValuedPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
