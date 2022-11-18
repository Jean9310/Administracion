import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropietarioRoutingModule } from './propietario-routing.module';
import { CrearComponent } from './crear/crear.component';
import { BuscarComponent } from './buscar/buscar.component';
import { EliminarComponent } from './eliminar/eliminar.component';
import { ActualizarComponent } from './actualizar/actualizar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CrearComponent,
    BuscarComponent,
    EliminarComponent,
    ActualizarComponent
  ],
  imports: [
    CommonModule,
    PropietarioRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class PropietarioModule { }
