import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EEditComponent } from './e-edit.component';

describe('EEditComponent', () => {
  let component: EEditComponent;
  let fixture: ComponentFixture<EEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EEditComponent]
    });
    fixture = TestBed.createComponent(EEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
