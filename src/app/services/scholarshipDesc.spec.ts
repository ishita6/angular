import { TestBed } from '@angular/core/testing';

import { scholarshipDesc } from './scholarshipDesc';

describe('scholarshipDetails', () => {
  let service: scholarshipDesc;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(scholarshipDesc);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
