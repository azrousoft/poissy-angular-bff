import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  public produitPort=9081;
  public santePort=9181;
  public statusUrlProduitApi="/api/v1/produits/status";
  public statusUrlSanteBff="/api/v1/sante/public/produits";
  public produitUrl="/api/v1/produits/";
  public produitSanteUrl="/api/v1/produits/classProduit/SANTE";  
  
  constructor(private common: CommonService) { }
  
  getProduitsStatus(){
    return this.common.getRessourceAsString(this.produitPort, this.statusUrlProduitApi);
  }
  getProduitsSanteStatus(){
    //alert("getting produits sante status...");
    return this.common.getSecRessourceAsString(this.santePort, this.statusUrlSanteBff);
  }

  //=============================================================================
  getProduits(){
    //alert("loading sante produits...");
    return this.common.getRessource(this.produitPort, this.produitSanteUrl);
  }

  public addProduit(produit:Object){
    return this.common.addRessource(this.produitPort, this.produitUrl, produit);
  }
}
