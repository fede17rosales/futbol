import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Internacionales, CampeonatosInternacionales } from '../servicios/campeonatointer.service';

@Component({
  selector: 'app-campeonatosinters',
  templateUrl: './campeonatosinters.component.html',
})
export class CampeonatosintersComponent implements OnInit {
  inters: Internacionales [] = [];
  constructor(private ROUTER: Router,
              private _INTERSSERVICE: CampeonatosInternacionales ) { }

  ngOnInit() {

      this.inters = this._INTERSSERVICE.getInter();
  }


  // permite movernos hacia la pagina del local
  verInter( idx: number ) {
    this.ROUTER.navigate( ['/inter', idx] );
  }
}
