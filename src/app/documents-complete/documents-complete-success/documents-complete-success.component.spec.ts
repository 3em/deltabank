import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentsCompleteSuccessComponent } from './documents-complete-success.component';

describe('DocumentsCompleteSuccessComponent', () => {
  let component: DocumentsCompleteSuccessComponent;
  let fixture: ComponentFixture<DocumentsCompleteSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentsCompleteSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentsCompleteSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
