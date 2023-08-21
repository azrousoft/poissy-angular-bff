import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContratService } from 'src/app/services/contrat.service';

@Component({
  selector: 'app-add-ctr',
  templateUrl: './add-ctr.component.html',
  styleUrls: ['./add-ctr.component.css']
})
export class AddCtrComponent implements OnInit {
  contratFormGroup?: FormGroup;
  submitted:boolean=false;

  constructor(private fb: FormBuilder, private contratSrv: ContratService) { }

  ngOnInit(): void {
    this.contratFormGroup = this.fb.group({
        client: [0, Validators.required],
        produit: [0, Validators.required],
        option: ['']
    });

  }

  onSavecontrat(){    
    this.submitted=true;
    if(this.contratFormGroup?.invalid) return;    
    this.contratSrv.saveContrat(this.contratFormGroup?.value)
      .subscribe(data=>{
        alert("Contrat enregistré!");
      });
  }

}
