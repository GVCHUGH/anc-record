import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAncComponent } from './all-anc.component';

describe('AllAncComponent', () => {
  let component: AllAncComponent;
  let fixture: ComponentFixture<AllAncComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllAncComponent]
    });
    fixture = TestBed.createComponent(AllAncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
