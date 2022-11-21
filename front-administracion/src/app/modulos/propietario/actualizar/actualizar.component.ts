import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PropietarioModelo } from 'src/app/modelos/propietarios.modelo';
import { PropietarioService } from 'src/app/servicios/propietario.service';
@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})
export class ActualizarComponent implements OnInit {
  id : string = '';
  formPropietario : FormGroup = this.formBuilder.group({
    'id':['', [Validators.required]],
    'primer_nombre':['', [Validators.required]],
    'segundo_nombre':['', [Validators.required]],
    'primer_apellido':['', [Validators.required]],
    'segundo_apellido':['', [Validators.required]],
    'documento':['',[ Validators.required]],
    'correo':['', [Validators.required]],
    'contrasena':['', [Validators.required]],
    'escritura':['',[ Validators.required]],
  });
  constructor(
    private formBuilder : FormBuilder,
    private propietarioService: PropietarioService,
    private route : Router,
    private router : ActivatedRoute
  ) { }
  ngOnInit(): void {
    this.id  = this.router.snapshot.params['id'];
    this.getPropietario();
  }
  guardarPropietario(){
    let prop : PropietarioModelo = {
      id: this.formPropietario.controls['id'].value,
      primer_nombre: this.formPropietario.controls['primer_nombre'].value,
      segundo_nombre : this.formPropietario.controls['segundo_nombre'].value,
      primer_apellido : this.formPropietario.controls['primer_apellido'].value,
      segundo_apellido : this.formPropietario.controls['segundo_apellido'].value,
      correo : this.formPropietario.controls['correo'].value,
      documento : this.formPropietario.controls['documento'].value,
      contrasena: this.formPropietario.controls['contrasena'].value,
      escritura: this.formPropietario.controls['escritura'].value,
      }
    this.propietarioService.actualizarPropietario(prop)
      .subscribe( {
        next: (datos) => {
          alert("Sus Datos fueron actualizados")
          this.route.navigate(['/administracion/buscar-administracion']);
          this.route.navigate(['/propietario/buscar']);
        },
        error :(error)=> {
          console.log(`Error al Guaradar el administrador ${error}`);
          console.log(`Error al Guaradar el propietario ${error}`);
        }

      });
  }
  getPropietario(){
    this.propietarioService.getPropietarioId(this.id)
    .subscribe({
      next:( propietario) => {
        this.formPropietario.controls['id'].setValue(propietario.id);
        this.formPropietario.controls['primer_nombre'].setValue(propietario.primer_nombre);
        this.formPropietario.controls['segundo_nombre'].setValue(propietario.segundo_nombre);
        this.formPropietario.controls['primer_apellido'].setValue(propietario.primer_apellido);
        this.formPropietario.controls['segundo_apellido'].setValue(propietario.segundo_apellido);
        this.formPropietario.controls['correo'].setValue(propietario.correo);
        this.formPropietario.controls['documento'].setValue(propietario.documento);
        this.formPropietario.controls['contrasena'].setValue(propietario.contrasena);
        this.formPropietario.controls['escritura'].setValue(propietario.escritura);
        

      },
      error:(error)=>{
        console.log('Error al buscar al Administrador' + error);
        console.log('Error al buscar un propietario' + error);
      }
    })
  }
}