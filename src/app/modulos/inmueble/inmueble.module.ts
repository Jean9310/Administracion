import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InmuebleRoutingModule } from './inmueble-routing.module';
import { BuscarInmuebleComponent } from './buscar-inmueble/buscar-inmueble.component';
import { ActualizarInmuebleComponent } from './actualizar-inmueble/actualizar-inmueble.component';



@NgModule({
  declarations: [
   BuscarInmuebleComponent,
   ActualizarInmuebleComponent
  ],
  imports: [
    CommonModule,
    InmuebleRoutingModule
  ]
})
export class InmuebleModule { }
