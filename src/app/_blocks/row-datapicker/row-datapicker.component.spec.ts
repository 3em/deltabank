import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RowDatapickerComponent } from './row-datapicker.component';

describe('RowDatapickerComponent', () => {
  let component: RowDatapickerComponent;
  let fixture: ComponentFixture<RowDatapickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RowDatapickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RowDatapickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
