import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CampeonatosLocales, Locales } from '../servicios/campeonatos.locales.service';

@Component({
  selector: 'app-campeonatoslocales',
  templateUrl: './campeonatoslocales.component.html'
})
export class CampeonatoslocalesComponent implements OnInit {
  mostrar = false;
  mostrarcampeones = false;
  mostrargoleadores = false;
  mostrardt = false;
  locales: Locales [] = [];
  constructor(private ROUTER: Router,
              private _LOCALESSERVICE: CampeonatosLocales) { }

  ngOnInit() {
    this.locales = this._LOCALESSERVICE.getLocal();
  }


   // permite movernos hacia la pagina del local
   verLocal( idx: number ) {
    this.ROUTER.navigate( ['/local', idx] );
  }


}
