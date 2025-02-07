import { Component, ViewChild } from '@angular/core';
import { ContactoService } from '../contacto.service';
import { Contacto } from '../contacto';
import {FormsModule} from '@angular/forms';
import { SweetAlert2Module, SwalComponent, SwalPortalTarget } from '@sweetalert2/ngx-sweetalert2'

@Component({
  selector: 'app-contactos',
  standalone: false,
  
  templateUrl: './contactos.component.html',
  styleUrl: './contactos.component.css'
})
export class ContactosComponent {
contactos: Contacto[] = [];
  constructor(private contactoService: ContactoService) { }

  getContactos(): void {
      this.contactoService.getContactos()
        .subscribe(contactos => this.contactos = contactos);
          
    }
  
    add(nombre: string,email:string,asunto:string,mensaje:string): void {
      nombre = nombre.trim();
      email = email.trim();
      asunto = asunto.trim();
      mensaje = mensaje.trim();
        if (!nombre) { return; }
        this.contactoService.addContacto({ nombre,email,asunto,mensaje } as Contacto)
          .subscribe(contacto => {
            this.contactos.push(contacto);
          });
      }
    ngOnInit(): void {
      this.getContactos();
    }
    // delete(contacto: Contacto): void {
    //     this.contactos = this.contactos.filter(h => h !== contacto);
    //     this.contactoService.deleteContacto(contacto.id).subscribe();
    //   }
    
    texto:any

    @ViewChild('confirmDialog') confirmDialog: SwalComponent | any;
    @ViewChild('swal1') respuestaDialog: SwalComponent | any;
    async delete(contacto: Contacto) {
      this.texto="Contato de:"+contacto.email;
      const resp = await this.confirmDialog.fire();
      
      if(resp.isConfirmed) {
      // Borra el producto
      
      this.contactos = this.contactos.filter(h => h !== contacto);
      this.contactoService.deleteContacto(contacto.id).subscribe();
      const respo2= await this.respuestaDialog.fire();
      
      }
      }

}
