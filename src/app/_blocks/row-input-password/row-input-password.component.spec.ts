import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RowInputPasswordComponent } from './row-input-password.component';

describe('RowInputPasswordComponent', () => {
  let component: RowInputPasswordComponent;
  let fixture: ComponentFixture<RowInputPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RowInputPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RowInputPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
