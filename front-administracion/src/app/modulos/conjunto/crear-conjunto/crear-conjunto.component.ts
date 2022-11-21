import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdministracionModelo } from 'src/app/modelos/administracion.modelo';
import { ConjuntoModelo } from 'src/app/modelos/conjunto.modelo';
import { AdministracionService } from 'src/app/servicios/administracion.service';
import { ConjuntoService } from 'src/app/servicios/conjunto.service';



@Component({
  selector: 'app-crear-conjunto',
  templateUrl: './crear-conjunto.component.html',
  styleUrls: ['./crear-conjunto.component.css']
})
export class CrearConjuntoComponent implements OnInit {
  listaAdministrador  : AdministracionModelo[] = [];
  
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
    'contadorId': ['',[Validators.required]],
    'administradorId': ['',[Validators.required]]

  });
  constructor(
    private formBuilder: FormBuilder,
    private conjuntoService: ConjuntoService,
    private router: Router,
    private administrador : AdministracionService

  ) {
    this.administrador.getAdministrador();
   }

  ngOnInit(): void {
  }

  guardarConjunto(){
    alert(this.guardarConjunto)
    let conjunto: ConjuntoModelo = {
      
      nit: this.formConjunto.controls['nit'].value,
      nombre_conjunto: this.formConjunto.controls['nombre_conjunto'].value,
      direccion: this.formConjunto.controls['direccion'].value,
      telefono: this.formConjunto.controls['telefono'].value,
      estrato: this.formConjunto.controls['estrato'].value,
      correo: this.formConjunto.controls['correo'].value,
      cuenta_bancaria: parseInt(this.formConjunto.controls['cuenta_bancaria'].value),
      banco: this.formConjunto.controls['banco'].value,
      interes_mora: parseInt(this.formConjunto.controls['interes_mora'].value),
      inicio_factura: this.formConjunto.controls['inicio_factura'].value,
      presupuesto: parseInt(this.formConjunto.controls['presupuesto'].value),
      contadorId : this.formConjunto.controls['contadorId'].value,
      administradorId: this.formConjunto.controls['administradorId'].value,
    }
    this.conjuntoService.crearConjunto(conjunto)
  //     .subscribe ((datos) => {
  //       alert('Conjunto guardando con exito.... ')
  //       this.router.navigate(['/conjunto/buscar-conjunto']);
  //     }, (error)=>{
  //       console.log("Eror al gaurdar Conjunto" + error)
  //     });
  // }
      .subscribe ({
        next:(datos)=>{
        alert('propietario guardado2');
        this.router.navigate(['/conjunto/buscar-conjunto'])
    
      },
          error:(error) =>
          console.log("error al guardar el propietario") 
      });
  
}

getPropietarios(){
  this.administrador.getAdministrador()
    .subscribe({
      next: (administracion) => {
        this.listaAdministrador = administracion;
      },
      error: (error) => console.log("Error al cnsultar los propietarios")
    })
}
}


