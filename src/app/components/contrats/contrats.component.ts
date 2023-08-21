import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Observable, of} from 'rxjs';
import {catchError, map, startWith} from 'rxjs/operators';
import { ContratBean } from 'src/app/daos/contrat-bean.daos';
import { Contrat } from 'src/app/entities/contrat.entities';
import { ContratService } from 'src/app/services/contrat.service';
import { AppDataState, DataStateEnum, PageActionEvent, PageCommand } from 'src/app/state/produit.state';

@Component({
  selector: 'app-contrats',
  templateUrl: './contrats.component.html',
  styleUrls: ['./contrats.component.css']
})
export class ContratsComponent implements OnInit {
  contrat$:Observable<AppDataState<Contrat[]>> |null=null;
  contratBean$:Observable<AppDataState<ContratBean>> |null=null;
  readonly DataStateEnum=DataStateEnum;

  constructor(private contratSrv:ContratService, private router:Router) { }

  ngOnInit(): void {
    //this.getStatus();
    //this.getStatusFromBff();
    this.initContrat();
  } 
  
  onContratActionEvent($event: PageActionEvent){
    if($event.type==PageCommand.ALL){
      this.onGetAllContrats();
    }else if($event.type==PageCommand.SEARCH){
      this.onSearch($event.payload);
    }
  }
  
  onGetAllContrats(){
    this.contrat$= this.contratSrv.getAllContrats().pipe(
      map(data=>{
        console.log(data);
        return ({dataState:DataStateEnum.LOADED,data:data})
      }),
      startWith({dataState:DataStateEnum.LOADING}),
      catchError(err=>of({dataState:DataStateEnum.ERROR, errorMessage:err.message}))
    );
  }
  initContrat(){
    this.contrat$= this.contratSrv.initContrat().pipe(
      map(data=>{
        console.log(data);
        return ({dataState:DataStateEnum.LOADED,data:data})
      }),
      startWith({dataState:DataStateEnum.LOADING}),
      catchError(err=>of({dataState:DataStateEnum.ERROR, errorMessage:err.message}))
    );
  }
  pageContrat(p:number){
    this.contrat$= this.contratSrv.pageContrat(p).pipe(
      map(data=>{
        console.log(data);
        return ({dataState:DataStateEnum.LOADED,data:data})
      }),
      startWith({dataState:DataStateEnum.LOADING}),
      catchError(err=>of({dataState:DataStateEnum.ERROR, errorMessage:err.message}))
    );
  }
  onSearch(dataForm: any) {
    alert(dataForm.code);
    this.contrat$= this.contratSrv.searchContrats(dataForm.code).pipe(
      map(data=>{
        console.log(data); 
        return ({dataState:DataStateEnum.LOADED,data:data.contrats})
      }),
      startWith({dataState:DataStateEnum.LOADING}),
      catchError(err=>of({dataState:DataStateEnum.ERROR, errorMessage:err.message}))
    );
    ;
  }

  onGetSelectedContrats() {
    this.contrat$= this.contratSrv.getSelectedContrats().pipe(
      map(data=>{
        console.log(data);
        return ({dataState:DataStateEnum.LOADED,data:data})
      }),
      startWith({dataState:DataStateEnum.LOADING}),
      catchError(err=>of({dataState:DataStateEnum.ERROR, errorMessage:err.message}))
    );
  }

  onGetAvailableContrats() {
    this.contrat$= this.contratSrv.getAvailableContrats().pipe(
      map(data=>{
        console.log(data);
        return ({dataState:DataStateEnum.LOADED,data:data})
      }),
      startWith({dataState:DataStateEnum.LOADING}),
      catchError(err=>of({dataState:DataStateEnum.ERROR, errorMessage:err.message}))
    );
  }

  

  onSelect(c: Contrat) {
   
  }

  onDelete(c: Contrat) {
     
  }

  onNewContrat() {
    this.router.navigateByUrl("/contratsAdd");
  }

  onEdit(c: Contrat) {
    alert(c.id);
    this.router.navigateByUrl("/contratsUpdate/"+c.id);
  }

}
