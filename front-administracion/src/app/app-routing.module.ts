import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './plantilla/inicio/inicio.component';

const routes: Routes = [

  {
    path: "Inicio",
    component: InicioComponent
  },
  {
    path: "",
    pathMatch:"full",
    redirectTo: "/Inicio"
  }//en desarrollo
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
