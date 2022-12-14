import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContadorRoutingModule } from './contador-routing.module';
import { ActualizarContadorComponent } from './actualizar-contador/actualizar-contador.component';
import { EliminarContadorComponent } from './eliminar-contador/eliminar-contador.component';
import { BuscarContadorComponent } from './buscar-contador/buscar-contador.component';
import { CrearContadorComponent } from './crear-contador/crear-contador.component';


@NgModule({
  declarations: [
    BuscarContadorComponent,
    ActualizarContadorComponent,
    EliminarContadorComponent,
    CrearContadorComponent
  ],
  imports: [
    CommonModule,
    ContadorRoutingModule
  ]
})
export class ContadorModule { }
