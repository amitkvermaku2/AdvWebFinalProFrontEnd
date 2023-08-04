import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EproductComponent } from './eproduct.component';

describe('EproductComponent', () => {
  let component: EproductComponent;
  let fixture: ComponentFixture<EproductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EproductComponent]
    });
    fixture = TestBed.createComponent(EproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
