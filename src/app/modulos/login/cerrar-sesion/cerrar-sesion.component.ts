import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-cerrar-sesion',
  templateUrl: './cerrar-sesion.component.html',
  styleUrls: ['./cerrar-sesion.component.css']
})
export class CerrarSesionComponent implements OnInit {

  constructor(
    private loginService : LoginService,
    private route : Router
  ) { }

  ngOnInit(): void {
    this.loginService.eliminarSesiones();
    this.route.navigate(['/inicio'])
  }

}
