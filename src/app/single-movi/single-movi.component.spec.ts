import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleMoviComponent } from './single-movi.component';

describe('SingleMoviComponent', () => {
  let component: SingleMoviComponent;
  let fixture: ComponentFixture<SingleMoviComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleMoviComponent]
    });
    fixture = TestBed.createComponent(SingleMoviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
