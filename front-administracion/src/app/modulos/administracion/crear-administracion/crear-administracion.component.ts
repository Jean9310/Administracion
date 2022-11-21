import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators,FormBuilder } from '@angular/forms';
import {  Router } from '@angular/router';
import { AdministracionModelo } from 'src/app/modelos/administracion.modelo';
import { AdministracionService } from 'src/app/servicios/administracion.service';
const cryptoJs = require('crypto-js')

@Component({
  selector: 'app-crear-administracion',
  templateUrl: './crear-administracion.component.html',
  styleUrls: ['./crear-administracion.component.css']
})
export class CrearAdministracionComponent implements OnInit {
  formAdministracion : FormGroup = this.formBuilder.group({
     'id':['', [Validators.required] ],
    'nombre':['', [Validators.required] ],
    'segundo_nombre':['', [Validators.required ]],
    'primer_apellido':['', [Validators.required]  ],
    'segundo_apellido':['', [Validators.required] ],
    'correo':['', [Validators.required] ],
    'documento':['', [Validators.required] ],
    'celular':['', [Validators.required] ],
    'profesion':['', [Validators.required] ],
    'contrasena': ['',[Validators.required]]

  });


  constructor(
    private formBuilder : FormBuilder,
    private administracionService : AdministracionService,
    private route : Router,
   
  ) { }

  ngOnInit(): void {
    
  }

  guardarAdministrador(){
    let administracion : AdministracionModelo = {
      primer_nombre: this.formAdministracion.controls['nombre'].value,
      segundo_nombre : this.formAdministracion.controls['segundo_nombre'].value,
      primer_apellido : this.formAdministracion.controls['primer_apellido'].value,
      segundo_apellido : this.formAdministracion.controls['segundo_apellido'].value,
      correo : this.formAdministracion.controls['correo'].value,
      documento : this.formAdministracion.controls['documento'].value,
      celular: this.formAdministracion.controls['celular'].value,
      profesion : this.formAdministracion.controls['profesion'].value,
      contrasena: cryptoJs.MD5(this.formAdministracion.controls['contrasena'].value).toString()
    }
    this.administracionService.crearAdministrador(administracion)
      .subscribe( {
        next: (datos) => {
          alert('Administrador guardado con exito.... ')
          this.route.navigate(['/administracion/buscar-administracion']);
        },
        error :(error)=> {
          console.log('Error al Guardar el administrador' + error);
        }
      });
  }

  
}
