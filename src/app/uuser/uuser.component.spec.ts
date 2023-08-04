import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UuserComponent } from './uuser.component';

describe('UuserComponent', () => {
  let component: UuserComponent;
  let fixture: ComponentFixture<UuserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UuserComponent]
    });
    fixture = TestBed.createComponent(UuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
