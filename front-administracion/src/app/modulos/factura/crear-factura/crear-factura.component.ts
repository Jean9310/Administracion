import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PropietarioModelo } from 'src/app/modelos/propietarios.modelo';
import { FacturaService } from 'src/app/servicios/factura.service';
import { PropietarioService } from 'src/app/servicios/propietario.service';
import { FacturaModelo } from 'src/app/modelos/factura.modelo';


@Component({
  selector: 'app-crear-factura',
  templateUrl: './crear-factura.component.html',
  styleUrls: ['./crear-factura.component.css']
})
export class CrearFacturaComponent implements OnInit {
  listadoPropietario: PropietarioModelo[]=[];

  formFactura : FormGroup = this.formBuilder.group({
    // 'id' : [ '',[Validators.required]],
    'num_factura' : [ '',[Validators.required]],
    // 'item' : [ '',[Validators.required]],
    // 'total' : [ '',[Validators.required]],
    // 'conjuntoId' : [ '',[Validators.required]],
    // 'administradorId' : [ '',[Validators.required]],
    'propietario' : [ '',[Validators.required]],
    
  });

  constructor(
   private propietarioService : PropietarioService,
   private facturaService : FacturaService,
   private formBuilder : FormBuilder,
   private route : Router

  ) {
    this.getPropietarios();
   }

  ngOnInit(): void {
  }

  guardarFactura(){
    let fac : FacturaModelo = {
      // id : this.formFactura.controls['id'].value,
      num_factura : this.formFactura.controls['num_factura'].value,
      // total : this.formFactura.controls['total'].value,
      propietarioId : this.formFactura.controls['propietario'].value
    }
    this.facturaService.crearFactura(fac)
      .subscribe({
        next: (factura) => {
          alert('Enviando factura....')
          this.route.navigate(['/factura/buscar-factura']);
        },
        error: (error) => console.log("error al guardar la factura")
      });

  
  };
  
  getPropietarios(){
    this.propietarioService.getPropietario()
      .subscribe({
        next: (propietario) => {
          this.listadoPropietario = propietario;
        },
        error: (error) => console.log("Error al consultar los propietarios")
      })
  }


}
