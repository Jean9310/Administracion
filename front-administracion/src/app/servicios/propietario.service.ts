import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PropietarioModelo } from '../modelos/propietarios.modelo';
import { LoginService } from './login.service';


@Injectable({
  providedIn: 'root'
})
export class PropietarioService {
  url: string ='http://localhost:3000';
  token: string = '';

  constructor(
    private http: HttpClient,
    private loginservice : LoginService
  ) {
    this.token=this.loginservice.obtenerToken();
   }


   crearPropietario(propietario: PropietarioModelo): Observable<PropietarioModelo>{
    return this.http.post<PropietarioModelo>(`${this.url}/propietarios`,propietario,{
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    });

  }


  actualizarPropietario(propietario: PropietarioModelo): Observable<PropietarioModelo>{
    return this.http.put<PropietarioModelo>(`${this.url}/propietarios/${propietario.id}`,propietario,{
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    });

  }

  getPropietario(): Observable<PropietarioModelo[]>{
    return this.http.get<PropietarioModelo[]>(`${this.url}/propietarios`);

  }
  getPropietarioId(id : string) : Observable<PropietarioModelo>{
    console.log("Id del propietario : " + id)
    return this.http.get<PropietarioModelo>(`${this.url}/propietarios/${id}`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    });
  }


}