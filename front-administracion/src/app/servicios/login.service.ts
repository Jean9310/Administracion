import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import { DatosModelo } from '../modelos/datos.modelo';
import { LoginModelo } from '../modelos/login.modelo';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  datosUsuarios = new  BehaviorSubject<LoginModelo>(new LoginModelo());
  
  constructor(
    private http : HttpClient
  ) { }

    verificacionActualDeLaSesion(){
      let informacion = this.obtenerInformacionUsuario()
      if (informacion) {
        this.datosUsuarios.next(informacion);
        
      }
    }

    getUsuariosEnSesion(){
      return this.datosUsuarios.asObservable();
    }    // esta es para visualizar el listado de usuarios en sesion
    
  validarUsuario(usuario : string, clave : string): Observable<LoginModelo>{
    const url : string = 'http://localhost:3000/validar-acceso';
    const acceso ={
      usuario: usuario,
      clave : clave
    }
    return this.http.post<LoginModelo>(
      url,
      acceso,
      {
        headers: new HttpHeaders({})
      }
    )
  }

  sesionesGuardadas(datos : LoginModelo){
    datos.enSesion = true;
    let stringDatos = JSON.stringify(datos)
    localStorage.setItem("datos en sesion ", stringDatos);

    } //esta formula es para agregar los usuario al localstorage y queden almacenados

  obtenerInformacionUsuario(){
    let stringInformacion = localStorage.getItem('datosSesion')
    if (stringInformacion){
      let datos = JSON.parse(stringInformacion);
      return datos;
    }
    return null;
  }  // Esta es para obtener informacion del usuario ya logeado
  
  eliminarSesiones(){
    localStorage.clear();

  }  // Esta es para eliminar los archivos de localstorage

  obtenerToken(){
    let datosSesion = localStorage.getItem("datosSesion");
    if (datosSesion){
      let 
      datos =JSON.parse(datosSesion);
      return datos.token;
    }
    return 
  }
}

