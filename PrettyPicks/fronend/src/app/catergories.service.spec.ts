import { TestBed } from '@angular/core/testing';

import { CatergoriesService } from './catergories.service';

describe('CatergoriesService', () => {
  let service: CatergoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatergoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
