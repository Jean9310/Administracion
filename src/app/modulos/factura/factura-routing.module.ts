import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarFacturaComponent } from './actualizar-factura/actualizar-factura.component';
import { BuscarFacturaComponent } from './buscar-factura/buscar-factura.component';
import { CrearFacturaComponent } from './crear-factura/crear-factura.component';
import { ElimnarFacturaComponent } from './elimnar-factura/elimnar-factura.component';

const routes: Routes = [
  {
    path:'crear-factura',
    component: CrearFacturaComponent
  },
  {
    path:'buscar-factura',
    component:BuscarFacturaComponent
  },
  {
    path:'eliminar-factura',
    component:ElimnarFacturaComponent //cuidado con eliminar factura lo escribe mal 
  },
  {
    path:'actualizar-factura',
    component: ActualizarFacturaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacturaRoutingModule { }
