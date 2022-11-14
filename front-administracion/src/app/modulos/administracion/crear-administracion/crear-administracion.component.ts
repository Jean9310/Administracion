import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators,FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdministracionModelo } from 'src/app/modelos/administracion.modelo';
import { AdministracionService } from 'src/app/servicios/administracion.service';

@Component({
  selector: 'app-crear-administracion',
  templateUrl: './crear-administracion.component.html',
  styleUrls: ['./crear-administracion.component.css']
})
export class CrearAdministracionComponent implements OnInit {
  formAdministracion : FormGroup = this.formBuilder.group({
    'id':['', Validators.required],
    'nombre':['', Validators.required],
    'Segundo_nombre':['', Validators.required],
    'apellido':['', Validators.required],
    'Segundo_apellido':['', Validators.required],
    'correo':['', Validators.required],
    'documento':['', Validators.required],
    'celular':['', Validators.required],
    'profesion':['', Validators.required],

  });


  constructor(
    private formBuilder : FormBuilder,
    private administracionService : AdministracionService,
    private route : Router,
    private router :ActivatedRoute
  ) { }

  ngOnInit(): void {
    
  }

  guardarAdministrador(){
    let administracion : AdministracionModelo = {
      id: this.formAdministracion.controls['id'].value,
      primer_nombre: this.formAdministracion.controls['nombre'].value,
      segundo_nombre : this.formAdministracion.controls['Segundo_nombre'].value,
      apellido : this.formAdministracion.controls['apellido'].value,
      segundo_apellido : this.formAdministracion.controls['Segundo_apellido'].value,
      correo : this.formAdministracion.controls['correo'].value,
      documento : this.formAdministracion.controls['documento'].value,
      celular: this.formAdministracion.controls['celular'].value,
      profesion : this.formAdministracion.controls['profesion'].value,
    }
    this.administracionService.crearAdministrador(administracion)
      .subscribe( {
        next: (datos) => {
          this.route.navigate(['/administracion/buscar-administracion']);
        },
        error :(error)=> {
          console.log(`Error al Guaradar el administrador ${error}`);
        }
      
      });
  }

  
}
