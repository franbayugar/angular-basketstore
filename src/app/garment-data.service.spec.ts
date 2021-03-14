import { TestBed } from '@angular/core/testing';

import { GarmentDataService } from './garment-data.service';

describe('GarmentDataService', () => {
  let service: GarmentDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GarmentDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
