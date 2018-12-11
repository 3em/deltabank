import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentsCompleteComponent } from './documents-complete.component';

describe('DocumentsCompleteComponent', () => {
  let component: DocumentsCompleteComponent;
  let fixture: ComponentFixture<DocumentsCompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentsCompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentsCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
