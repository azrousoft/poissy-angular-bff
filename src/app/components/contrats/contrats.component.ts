import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Observable, of} from 'rxjs';
import {catchError, map, startWith} from 'rxjs/operators';
import { ContratBean } from 'src/app/daos/contrat-bean.daos';
import { Contrat } from 'src/app/entities/contrat.entities';
import { ContratService } from 'src/app/services/contrat.service';
import { EventDriverService } from 'src/app/state/event.driver.service.state';
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

  constructor(private contratSrv:ContratService, private router:Router, 
              private eventDriverSrv: EventDriverService) { }

  ngOnInit(): void {
    //this.getStatus();
    //this.getStatusFromBff();
    // subscrib to eventDriverSrv au démarrage du component
    this.eventDriverSrv.contratSourceEventSubjectObservable.subscribe(
      (event: PageActionEvent)=>{ //j'attend un event de type PageActionEvent
        this.onContratActionEvent(event);
      }
    );
    this.initContrat();
  } 
  
  onContratActionEvent($event: PageActionEvent){
    switch ($event.type) {
      case PageCommand.ALL: this.onGetAllContrats();break;
      case PageCommand.SEARCH: this.onSearch($event.payload);break;
      case PageCommand.ADD: this.onNewContrat();break;
      case PageCommand.CONSULT: this.onGetSelectedContrats($event.payload);break;
      case PageCommand.DELETE: this.onDelete($event.payload);break;
      case PageCommand.UPDATE: this.onEdit($event.payload);break;
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
  }

  onGetSelectedContrats(c: Contrat) {
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

  onNewContrat() {
    alert("onNewContrat");
    this.router.navigateByUrl("/contratsAdd");
  }

  onEdit(c: Contrat) {
    alert(c.id);
    this.router.navigateByUrl("/contratsUpdate/"+c.id);
  }

  onDelete(c: Contrat) {
    let v=confirm("Voulez vous vraiment supprimer ce contrat?");
    if(v==true){
      this.contratSrv.deleteContrat(c.id)
      .subscribe(data=>{
        this.onGetAllContrats();
      })
    }
    
  }
}
