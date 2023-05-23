import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UDeleteComponent } from './u-delete.component';

describe('UDeleteComponent', () => {
  let component: UDeleteComponent;
  let fixture: ComponentFixture<UDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UDeleteComponent]
    });
    fixture = TestBed.createComponent(UDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
