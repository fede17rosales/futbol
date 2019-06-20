import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { EquiposService, Equipo} from '../servicios/equipos.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {
  equipos: any [] = [];
  termino: string;
  constructor(private ROUTER: Router,
              private activatedRoute: ActivatedRoute,
              private _EQUIPOSERVICE: EquiposService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.termino = params.termino;
      this.equipos = this._EQUIPOSERVICE.buscarEquipos( params.termino);
      console.log(this.equipos);
    });

    this.equipos = this._EQUIPOSERVICE.getEquipos();
  }

  // permite movernos hacia la pagina del equipo
  verEquipo( idx: number ) {
    this.ROUTER.navigate( ['/equipo', idx] );
  }

}
