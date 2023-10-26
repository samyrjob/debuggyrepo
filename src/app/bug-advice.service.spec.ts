import { TestBed } from '@angular/core/testing';

import { BugAdviceService } from './bug-advice.service';

describe('BugAdviceService', () => {
  let service: BugAdviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BugAdviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
