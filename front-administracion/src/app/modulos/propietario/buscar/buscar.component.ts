import { Component, OnInit } from '@angular/core';
import { PropietarioModelo } from 'src/app/modelos/propietarios.modelo';

import { PropietarioService } from 'src/app/servicios/propietario.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  listadoPropietario: PropietarioModelo[]=[];
  constructor(
    private propietarioService: PropietarioService
  ) { 
    this.getListaPropietarios();
  }

  ngOnInit(): void {
  }



  getListaPropietarios(){
    this.propietarioService.getPropietario()
      .subscribe((propietario: PropietarioModelo[])=>{
        this.listadoPropietario= propietario;

      });

  }



}