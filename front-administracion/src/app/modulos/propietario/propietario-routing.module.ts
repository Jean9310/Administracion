import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarComponent } from './actualizar/actualizar.component';
import { BuscarComponent } from './buscar/buscar.component';
import { CrearComponent } from './crear/crear.component';
import { EliminarComponent } from './eliminar/eliminar.component';

const routes: Routes = [
  {
    path: "crear",
    component: CrearComponent
  },
  {
    path: "actualizar",
    component: ActualizarComponent
  },
  {
    path: "buscar",
    component: BuscarComponent
  },
  {
    path: "eliminar", 
    component: EliminarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropietarioRoutingModule { }
