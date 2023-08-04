import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UproductsComponent } from './uproducts.component';

describe('UproductsComponent', () => {
  let component: UproductsComponent;
  let fixture: ComponentFixture<UproductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UproductsComponent]
    });
    fixture = TestBed.createComponent(UproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
