import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuarioDetailComponent } from './usuario-detail/usuario-detail.component';
import { RolesComponent } from './roles/roles.component';
import { LocalidadesComponent } from './localidades/localidades.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ClienteDetailComponent } from './cliente-detail/cliente-detail.component';
import { ContactosComponent } from './contactos/contactos.component';
import { ContactoDetailComponent } from './contacto-detail/contacto-detail.component';
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'usuarios/detail/:id', component: UsuarioDetailComponent },
  { path: 'roles', component: RolesComponent },
  { path: 'localidades', component: LocalidadesComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'clientes/detail/:id', component: ClienteDetailComponent },
  { path: 'contactos', component: ContactosComponent },
  { path: 'contactos/detail/:id', component: ContactoDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }