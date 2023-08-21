import { EventEmitter, Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ContratService } from 'src/app/services/contrat.service';
import {catchError, map, Observable, of, startWith} from 'rxjs';
import { AppDataState, DataStateEnum, PageActionEvent, PageCommand } from 'src/app/state/produit.state';
import { Contrat } from 'src/app/entities/contrat.entities';


@Component({
  selector: 'app-nav-ctr',
  templateUrl: './nav-ctr.component.html',
  styleUrls: ['./nav-ctr.component.css']
})
export class NavCtrComponent implements OnInit {
  @Output() contratEeventEmitter: EventEmitter<PageActionEvent> =new EventEmitter();

  public statusContratApi: any;
  public statusSanteBff: any;

  contrats$:Observable<AppDataState<Contrat[]>> |null=null;
  readonly DataStateEnum=DataStateEnum;
  
  constructor() { }

  ngOnInit(): void {
  }
  
  onGetAllContrats() {
    this.contratEeventEmitter.emit({type: PageCommand.ALL});
  }
  onSearch(dataForm: any) {
    this.contratEeventEmitter.emit({type: PageCommand.SEARCH, payload: dataForm});
  }

  onGetSelectedContrats() {
    
  }

  onGetAvailableContrats() {
   
  }

  

  onSelect(c: Contrat) {
    
  }

  onDelete() {
    
  }

  onNewContrat() {
    //this.router.navigateByUrl("/newContrat");
  }

  onEdit() {
    //this.router.navigateByUrl("/editContrat/"+p.id);
  }

 }
