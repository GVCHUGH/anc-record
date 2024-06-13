import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllHbncComponent } from './all-hbnc.component';

describe('AllHbncComponent', () => {
  let component: AllHbncComponent;
  let fixture: ComponentFixture<AllHbncComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllHbncComponent]
    });
    fixture = TestBed.createComponent(AllHbncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
