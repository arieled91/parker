import { TestBed } from '@angular/core/testing';

import { CarStore } from './car.store';

describe('CarStore', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CarStore = TestBed.get(CarStore);
    expect(service).toBeTruthy();
  });
});
