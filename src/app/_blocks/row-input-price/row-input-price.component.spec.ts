import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RowInputPriceComponent } from './row-input-price.component';

describe('RowInputPriceComponent', () => {
  let component: RowInputPriceComponent;
  let fixture: ComponentFixture<RowInputPriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RowInputPriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RowInputPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
