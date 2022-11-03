import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeccionRoutingModule } from './seccion-routing.module';
import { ActualizarSeccionComponent } from './actualizar-seccion/actualizar-seccion.component';
import { BuscarSeccionComponent } from './buscar-seccion/buscar-seccion.component';



@NgModule({
  declarations: [
   ActualizarSeccionComponent,
    BuscarSeccionComponent
  ],
  imports: [
    CommonModule,
    SeccionRoutingModule
  ]
})
export class SeccionModule { }
