import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FacturaModelo } from '../modelos/factura.modelo';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {
  url: string = 'http://localhost:3000';
  token: string = '';

  constructor(
    private http : HttpClient,
    private loginservice : LoginService

  ) {
    this.token = this.loginservice.obtenerToken();
   }
   crearFactura(factura : FacturaModelo): Observable<FacturaModelo>{
    return this.http.post<FacturaModelo>(`${this.url}/facturas`,factura,{
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}}`
      })
    });
  }

  
  getFacturas(): Observable<FacturaModelo[]>{
    return this.http.get<FacturaModelo[]>(`${this.url}/facturas`);
  }
  
  
}