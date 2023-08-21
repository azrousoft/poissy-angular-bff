import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  public statusClientApi: any;
  public statusSanteBff: any;
  public clients: any;
  constructor(private clientSrv:ClientService) { }

  ngOnInit(): void {
    this.getStatus();
    this.getStatusFromBff();
    this.getClients();
  }

  getStatus(){
    this.clientSrv.getClientsStatus()
    .subscribe(
      data=> {
        this.statusClientApi=data;
        console.log("returned data: "+this.statusClientApi);
      },
      err=>{console.log(err);}
    );
  }

  getStatusFromBff(){
    this.clientSrv.getClientsSanteStatus()
    .subscribe(
      data=> {
        this.statusSanteBff=data;
        console.log("returned data: "+this.statusSanteBff);
      },
      err=>{console.log(err);}
    );
  }

  getClients(){
    this.clientSrv.getClients().subscribe(
      data=> {this.clients=data;},
      err=>{console.log(err);}
    );
  }

  addClient(){
    const client = { 'nom': 'hamid'} ; 

    this.clientSrv.addClient(client)
    .subscribe(
      data=> {
           console.log("POST completed sucessfully. The response received "+data);
       },
       error => {
           console.log("Post failed with the errors");
       });
  }
}
