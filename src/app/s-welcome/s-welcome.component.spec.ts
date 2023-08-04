import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SWelcomeComponent } from './s-welcome.component';

describe('SWelcomeComponent', () => {
  let component: SWelcomeComponent;
  let fixture: ComponentFixture<SWelcomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SWelcomeComponent]
    });
    fixture = TestBed.createComponent(SWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
