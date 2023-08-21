import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Contrat } from '../entities/contrat.entities';

@Injectable({
  providedIn: 'root'
})
export class ContratGestionService {
  public contratPort=9083;
  public santePort=9181;
  public statusUrlContratApi="/api/v1/consultation/contrats/status";
  public statusUrlSanteBff="/api/v1/sante/public/contrats";
  public contratUrl="/api/v1/contrats/";

  constructor(private http:HttpClient) { }

  select(contrat:Contrat):Observable<Contrat>{
    let host=environment.host+":"+environment.contratPort;
    let url=host+environment.contratUrl;
    contrat.emit=!contrat.emit;
    return this.http.put<Contrat>(url+"/"+contrat.id,contrat);
  }

  /**
   * 
   * @param contrat /api/v1/gestion/contrats/
   * @returns 
   */
  deleteContrat(contrat:Contrat):Observable<void>{
    let host=environment.host+":"+environment.contratPort;
    let url=host+"/api/v1/gestion/contrats/";
    return this.http.delete<void>(url+contrat.id);
  }

  /**
   * /api/v1/gestion/contrats/
   * @param contrat 
   * @returns 
   */
  save(contrat:Contrat):Observable<Contrat>{
    let host=environment.host+":"+environment.contratPort;
    let url=host+"/api/v1/gestion/contrats/";
    return this.http.post<Contrat>(url,contrat);
  }

  /**
   * 
   * @param contrat /api/v1/gestion/contrats/
   * @returns 
   */
  updateContrat(contrat:Contrat):Observable<Contrat>{
    let host=environment.host+":"+environment.contratPort;
    let url=host+"/api/v1/gestion/contrats/";
    return this.http.put<Contrat>(url+contrat.id,contrat);
  }

}
