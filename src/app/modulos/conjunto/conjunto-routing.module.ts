import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarConjuntoComponent } from './actualizar-conjunto/actualizar-conjunto.component';
import { BuscarConjuntoComponent } from './buscar-conjunto/buscar-conjunto.component';
import { CrearConjuntoComponent } from './crear-conjunto/crear-conjunto.component';
import { EliminarConjuntoComponent } from './eliminar-conjunto/eliminar-conjunto.component';

const routes: Routes = [
  {
    path:'crear-conjunto',
    component: CrearConjuntoComponent
  },
  {
    path:'buscar-conjunto',
    component: BuscarConjuntoComponent
  },
  {
    path:'eliminar',
    component: EliminarConjuntoComponent
  },
  {
    path: 'actualizar',
    component: ActualizarConjuntoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConjuntoRoutingModule { }
