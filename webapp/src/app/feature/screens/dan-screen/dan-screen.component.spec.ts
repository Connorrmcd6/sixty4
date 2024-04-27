import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanScreenComponent } from './dan-screen.component';

describe('DanScreenComponent', () => {
  let component: DanScreenComponent;
  let fixture: ComponentFixture<DanScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DanScreenComponent]
    });
    fixture = TestBed.createComponent(DanScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
