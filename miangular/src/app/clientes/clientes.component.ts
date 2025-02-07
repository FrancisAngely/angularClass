import { Component } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../cliente';
import {FormsModule} from '@angular/forms';
import {SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2'

@Component({
  selector: 'app-clientes',
  standalone: false,
  
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})
export class ClientesComponent {
clientes: Cliente[] = [];
  constructor(private clienteService: ClienteService) { }

  getClientes(): void {
    this.clienteService.getClientes()
      .subscribe(clientes => this.clientes = clientes);
        
  }

  add(nombre: string,apellidos:string): void {
    nombre = nombre.trim();
    apellidos = apellidos.trim();
      if (!nombre) { return; }
      this.clienteService.addCliente({ nombre,apellidos } as Cliente)
        .subscribe(cliente => {
          this.clientes.push(cliente);
        });
    }
  ngOnInit(): void {
    this.getClientes();
  }
}
