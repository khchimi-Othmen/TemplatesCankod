import { TestBed } from '@angular/core/testing';

import { DeliveryNawresService } from './delivery-nawres.service';

describe('DeliveryNawresService', () => {
  let service: DeliveryNawresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeliveryNawresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
