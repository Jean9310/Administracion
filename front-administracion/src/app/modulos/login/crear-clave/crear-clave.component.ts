import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/servicios/login.service';
const cryptoJS = require('crypto-js');

@Component({
  selector: 'app-crear-clave',
  templateUrl: './crear-clave.component.html',
  styleUrls: ['./crear-clave.component.css']
})
export class CrearClaveComponent implements OnInit {
  formValidador : FormGroup = this.formBuilder.group({
    'usuario' : ['',[Validators.required ]],
    'contrasena': ['',Validators.required]
  });

  constructor(
    private formBuilder : FormBuilder,
    private loginservice : LoginService
  ) { }

  ngOnInit(): void {
  }
  login(){
    let usuario = this.formValidador.controls["usuario"].value;
    let clave = this.formValidador.controls["contrasena"].value;
    clave = cryptoJS.MD5(clave).toString();
    this.loginservice.validarUsuario(usuario, clave)
    .subscribe( (datos) => {
      alert(`Logeado con exito .... ` + usuario)
       this.loginservice.sesionesGuardadas(datos);
      },
      (error) => {
        console.log(`Error al ingresar ${error}`);
      });
      
  }
  
}
