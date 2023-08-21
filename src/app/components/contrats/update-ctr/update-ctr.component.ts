import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-ctr',
  templateUrl: './update-ctr.component.html',
  styleUrls: ['./update-ctr.component.css']
})
export class UpdateCtrComponent implements OnInit {
  contratFormGroup?: FormGroup;
  submitted:boolean=false;
  contratId?: number= 0;
  
  constructor(private fb: FormBuilder, private actRout: ActivatedRoute) {
    this.contratId = actRout.snapshot.params['id'];
  }

  ngOnInit(): void { 
    this.contratFormGroup = this.fb.group({
        id: [this.contratId],
        client: [0, Validators.required],
        produit: [0, Validators.required],
        option: ['']
    });
    this.getContrat();
  }
  
  getContrat(){
    //alert(this.contratId);    
    
  }
  onSaveUpdate(){
    this.submitted=true;
    if(this.contratFormGroup?.invalid) return;    
    alert("Contrat updated");
  }

}
