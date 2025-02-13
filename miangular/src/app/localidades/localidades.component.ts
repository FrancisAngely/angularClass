import { Component } from '@angular/core';
import {LOCALIDADES} from '../mock-localidades';
import { Localidad } from '../localidad';
import { LocalidadService } from '../localidad.service';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-localidades',
  standalone: false,
  
  templateUrl: './localidades.component.html',
  styleUrl: './localidades.component.css'
})
export class LocalidadesComponent {
  selectedLocalidad?: Localidad;
  localidades: Localidad[] = [];
  constructor(private localidadService: LocalidadService, private messageService: MessageService) { }

  getLocalidades(): void {
    this.localidadService.getLocalidades()
      .subscribe(localidades => this.localidades = localidades);
        
  }

  
  ngOnInit(): void {
    this.getLocalidades();
  }

  onSelect(localidad: Localidad): void {
    this.selectedLocalidad = localidad;
  }

}
