import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CampeonatosLocales, Locales } from '../servicios/campeonatos.locales.service';
@Component({
  selector: 'app-compeonatolocal',
  templateUrl: './compeonatolocal.component.html'
})
export class CompeonatolocalComponent {

  local: any = {};
  campeonsuperliga: any = {};
  constructor(private activateRoute: ActivatedRoute, private _LOCALESSERVICE: CampeonatosLocales) {
    this.activateRoute.params.subscribe( params => {
      // tslint:disable-next-line:semicolon
      // tslint:disable-next-line:no-string-literal
      this.local = this._LOCALESSERVICE.getLocales( params['idlocal'] );
    });
  }



}
