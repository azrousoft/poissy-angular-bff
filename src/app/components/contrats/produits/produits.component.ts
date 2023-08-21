import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Produit } from 'src/app/entities/produit.entities';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  public statusProduitApi: any;
  public statusSanteBff: any;
  public produits?: Produit[];
 
 
  constructor(private produitSrv:ProduitService, private fb: FormBuilder) { }

  produitForm = this.fb.group({
    code: ['', [Validators.required, Validators.maxLength(3)]],
    libelle: ['', Validators.required]
  });
  
  ngOnInit(): void {    
    this.initMyUi();

    this.getStatus();
    this.getStatusFromBff();
    this.getProduits();
  }

  initMyUi(){    
  }

  saveProduit(){
    if(!this.produitForm.valid){
      console.log("Form n'est pas valide!");
      return;
    }
    console.log(this.produitForm.value);
    this.addProduit();
  }

  get f(): {[key: string]: AbstractControl} {
    return this.produitForm.controls;
  }

  getStatus(){
    this.produitSrv.getProduitsStatus()
    .subscribe(
      data=> {
        this.statusProduitApi=data;
        console.log("returned data: "+this.statusProduitApi);
      },
      err=>{console.log(err);}
    );
  }

  getStatusFromBff(){
    this.produitSrv.getProduitsSanteStatus()
    .subscribe(
      data=> {
        this.statusSanteBff=data;
        console.log("returned data: "+this.statusSanteBff);
      },
      err=>{console.log(err);}
    );
  }

  getProduits(){
    this.produitSrv.getProduits().subscribe(
      data=> {this.produits=data as Produit[];},
      err=>{console.log(err);}
    );
  }

  addProduit(){
    //const produit = { 'name': 'ADE'} ; 
    const produit = this.produitForm.value;

    this.produitSrv.addProduit(produit)
    .subscribe(
      data=> {
           console.log("POST completed sucessfully. The response received "+data);
       },
       error => {
           console.log("Post failed with the errors");
       });
  }
  
}
