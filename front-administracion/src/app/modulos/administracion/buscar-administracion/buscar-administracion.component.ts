import { Component, OnInit } from '@angular/core';
import { AdministracionModelo } from 'src/app/modelos/administracion.modelo';
import { AdministracionService } from 'src/app/servicios/administracion.service';

@Component({
  selector: 'app-buscar-administracion',
  templateUrl: './buscar-administracion.component.html',
  styleUrls: ['./buscar-administracion.component.css']
})
export class BuscarAdministracionComponent implements OnInit {
  listadoAdministracion : AdministracionModelo[] = [];
  constructor(
    private administracionService : AdministracionService
  ) {
    this.getListadoDeAdministradores();
   }

  ngOnInit(): void {
  }

  getListadoDeAdministradores(){
    this.administracionService.getAdministrador()
    .subscribe((administracion : AdministracionModelo[] ) => {
      this.listadoAdministracion = administracion;
    });
  }
}
