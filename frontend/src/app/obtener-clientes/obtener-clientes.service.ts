import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ObtenerClientesService {
  constructor( private http: HttpClient ) { }

  public obtenerClientes(): Observable<any>{
    return this.http.get("https://prueba-ebb92.firebaseio.com/clients.json", httpOptions);
  }
}
