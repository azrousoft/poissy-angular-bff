import { Injectable } from '@angular/core';
import { KeycloakInstance } from 'keycloak-js';

declare var Keycloak: any;


@Injectable({
  providedIn: 'root'
})
export class AzKeycloakSecurityService {
  public kc?: KeycloakInstance;

  constructor() { }

  async init(){
    console.log("az-security: keycloak initialization.");

    this.kc= new Keycloak(
      {
        url: "https://localhost:8443",
        realm: "poissy-realm",
        clientId: "sante-bff"
  
      }
    );

    await this.kc?.init({
      onLoad: 'login-required'
    });

  }
}
