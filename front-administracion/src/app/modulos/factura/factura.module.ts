import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacturaRoutingModule } from './factura-routing.module';
import { CrearFacturaComponent } from './crear-factura/crear-factura.component';
import { ElimnarFacturaComponent } from './elimnar-factura/elimnar-factura.component';
import { ActualizarFacturaComponent } from './actualizar-factura/actualizar-factura.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CrearFacturaComponent,
    ElimnarFacturaComponent,
    ActualizarFacturaComponent
  ],
  imports: [
    CommonModule,
    FacturaRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FacturaModule { }
