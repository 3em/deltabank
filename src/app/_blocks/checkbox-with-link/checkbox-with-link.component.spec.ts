import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxWithLinkComponent } from './checkbox-with-link.component';

describe('CheckboxWithLinkComponent', () => {
  let component: CheckboxWithLinkComponent;
  let fixture: ComponentFixture<CheckboxWithLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxWithLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxWithLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
