import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ContratsComponent } from './components/contrats/contrats.component';
import { HomeComponent } from './components/home/home.component';
import { ProduitsComponent } from './components/contrats/produits/produits.component';
import { AddCtrComponent } from './components/contrats/add-ctr/add-ctr.component';
import { UpdateCtrComponent } from './components/contrats/update-ctr/update-ctr.component';
import { ConsultCtrComponent } from './components/contrats/consult-ctr/consult-ctr.component';

const routes: Routes = [
  {path: "auth", component: AuthenticationComponent},
  {path: "produits", component: ProduitsComponent},
  
  {path: "contrats", component: ContratsComponent},
  {path: "contratsAdd", component: AddCtrComponent},
  {path: "contratsUpdate/:id", component: UpdateCtrComponent},
  {path: "contratsConsult/:id", component: ConsultCtrComponent},

  {path: "clients", component: ClientsComponent},
  {path: "home", component: HomeComponent},
  {path: "", component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
