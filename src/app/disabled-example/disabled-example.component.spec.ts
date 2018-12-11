import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisabledExampleComponent } from './disabled-example.component';

describe('DisabledExampleComponent', () => {
  let component: DisabledExampleComponent;
  let fixture: ComponentFixture<DisabledExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisabledExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisabledExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
