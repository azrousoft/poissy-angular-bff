import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { ProduitsComponent } from './components/contrats/produits/produits.component';
import { ContratsComponent } from './components/contrats/contrats.component';
import { ClientsComponent } from './components/clients/clients.component';
import { HomeComponent } from './components/home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AzKeycloakSecurityService } from './services/az-keycloak-security.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavCtrComponent } from './components/contrats/nav-ctr/nav-ctr.component';
import { ListCtrComponent } from './components/contrats/list-ctr/list-ctr.component';
import { AddCtrComponent } from './components/contrats/add-ctr/add-ctr.component';
import { UpdateCtrComponent } from './components/contrats/update-ctr/update-ctr.component';
import { ConsultCtrComponent } from './components/contrats/consult-ctr/consult-ctr.component';
import { ItemCtrComponent } from './components/contrats/item-ctr/item-ctr.component';

export function azFactory(azSec: AzKeycloakSecurityService){
  return () => azSec.init();
}

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AuthenticationComponent,
    ProduitsComponent,
    ContratsComponent,
    ClientsComponent,
    HomeComponent,
    NavCtrComponent,
    ListCtrComponent,
    AddCtrComponent,
    UpdateCtrComponent,
    ConsultCtrComponent,
    ItemCtrComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: APP_INITIALIZER, deps: [AzKeycloakSecurityService], useFactory: azFactory, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
