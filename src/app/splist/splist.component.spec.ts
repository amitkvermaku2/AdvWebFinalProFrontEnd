import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplistComponent } from './splist.component';

describe('SplistComponent', () => {
  let component: SplistComponent;
  let fixture: ComponentFixture<SplistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SplistComponent]
    });
    fixture = TestBed.createComponent(SplistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
