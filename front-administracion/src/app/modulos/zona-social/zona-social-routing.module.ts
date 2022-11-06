import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarZonaSocialComponent } from './buscar-zona-social/buscar-zona-social.component';

const routes: Routes = [
  {
    path:'buscar-zona-social',
    component:BuscarZonaSocialComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ZonaSocialRoutingModule { }
