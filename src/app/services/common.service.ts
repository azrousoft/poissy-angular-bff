import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public host=environment.host; //"http://localhost";
  public hostSec=environment.hostSec;

  constructor(private http:HttpClient) { }

  public getRessourceAsString(port: any, url: any){
    return this.http.get(this.host+":"+port+url, { responseType: 'text' });
  }

  public getSecRessourceAsString(port: any, url: any){
    //alert("getting ressource as string : "+this.hostSec+":"+port+url);
    return this.http.get(this.hostSec+":"+port+url, { responseType: 'text' });
  }


  
  //=======================================================================
  public getRessource(port: any, url: any){
    return this.http.get(this.host+":"+port+url);
  }

  public addRessource(port: any, url: any, resource:Object){
    const headers = { 'content-type': 'application/json'} ; 
    const body=JSON.stringify(resource);
    
    return this.http.post(this.host+":"+port+url, body,{'headers':headers});    
  }
 
}
