import { TestBed } from '@angular/core/testing';

import { CarStoreService } from './car-store.service';

describe('CarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CarStoreService = TestBed.get(CarStoreService);
    expect(service).toBeTruthy();
  });
});
