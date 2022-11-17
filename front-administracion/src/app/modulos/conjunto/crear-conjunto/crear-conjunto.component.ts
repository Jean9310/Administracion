import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConjuntoModelo } from 'src/app/modelos/conjunto.modelo';
import { ConjuntoService } from 'src/app/servicios/conjunto.service';
const cryptoJS = require('crypto-js');


@Component({
  selector: 'app-crear-conjunto',
  templateUrl: './crear-conjunto.component.html',
  styleUrls: ['./crear-conjunto.component.css']
})
export class CrearConjuntoComponent implements OnInit {
  formConjunto: FormGroup = this.formBuilder.group({
    'nit': ['', [Validators.required,]],
    'nombre_conjunto': ['', [Validators.required,]],
    'direccion': ['', [Validators.required,]],
    'telefono': ['', [Validators.required,]],
    'estrato': ['', [Validators.required,]],
    'correo': ['', [Validators.required,]],
    'cuenta_bancaria': ['', [Validators.required,]],
    'banco': ['', [Validators.required,]],
    'interes_mora': ['', [Validators.required,]],
    'inicio_factura': ['', [Validators.required,]],
    'presupuesto': ['', [Validators.required,]],

  });
  constructor(
    private formBuilder: FormBuilder,
    private conjuntoService: ConjuntoService,
    private router: Router

  ) { }

  ngOnInit(): void {
  }

  guardarConjunto(){
    let conjunto:ConjuntoModelo = {
      nit: this.formConjunto.controls['nit'].value,
      nombre_conjunto: this.formConjunto.controls['nit'].value,
      direccion: this.formConjunto.controls['nit'].value,
      telefono: this.formConjunto.controls['nit'].value,
      estrato: this.formConjunto.controls['nit'].value,
      correo: this.formConjunto.controls['nit'].value,
      cuenta_bancaria: this.formConjunto.controls['nit'].value,
      banco: this.formConjunto.controls['nit'].value,
      interes_mora: this.formConjunto.controls['nit'].value,
      inicio_factura: this.formConjunto.controls['nit'].value,
      presupuesto: this.formConjunto.controls['nit'].value,
    }
    this.conjuntoService.crearConjunto(conjunto)
      .subscribe ((datos) => {
        this.router.navigate(['/conjunto/buscar-conjunto']);
      }, (error)=>{
        console.log("Eror al gaurdar Conjunto" + error)
      });
  }
}


