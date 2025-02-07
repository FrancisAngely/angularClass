import {Component} from '@angular/core';
import { HeroesComponent } from './heroes/heroes.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
@Component({
  standalone: false,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Admin';
  title2 = 'Admin 2';
}
