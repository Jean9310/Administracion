import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConjuntoRoutingModule } from './conjunto-routing.module';
import { CrearConjuntoComponent } from './crear-conjunto/crear-conjunto.component';
import { EliminarConjuntoComponent } from './eliminar-conjunto/eliminar-conjunto.component';
import { ActualizarConjuntoComponent } from './actualizar-conjunto/actualizar-conjunto.component';
import { BuscarConjuntoComponent } from './buscar-conjunto/buscar-conjunto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CrearConjuntoComponent,
    EliminarConjuntoComponent,
    ActualizarConjuntoComponent,
    BuscarConjuntoComponent
  ],
  imports: [
    CommonModule,
    ConjuntoRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ConjuntoModule { }
