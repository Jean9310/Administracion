import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginModelo } from 'src/app/modelos/login.modelo';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  sesion : boolean  = false;
  subs : Subscription = new Subscription();
  constructor(
    private loginservice : LoginService,
    private route : Router
  ) { }

  ngOnInit(): void {
    console.log(`En SEsion ${this.sesion}`);
    this.subs = this.loginservice.getUsuariosEnSesion()
    .subscribe( (datos : LoginModelo ) => {
      this.sesion = datos.enSesion != null ? datos.enSesion: false;
      this.route.navigate(['/inicio'])
    });
  }
  // esta es para al terminar de logearse lo direccione a la parte de buscar administracion , veriicar iniciando sesion 

  
    cerrarSesion(){
      this.loginservice.eliminarSesiones();
      this.sesion = false;
      this.route.navigate(['/inicio'])
  
  }

}
