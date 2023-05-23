import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EDeleteComponent } from './e-delete.component';

describe('EDeleteComponent', () => {
  let component: EDeleteComponent;
  let fixture: ComponentFixture<EDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EDeleteComponent]
    });
    fixture = TestBed.createComponent(EDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
