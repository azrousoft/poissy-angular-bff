import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ContratBean } from '../daos/contrat-bean.daos';
import { Contrat } from '../entities/contrat.entities';
import { CommonService } from './common.service';
import { ContratGestionService } from './contrat-gestion.service';

@Injectable({
  providedIn: 'root'
})
export class ContratService {
  public contratPort=9083;
  public santePort=9181;
  public statusUrlContratApi="/api/v1/consultation/contrats/status";
  public statusUrlSanteBff="/api/v1/sante/public/contrats";
  public contratUrl="/api/v1/contrats/";
  public pageSize =environment.elementsPerPage;

  constructor(private http:HttpClient, private common:CommonService, private ctrGestionSrv: ContratGestionService) { }

  getContratsStatus(){
    return this.common.getRessourceAsString(this.contratPort, this.statusUrlContratApi);
  }
  getContratsSanteStatus(){
    return this.common.getSecRessourceAsString(this.santePort, this.statusUrlSanteBff);
  }

  //=============================================================================
  getContrats(){
    return this.common.getRessource(this.contratPort, this.contratUrl);
  }

  public addContrat(contrat:Object){
    return this.common.addRessource(this.contratPort, this.contratUrl, contrat);
  }
  //================================================================

  getAllContrats():Observable<Contrat[]>{
    let host=environment.host+":"+environment.contratPort;
    let url=host+environment.contratConsultationUrl;
    return this.http.get<Contrat[]>(url);
  }

  initContrat():Observable<Contrat[]>{
    let host=environment.host+":"+environment.contratPort;
    let url=host+environment.contratPagingConsultationUrl+"?page=0&size="+this.pageSize;
    return this.http.get<Contrat[]>(url);
  }
  pageContrat(p: number):Observable<Contrat[]>{
    let host=environment.host+":"+environment.contratPort;
    let url=host+environment.contratPagingConsultationUrl+"?page="+p+"&size="+this.pageSize;
    return this.http.get<Contrat[]>(url);
  }
  searchContrats(keyword:string):Observable<ContratBean>{
    const headers = { 'content-type': 'application/json'} ; 
    let host=environment.host+":"+environment.contratPort;
    let url=host+environment.contratSearchConsultationUrl;
  
    const body={
      criteria : {
        type : keyword
      }
    };
    
    return this.http.post<ContratBean>(url, JSON.stringify(body),{'headers':headers}); 
  }
  
  getSelectedContrats():Observable<Contrat[]>{
    let host=environment.host+":"+environment.contratPort;
    let url=host+environment.contratUrl;
    return this.http.get<Contrat[]>(url+"?envigeur=true");
  }
  getAvailableContrats():Observable<Contrat[]>{
    return from([]);
  }

  

  select(contrat:Contrat):Observable<Contrat>{
    let host=environment.host+":"+environment.contratPort;
    let url=host+environment.contratUrl;
    contrat.emit=!contrat.emit;
    return this.http.put<Contrat>(url+"/"+contrat.id,contrat);
  }

 
  

  /**
   * 
   * /api/v1/consultation/contrats/client/{clientIid}
   */

  /**
   * 
   * @param id /api/v1/consultation/contrats/{id}
   * @returns 
   */
  getContrat(id:number):Observable<Contrat>{
    let host=environment.host+":"+environment.contratPort;
    let url=host+"/api/v1/consultation/contrats/";
    return this.http.get<Contrat>(url+id);
  }

  deleteContrat(id:number){    
    let host=environment.host+":"+environment.contratPort;
    let url=host+"/api/v1/consultation/contrats/";
    return this.http.delete<Contrat>(url+id);
  }

  saveContrat(contrat:Contrat){
    let host=environment.host+":"+environment.contratPort;
    let url=host+"/api/v1/consultation/contrats/";
    return this.http.post<Contrat>(url, contrat);
  }
  updateContrat(contrat:Contrat){
    let host=environment.host+":"+environment.contratPort;
    let url=host+"/api/v1/consultation/contrats/";
    return this.http.put<Contrat>(url,contrat);    
  }

}
