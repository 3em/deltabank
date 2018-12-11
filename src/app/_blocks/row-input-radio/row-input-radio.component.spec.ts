import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RowInputRadioComponent } from './row-input-radio.component';

describe('RowInputRadioComponent', () => {
  let component: RowInputRadioComponent;
  let fixture: ComponentFixture<RowInputRadioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RowInputRadioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RowInputRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
