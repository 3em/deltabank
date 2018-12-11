import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantsItemComponent } from './participants-item.component';

describe('ParticipantsItemComponent', () => {
  let component: ParticipantsItemComponent;
  let fixture: ComponentFixture<ParticipantsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticipantsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipantsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
