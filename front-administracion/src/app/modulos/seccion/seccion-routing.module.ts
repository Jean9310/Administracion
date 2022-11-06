import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarSeccionComponent } from './actualizar-seccion/actualizar-seccion.component';
import { BuscarSeccionComponent } from './buscar-seccion/buscar-seccion.component';

const routes: Routes = [
  {
    path:'actualizar-seccion',
    component:ActualizarSeccionComponent
  },
  {
    path:'buscar-seccion',
    component:BuscarSeccionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeccionRoutingModule { }
