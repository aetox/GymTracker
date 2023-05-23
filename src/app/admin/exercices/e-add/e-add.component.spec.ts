import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EAddComponent } from './e-add.component';

describe('EAddComponent', () => {
  let component: EAddComponent;
  let fixture: ComponentFixture<EAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EAddComponent]
    });
    fixture = TestBed.createComponent(EAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
