import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RowInputMaskComponent } from './row-input-mask.component';

describe('RowInputMaskComponent', () => {
  let component: RowInputMaskComponent;
  let fixture: ComponentFixture<RowInputMaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RowInputMaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RowInputMaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
