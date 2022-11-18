import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ZonaSocialRoutingModule } from './zona-social-routing.module';
import { BuscarZonaSocialComponent } from './buscar-zona-social/buscar-zona-social.component';



@NgModule({
  declarations: [
    BuscarZonaSocialComponent
  ],
  imports: [
    CommonModule,
    ZonaSocialRoutingModule
  ]
})
export class ZonaSocialModule { }
