import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorderComponent } from './corder.component';

describe('CorderComponent', () => {
  let component: CorderComponent;
  let fixture: ComponentFixture<CorderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CorderComponent]
    });
    fixture = TestBed.createComponent(CorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
