import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Contrat } from 'src/app/entities/contrat.entities';
import { AppDataState, DataStateEnum, PageActionEvent, PageCommand } from 'src/app/state/produit.state';

@Component({
  selector: 'app-list-ctr',
  templateUrl: './list-ctr.component.html',
  styleUrls: ['./list-ctr.component.css']
})
export class ListCtrComponent implements OnInit {
  @Output() contratEeventEmitter: EventEmitter<PageActionEvent> =new EventEmitter<PageActionEvent>();
  @Input() contratsInput:Observable<AppDataState<Contrat[]>> |null=null;
  
  readonly DataStateEnum=DataStateEnum;

  constructor() { }

  ngOnInit(): void {
  }

  onGetSelectedContrats(c: Contrat) {
    this.contratEeventEmitter.emit({type: PageCommand.CONSULT, payload: c});
  }

  onDelete(c: Contrat) {
    this.contratEeventEmitter.emit({type: PageCommand.DELETE, payload: c});
  }

  onEdit(dataForm: any) {    
    this.contratEeventEmitter.emit({type: PageCommand.UPDATE, payload: dataForm});
  }

  onActionEvent($event: PageActionEvent) {
    this.contratEeventEmitter.emit($event);
  }
}
