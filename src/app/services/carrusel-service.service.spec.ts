import { TestBed } from '@angular/core/testing';

import { CarruselServiceService } from './carrusel-service.service';

describe('CarruselServiceService', () => {
  let service: CarruselServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarruselServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
