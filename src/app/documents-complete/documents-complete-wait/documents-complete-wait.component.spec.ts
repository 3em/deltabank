import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentsCompleteWaitComponent } from './documents-complete-wait.component';

describe('DocumentsCompleteWaitComponent', () => {
  let component: DocumentsCompleteWaitComponent;
  let fixture: ComponentFixture<DocumentsCompleteWaitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentsCompleteWaitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentsCompleteWaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
