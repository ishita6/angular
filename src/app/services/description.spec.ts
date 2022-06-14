import { TestBed } from '@angular/core/testing';

import { description } from './description';

describe('jobDetails', () => {
  let service: description;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(description);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
