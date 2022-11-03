import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransaccionRoutingModule } from './transaccion-routing.module';
import { ActualizarTransaccionComponent } from './actualizar-transaccion/actualizar-transaccion.component';
import { BuscarTransaccionComponent } from './buscar-transaccion/buscar-transaccion.component';



@NgModule({
  declarations: [
    ActualizarTransaccionComponent,
    BuscarTransaccionComponent
  ],
  imports: [
    CommonModule,
    TransaccionRoutingModule
  ]
})
export class TransaccionModule { }
