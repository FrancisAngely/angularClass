import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Cliente } from './cliente';
@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private Url = 'http://localhost:8080/clientes';  // URL to web api
   httpOptions = {
     headers: new HttpHeaders({ 'Content-Type': 'application/json' })
   };
   constructor(private http: HttpClient) { }

   getClientes(): Observable<Cliente[]> {
         
         return this.http.get<Cliente[]>(this.Url)
         .pipe ( map ( ( respuesta : any ) => respuesta.clientes ) ) ;
         
       }

  addCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.Url, cliente, this.httpOptions)
    .pipe ( map ( ( respuesta : any ) => respuesta.cliente ) ) ;
  
  }

  getCliente(id: number): Observable<Cliente> {
    const url = `${this.Url}/${id}`;
    return this.http.get<Cliente>(url)
    .pipe ( map ( ( respuesta : any ) => respuesta.cliente ) ) ;
}

updateCliente(cliente: Cliente): Observable<any> {
  const id=cliente.id;
  const url = `${this.Url}/${id}`;
  return this.http.put(url, cliente, this.httpOptions);
}
}
