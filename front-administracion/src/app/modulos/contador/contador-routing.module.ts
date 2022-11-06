import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarContadorComponent } from './actualizar-contador/actualizar-contador.component';
import { BuscarContadorComponent } from './buscar-contador/buscar-contador.component';
import { CrearContadorComponent } from './crear-contador/crear-contador.component';
import { EliminarContadorComponent } from './eliminar-contador/eliminar-contador.component';

const routes: Routes = [
  {
    path:'crear-contador',
    component: CrearContadorComponent
  },
  {
    path: 'buscar-contador',
    component:BuscarContadorComponent
  },
  {
    path:'actualizar-contador',
    component:ActualizarContadorComponent
  },
  {
    path:'eliminar-contador',
    component: EliminarContadorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContadorRoutingModule { }
