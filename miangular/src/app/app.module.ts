import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import {
  NgIf,
  NgFor,
  UpperCasePipe,
} from '@angular/common';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';


import { HeroSearchComponent } from './hero-search/hero-search.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuarioDetailComponent } from './usuario-detail/usuario-detail.component';
import { RolesComponent } from './roles/roles.component';
import { ProvinciasComponent } from './provincias/provincias.component';
import { DataTablesModule } from "angular-datatables";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgTemplateRefComponent } from './ng-template-ref/ng-template-ref.component';
import { LocalidadesComponent } from './localidades/localidades.component';
import { LocalidadDetailComponent } from './localidad-detail/localidad-detail.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ClientesComponent } from './clientes/clientes.component';
import { ClienteDetailComponent } from './cliente-detail/cliente-detail.component';
import { ContactosComponent } from './contactos/contactos.component';
import { ContactoDetailComponent } from './contacto-detail/contacto-detail.component';
import {SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2'

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,
    UsuariosComponent,
    UsuarioDetailComponent,
    RolesComponent,
    ProvinciasComponent,
    NgTemplateRefComponent,
    LocalidadesComponent,
    LocalidadDetailComponent,
    ClientesComponent,
    ClienteDetailComponent,
    ContactosComponent,
    ContactoDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
      // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
   
    FormsModule,
        NgIf,
        NgFor,
        UpperCasePipe,
        DataTablesModule,
        NgbModule,
        NgxDatatableModule,
        SweetAlert2Module.forRoot()
   
  ],
  providers: [
    //provideClientHydration(withEventReplay()),
    //SweetAlert2Module
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
