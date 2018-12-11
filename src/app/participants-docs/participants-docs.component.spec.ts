import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantsDocsComponent } from './participants-docs.component';

describe('ParticipantsDocsComponent', () => {
  let component: ParticipantsDocsComponent;
  let fixture: ComponentFixture<ParticipantsDocsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticipantsDocsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipantsDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
