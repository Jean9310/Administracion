import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarTransaccionComponent } from './actualizar-transaccion/actualizar-transaccion.component';
import { BuscarTransaccionComponent } from './buscar-transaccion/buscar-transaccion.component';

const routes: Routes = [
  {
    path:'actualizar-transaccion',
    component:ActualizarTransaccionComponent
  },
  {
    path:'buscar-transaccion',
    component:BuscarTransaccionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransaccionRoutingModule { }
