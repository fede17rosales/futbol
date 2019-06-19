import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EquiposService, Equipo } from '../servicios/equipos.service';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html'
})
export class EquiposComponent implements OnInit {

  // equipos es una variable local de EquiposComponent
  equipos: Equipo [] = [];
  constructor( private ROUTER: Router,
               private _EQUIPOSSERVICE: EquiposService) {
              }

  ngOnInit() {
    // declaro la variable equipos y la igualo llamando a la funcion getequipos
  this.equipos = this._EQUIPOSSERVICE.getEquipos();
  }

  // permite movernos hacia la pagina del equipo
  verEquipo( idx: number ) {
    this.ROUTER.navigate( ['/equipo', idx] );
  }

}
