import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RowInputAutocompleteComponent } from './row-input-autocomplete.component';

describe('RowInputAutocompleteComponent', () => {
  let component: RowInputAutocompleteComponent;
  let fixture: ComponentFixture<RowInputAutocompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RowInputAutocompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RowInputAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
