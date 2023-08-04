import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpupdateComponent } from './spupdate.component';

describe('SpupdateComponent', () => {
  let component: SpupdateComponent;
  let fixture: ComponentFixture<SpupdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpupdateComponent]
    });
    fixture = TestBed.createComponent(SpupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
