import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BugAdviceComponent } from './bug-advice.component';

describe('BugAdviceComponent', () => {
  let component: BugAdviceComponent;
  let fixture: ComponentFixture<BugAdviceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BugAdviceComponent]
    });
    fixture = TestBed.createComponent(BugAdviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
