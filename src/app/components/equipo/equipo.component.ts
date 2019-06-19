import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EquiposService } from '../servicios/equipos.service';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html'
})
export class EquipoComponent {
  mostrarhistoria = false;
  mostrarcamiseta = false;
  mostrarestadio = false;
  mostrarapodo = false;
  mostraridolo = false;

  equipo: any = {};

  constructor(private activateRoute: ActivatedRoute,
              // tslint:disable-next-line:variable-name
              private _equiposService: EquiposService) {
this.activateRoute.params.subscribe( params => {
  // tslint:disable-next-line:semicolon
  // tslint:disable-next-line:no-string-literal
  this.equipo = this._equiposService.getEquipo( params['id'] );
});
              }



}
