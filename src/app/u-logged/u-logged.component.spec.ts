import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ULoggedComponent } from './u-logged.component';

describe('ULoggedComponent', () => {
  let component: ULoggedComponent;
  let fixture: ComponentFixture<ULoggedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ULoggedComponent]
    });
    fixture = TestBed.createComponent(ULoggedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
