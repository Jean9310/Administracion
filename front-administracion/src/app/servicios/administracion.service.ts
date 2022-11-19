import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdministracionModelo } from '../modelos/administracion.modelo';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AdministracionService {
  url : string = 'http://localhost:3000';
  token : string = '';

  constructor(
    private http : HttpClient,
    private loginservice : LoginService

  ) 
  {
    this.token = this.loginservice.obtenerToken();
  }

  crearAdministrador( administracion : AdministracionModelo) :Observable<AdministracionModelo>{
    return this.http.post<AdministracionModelo>(`${this.url}/administradors`, administracion ,{
      headers: new HttpHeaders({
        'Authorization' : `Bearer ${this.token}`
      })
      });
     

  }
  actualizarAdministrador(administracion : AdministracionModelo ) : Observable<AdministracionModelo>{
    return this.http.patch<AdministracionModelo>(`${this.url}/administradors/${administracion.id}`, administracion, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    });
   }

  getAdministrador():Observable<AdministracionModelo []>{
    return this.http.get<AdministracionModelo[]>(`${this.url}/administradors`);
  }
   
  getAdministradorId(id : string) : Observable<AdministracionModelo>{
    console.log("Id del propietario : " + id)
    return this.http.get<AdministracionModelo>(`${this.url}/administradors/${id}`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    });
  }
}

