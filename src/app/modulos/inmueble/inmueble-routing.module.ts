import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarInmuebleComponent } from './actualizar-inmueble/actualizar-inmueble.component';
import { BuscarInmuebleComponent } from './buscar-inmueble/buscar-inmueble.component';

const routes: Routes = [
  {
    path:'actulizar-inmueble',
    component:ActualizarInmuebleComponent
  },
  {
    path:'buscar-inmueble',
    component:BuscarInmuebleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InmuebleRoutingModule { }
