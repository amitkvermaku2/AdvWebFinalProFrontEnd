import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsignComponent } from './usign.component';

describe('UsignComponent', () => {
  let component: UsignComponent;
  let fixture: ComponentFixture<UsignComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsignComponent]
    });
    fixture = TestBed.createComponent(UsignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
