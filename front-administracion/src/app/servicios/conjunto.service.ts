import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/servicios/login.service';
import { ConjuntoModelo } from '../modelos/conjunto.modelo';

@Injectable({
  providedIn: 'root'
})
export class ConjuntoService {
  url: string = 'http://localhost:3000';
  token: string = '';

  constructor(
    private http: HttpClient,
    private loginservice : LoginService

  ) { 
    this.token = this.loginservice.obtenerToken();
  }
  crearConjunto(conjunto: ConjuntoModelo): Observable<ConjuntoModelo>{
    return this.http.post<ConjuntoModelo>(`${this.url}/conjuntos`,conjunto,{
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}}`
      })
    });
  }

  actualizarConjunto(conjunto: ConjuntoModelo): Observable<ConjuntoModelo>{
    return this.http.put<ConjuntoModelo>(`${this.url}/conjuntos/${conjunto.id}`,conjunto,{
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}}`
      })
    });
  }

  getConjuntos(): Observable<ConjuntoModelo[]>{
    return this.http.get<ConjuntoModelo[]>(`${this.url}/conjuntos`);
  }
  getConjuntoXId(id:string):Observable<ConjuntoModelo>{
    return this.http.get<ConjuntoModelo>(`${this.url}/conjuntos/${id}`,{
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}}`
      })
    });
}
}
