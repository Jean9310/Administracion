import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './plantilla/error/error.component';
import { InicioComponent } from './plantilla/inicio/inicio.component';

const routes: Routes = [

  {
    path: "inicio",
    component: InicioComponent
  },
  {
    path: "",
    pathMatch:"full",
    redirectTo: "/inicio"
  },
  {
    path:"**",
    component: ErrorComponent
  },
  {
    path : 'administracion',
    loadChildren : ()=> import ("./modulos/administracion/administracion.module").then(x => x.AdministracionModule)
  },
  {
    path:'login',
    loadChildren :() => import('./modulos/login/login.module').then(x => x.LoginModule)
  },
  {
    path: 'zona-social',
    loadChildren : () => import('./modulos/zona-social/zona-social.module') .then( z => z.ZonaSocialModule)
  },
  {
    path: 'propietario',
    loadChildren : () => import ('./modulos/propietario/propietario.module').then(x => x.PropietarioModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
