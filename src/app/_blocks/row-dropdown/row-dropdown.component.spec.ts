import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RowDropdownComponent } from './row-dropdown.component';

describe('RowDropdownComponent', () => {
  let component: RowDropdownComponent;
  let fixture: ComponentFixture<RowDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RowDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RowDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
