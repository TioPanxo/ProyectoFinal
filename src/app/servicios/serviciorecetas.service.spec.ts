import { TestBed } from '@angular/core/testing';

import { ServiciorecetasService } from './serviciorecetas.service';

describe('ServiciorecetasService', () => {
  let service: ServiciorecetasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciorecetasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
