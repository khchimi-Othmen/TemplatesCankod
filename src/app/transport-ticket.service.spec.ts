import { TestBed } from '@angular/core/testing';

import { TransportTicketService } from './transport-ticket.service';

describe('TransportTicketService', () => {
  let service: TransportTicketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransportTicketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
