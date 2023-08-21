import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  public clientPort=environment.clientPort;
  public santePort=environment.santePort;
  public statusUrlClientApi=environment.statusUrlClientApi;
  public statusUrlSanteBff=environment.statusUrlSanteBff;
  public clientUrl=environment.clientUrl;

  constructor(private common: CommonService) { }
  
  getClientsStatus(){
    return this.common.getRessourceAsString(this.clientPort, this.statusUrlClientApi);
  }
  getClientsSanteStatus(){
    return this.common.getSecRessourceAsString(this.santePort, this.statusUrlSanteBff);
  }

  //=============================================================================
  getClients(){
    return this.common.getRessource(this.clientPort, this.clientUrl);
  }

  public addClient(client:Object){
    return this.common.addRessource(this.clientPort, this.clientUrl, client);
  }

}
