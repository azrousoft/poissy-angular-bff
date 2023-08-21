import { TestBed } from '@angular/core/testing';

import { AzKeycloakSecurityService } from './az-keycloak-security.service';

describe('AzKeycloakSecurityService', () => {
  let service: AzKeycloakSecurityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AzKeycloakSecurityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
