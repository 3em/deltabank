import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalDataAgreePopupComponent } from './personal-data-agree-popup.component';

describe('PersonalDataAgreePopupComponent', () => {
  let component: PersonalDataAgreePopupComponent;
  let fixture: ComponentFixture<PersonalDataAgreePopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalDataAgreePopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalDataAgreePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
