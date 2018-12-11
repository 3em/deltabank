import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DealCompleteComponent } from './deal-complete.component';

describe('DealCompleteComponent', () => {
  let component: DealCompleteComponent;
  let fixture: ComponentFixture<DealCompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealCompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
