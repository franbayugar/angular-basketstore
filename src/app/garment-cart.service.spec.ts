import { TestBed } from '@angular/core/testing';

import { GarmentCartService } from './garment-cart.service';

describe('GarmentCartService', () => {
  let service: GarmentCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GarmentCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
