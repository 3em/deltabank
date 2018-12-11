import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderBurgerPopupComponent } from './header-burger-popup.component';

describe('HeaderBurgerPopupComponent', () => {
  let component: HeaderBurgerPopupComponent;
  let fixture: ComponentFixture<HeaderBurgerPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderBurgerPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderBurgerPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
