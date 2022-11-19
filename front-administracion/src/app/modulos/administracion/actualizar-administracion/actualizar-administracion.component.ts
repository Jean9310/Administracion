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

  formaAdministracion : FormGroup = this.formBuilder.group({
    'id':['', [Validators.required]],
    'primer_nombre':['', [Validators.required]],
    'segundo_nombre':['', [Validators.required]],
    'primer_apellido':['', [Validators.required]],
    'segundo_apellido':['', [Validators.required]],
    'documento':['',[ Validators.required]],
    'correo':['', [Validators.required]],
    'celular':['', [Validators.required]],
    'contrasena': ['', [Validators.required]],
    'profesion':['',[ Validators.required]],

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
    alert("Sus Datos fueron actualizados1")
    let admi : AdministracionModelo = {
      id: this.formaAdministracion.controls['id'].value,
      primer_nombre: this.formaAdministracion.controls['primer_nombre'].value,
      segundo_nombre : this.formaAdministracion.controls['segundo_nombre'].value,
      primer_apellido : this.formaAdministracion.controls['primer_apellido'].value,
      segundo_apellido : this.formaAdministracion.controls['segundo_apellido'].value,
      correo : this.formaAdministracion.controls['correo'].value,
      documento : this.formaAdministracion.controls['documento'].value,
      celular: this.formaAdministracion.controls['celular'].value,
      contrasena : this.formaAdministracion.controls['contrasena'].value,
      profesion : this.formaAdministracion.controls['profesion'].value
    }
    this.administracionService.actualizarAdministrador(admi)
      .subscribe( {
        next: (datos) => {
          alert("Sus Datos fueron actualizados")
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
      next:(administracion) => {
        
        this.formaAdministracion.controls['id'].setValue(administracion.id);
        this.formaAdministracion.controls['primer_nombre'].setValue(administracion.primer_nombre);
        this.formaAdministracion.controls['segundo_nombre'].setValue(administracion.segundo_nombre);
        this.formaAdministracion.controls['primer_apellido'].setValue(administracion.primer_apellido);
        this.formaAdministracion.controls['segundo_apellido'].setValue(administracion.segundo_apellido);
        this.formaAdministracion.controls['correo'].setValue(administracion.correo);
        this.formaAdministracion.controls['documento'].setValue(administracion.documento);
        this.formaAdministracion.controls['celular'].setValue(administracion.celular);
        this.formaAdministracion.controls['contrasena'].setValue(administracion.contrasena);
        this.formaAdministracion.controls['profesion'].setValue(administracion.profesion);
        
        },
      error:(error)=>{
        console.log('Error al buscar al Administrador' + error);
      }
    })
  }
}

