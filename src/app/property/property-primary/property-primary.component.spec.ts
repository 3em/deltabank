import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyPrimaryComponent } from './property-primary.component';

describe('PropertyPrimaryComponent', () => {
  let component: PropertyPrimaryComponent;
  let fixture: ComponentFixture<PropertyPrimaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyPrimaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyPrimaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
