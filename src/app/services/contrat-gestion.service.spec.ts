import { TestBed } from '@angular/core/testing';

import { ContratGestionService } from './contrat-gestion-service.service';

describe('ContratGestionService', () => {
  let service: ContratGestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContratGestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
