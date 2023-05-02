import { TestBed } from '@angular/core/testing';

import { PriorityWordsService } from './priority-words.service';

describe('PriorityWordsService', () => {
  let service: PriorityWordsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PriorityWordsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
