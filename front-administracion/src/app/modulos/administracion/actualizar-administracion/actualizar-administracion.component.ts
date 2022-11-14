import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdministracionModelo } from 'src/app/modelos/administracion.modelo';
import { AdministracionService } from 'src/app/servicios/administracion.service';

@Component({
  selector: 'app-actualizar-administracion',
  templateUrl: './actualizar-administracion.component.html',
  styleUrls: ['./actualizar-administracion.component.css']
})
export class ActualizarAdministracionComponent implements OnInit {
  id : string = '';
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
    private router : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id  = this.router.snapshot.params['id'];
    this.getAdmininistracion();
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

  getAdmininistracion(){
    this.administracionService.getAdministradorId(this.id)
    .subscribe({
      next:( administracion) =>{
        this.formAdministracion.controls['id'].setValue(administracion.id);
        this.formAdministracion.controls['primer_nombre'].setValue(administracion.primer_nombre);
        this.formAdministracion.controls['segundo_nombre'].setValue(administracion.segundo_nombre);
        this.formAdministracion.controls['apellido'].setValue(administracion.apellido);
        this.formAdministracion.controls['segundo_apellido'].setValue(administracion.segundo_apellido);
        this.formAdministracion.controls['correo'].setValue(administracion.correo);
        this.formAdministracion.controls['documento'].setValue(administracion.documento);
        this.formAdministracion.controls['celular'].setValue(administracion.celular);
        this.formAdministracion.controls['profesion'].setValue(administracion.profesion);
        
      },
      error:(error)=>{
        console.log(`Error al buscar al Administrador ${error}`);
      }
    })
  }
}

