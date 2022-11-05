import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarAdministracionComponent } from './actualizar-administracion/actualizar-administracion.component';
import { BuscarAdministracionComponent } from './buscar-administracion/buscar-administracion.component';
import { CrearAdministracionComponent } from './crear-administracion/crear-administracion.component';
import { EliminarAdministracionComponent } from './eliminar-administracion/eliminar-administracion.component';

const routes: Routes = [
  {
    path:"crear-administracion",
    component: CrearAdministracionComponent
      },
      {
        path: "eliminar-administracion",
        component: EliminarAdministracionComponent
      },
      {
        path: "buscar-administracion",
        component: BuscarAdministracionComponent
      },
      {
        path: "actualizar-administracion",
        component: ActualizarAdministracionComponent
      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
