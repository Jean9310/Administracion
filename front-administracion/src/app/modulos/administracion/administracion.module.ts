import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { CrearAdministracionComponent } from './crear-administracion/crear-administracion.component';
import { BuscarAdministracionComponent } from './buscar-administracion/buscar-administracion.component';
import { ActualizarAdministracionComponent } from './actualizar-administracion/actualizar-administracion.component';
import { EliminarAdministracionComponent } from './eliminar-administracion/eliminar-administracion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CrearAdministracionComponent,
    BuscarAdministracionComponent,
    ActualizarAdministracionComponent,
    EliminarAdministracionComponent
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdministracionModule { }
