import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Internacionales, CampeonatosInternacionales } from '../servicios/campeonatointer.service';

@Component({
  selector: 'app-campeonatointer',
  templateUrl: './campeonatointer.component.html'
})
export class CampeonatointerComponent {
  inter: any = {};

  constructor(private activateRoute: ActivatedRoute,
              private _INTERSSERVICE: CampeonatosInternacionales ) {
                this.activateRoute.params.subscribe( params => {
                // tslint:disable-next-line:semicolon
                // tslint:disable-next-line:no-string-literal
                  this.inter = this._INTERSSERVICE.getInters( params ['idinter']);
                });
               }


}
