import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeSelectionComponent } from './time-selection.component';

describe('TimeSelectionComponent', () => {
  let component: TimeSelectionComponent;
  let fixture: ComponentFixture<TimeSelectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TimeSelectionComponent]
    });
    fixture = TestBed.createComponent(TimeSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
