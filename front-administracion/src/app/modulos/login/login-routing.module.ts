import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CambiarClaveComponent } from './cambiar-clave/cambiar-clave.component';
import { CerrarSesionComponent } from './cerrar-sesion/cerrar-sesion.component';
import { CrearClaveComponent } from './crear-clave/crear-clave.component';
import { RecuperarClaveComponent } from './recuperar-clave/recuperar-clave.component';

const routes: Routes = [
  {
    path: "cambiar-clave",
    component: CambiarClaveComponent
  ,
},
{
  path: "recuperar-clave",
  component: RecuperarClaveComponent
},
{
  path:"crear-clave",
  component: CrearClaveComponent
},
{
  path:"cerrar",
  component:CerrarSesionComponent
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
