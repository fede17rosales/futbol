import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Seleccion, SeleccionArg } from '../servicios/seleccion.service';

@Component({
  selector: 'app-seleccion',
  templateUrl: './seleccion.component.html'
})
export class SeleccionComponent implements OnInit {

  mostrarcampeonesm = false;
  mostrarpresencias = false;
  mostrargoleadores = false;
  mostraraportes = false;
  mostrarjugnotables = false;

  selectarg: SeleccionArg [] = [];
  constructor(private activateRoute: ActivatedRoute,
              private SELECTSERVICE: Seleccion) { }

  ngOnInit() {
    this.selectarg =  this.SELECTSERVICE.getSeleccion();
  }

}
