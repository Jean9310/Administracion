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
    path : 'administracion',
    loadChildren : ()=> import ("./modulos/administracion/administracion.module").then(a => a.AdministracionModule)
  },
  {
    path:'conjunto',
    loadChildren :() => import('./modulos/conjunto/conjunto.module').then(c => c.ConjuntoModule)
  },
  {
    path:'contador',
    loadChildren: () => import('./modulos/contador/contador.module').then(con => con.ContadorModule)
  },
  {
    path:'factura',
    loadChildren: ()=>import('./modulos/factura/factura.module').then(f =>f.FacturaModule)
    },
    {
      path:'inmueble',
      loadChildren: ()=>import('./modulos/inmueble/inmueble.module').then(i => i.InmuebleModule)
    },
  {
    path:'login',
    loadChildren :() => import('./modulos/login/login.module').then(l => l.LoginModule)
  },
  {
    path: 'propietario',
    loadChildren : () => import ('./modulos/propietario/propietario.module').then(p => p.PropietarioModule)
  },
  {
    path:'seccion',
    loadChildren: () => import('./modulos/seccion/seccion.module').then(s => s.SeccionModule)
  },
  {
    path:'transaccion',
    loadChildren:()=>import('./modulos/transaccion/transaccion.module').then(t => t.TransaccionModule)
  },
  {
    path: 'zona-social',
    loadChildren : () => import('./modulos/zona-social/zona-social.module') .then( z => z.ZonaSocialModule)
  },
  {
    path:"**",
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
