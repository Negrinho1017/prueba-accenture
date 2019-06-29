import { TestBed } from '@angular/core/testing';

import { ObtenerClientesService } from './obtener-clientes.service';

describe('ObtenerClientesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ObtenerClientesService = TestBed.get(ObtenerClientesService);
    expect(service).toBeTruthy();
  });
});
