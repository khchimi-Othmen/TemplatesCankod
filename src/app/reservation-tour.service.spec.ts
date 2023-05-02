import { TestBed } from '@angular/core/testing';

import { ReservationTourService } from './reservation-tour.service';

describe('ReservationTourService', () => {
  let service: ReservationTourService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReservationTourService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
