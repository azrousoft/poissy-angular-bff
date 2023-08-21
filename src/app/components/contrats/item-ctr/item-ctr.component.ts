import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contrat } from 'src/app/entities/contrat.entities';
import { PageActionEvent, PageCommand } from 'src/app/state/produit.state';

@Component({
  selector: 'app-item-ctr',
  templateUrl: './item-ctr.component.html',
  styleUrls: ['./item-ctr.component.css']
})
export class ItemCtrComponent implements OnInit {
  @Input() contrat:Contrat|null=null;
  @Output() eventEmitter:EventEmitter<PageActionEvent>=new EventEmitter<PageActionEvent>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(c: Contrat) {
    this.eventEmitter.emit({type:PageCommand.CONSULT,payload:c});
  }

  onDelete(c: Contrat) {
    this.eventEmitter.emit({type:PageCommand.DELETE,payload:c});
  }

  onEdit(c: Contrat) {
    this.eventEmitter.emit({type:PageCommand.UPDATE,payload:c});
  }
}
