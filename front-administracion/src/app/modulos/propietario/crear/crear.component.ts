import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PropietarioModelo } from 'src/app/modelos/propietarios.modelo';

import { PropietarioService } from 'src/app/servicios/propietario.service';
const cryptoJs = require('crypto-js');
@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  formularioPropietario: FormGroup = this.formBuilder.group({
    'primer_nombre': ['', [Validators.required]],
    'segundo_nombre': ['', [Validators.required]],
    'primer_apellido': ['', [Validators.required]],
    'segundo_apellido': ['', [Validators.required]],
    'documento': ['', [Validators.required]],
    'correo': ['', [Validators.required]],
    'contrasena': ['', [Validators.required]],
    'escritura': ['', [Validators.required]]

  });
  constructor(
    private formBuilder: FormBuilder,
    private propietarioService: PropietarioService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  guardarPropietario() {
    let propietario: PropietarioModelo = {
      primer_nombre: this.formularioPropietario.controls['primer_nombre'].value,
      segundo_nombre: this.formularioPropietario.controls['segundo_nombre'].value,
      primer_apellido: this.formularioPropietario.controls['primer_apellido'].value,
      segundo_apellido: this.formularioPropietario.controls['segundo_apellido'].value,
      documento: this.formularioPropietario.controls['documento'].value,
      correo: this.formularioPropietario.controls['correo'].value,
      contrasena: cryptoJs.MD5(this.formularioPropietario.controls['contrasena'].value).toString(),
      escritura: this.formularioPropietario.controls['escritura'].value

    }
    alert('propietario guardado')
    this.propietarioService.crearPropietario(propietario)
      .subscribe ((datos)=>{
        this.router.navigate(['/propietario/buscar'])
        alert('propietario guardado2')
      },(error)=>{
        console.log("error al guardar el propietario"); 
      }
      )
  }

}