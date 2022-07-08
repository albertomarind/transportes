import { TestBed } from '@angular/core/testing';

import { AlertasFlotantesService } from './alertas-flotantes.service';

describe('AlertasFlotantesService', () => {
  let service: AlertasFlotantesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlertasFlotantesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
