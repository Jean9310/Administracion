import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConjuntoModelo } from 'src/app/modelos/conjunto.modelo';
import { ConjuntoService } from 'src/app/servicios/conjunto.service';

@Component({
  selector: 'app-actualizar-conjunto',
  templateUrl: './actualizar-conjunto.component.html',
  styleUrls: ['./actualizar-conjunto.component.css']
})
export class ActualizarConjuntoComponent implements OnInit {
  id: string = '';
  formConjunto: FormGroup = this.formBuilder.group({
    'id': ['', [Validators.required,]],
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
    private router: Router,
    private route: ActivatedRoute

  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getConjunto();
  }
  

  guardarConjunto(){
    let conjunto:ConjuntoModelo = {
      id: this.formConjunto.controls['id'].value,
      nit: this.formConjunto.controls['nit'].value,
      nombre_conjunto: this.formConjunto.controls['nombre_conjunto'].value,
      direccion: this.formConjunto.controls['direccion'].value,
      telefono: this.formConjunto.controls['telefono'].value,
      estrato: this.formConjunto.controls['estrato'].value,
      correo: this.formConjunto.controls['correo'].value,
      cuenta_bancaria: this.formConjunto.controls['cuenta_bancaria'].value,
      banco: this.formConjunto.controls['banco'].value,
      interes_mora: this.formConjunto.controls['interes_mora'].value,
      inicio_factura: this.formConjunto.controls['inicio_factura'].value,
      presupuesto: this.formConjunto.controls['presupuesto'].value,
    }
    this.conjuntoService.actualizarConjunto(conjunto)
      .subscribe ((datos) => {
        this.router.navigate(['/conjunto/buscar-conjunto']);
      }, (error)=>{
        console.log("Eror al gaurdar Conjunto" + error)
      });
  }
  getConjunto(){
    this.conjuntoService.getConjuntoXId(this.id)
      .subscribe({
        next:(conjunto) => {
          this.formConjunto.controls['id'].setValue(conjunto.id);
          this.formConjunto.controls['nit'].setValue(conjunto.nit);
          this.formConjunto.controls['nombre_conjunto'].setValue(conjunto.nombre_conjunto);
          this.formConjunto.controls['direccion'].setValue(conjunto.direccion);
          this.formConjunto.controls['telefono'].setValue(conjunto.telefono);
          this.formConjunto.controls['estrato'].setValue(conjunto.estrato);
          this.formConjunto.controls['correo'].setValue(conjunto.correo);
          this.formConjunto.controls['cuenta_bancaria'].setValue(conjunto.cuenta_bancaria);
          this.formConjunto.controls['banco'].setValue(conjunto.banco);
          this.formConjunto.controls['interes_mora'].setValue(conjunto.interes_mora);
          this.formConjunto.controls['inicio_factura'].setValue(conjunto.inicio_factura);
          this.formConjunto.controls['presupuesto'].setValue(conjunto.presupuesto);
        },
        error: (error) => {
          console.log("error al buscar el conjunto");
        
        }
      });
    }
  }  

