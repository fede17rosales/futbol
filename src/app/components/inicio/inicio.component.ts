import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html'
})
export class InicioComponent implements OnInit {
  anio: number;
  constructor() {
    this.anio = new Date().getFullYear();
  }

  private frases: Frases  [] = [
    {
          uno: 'assets/img/frase1.png',
          dos: 'assets/img/frase2.png',
          tres: 'assets/img/frase3.png',
          cuatro: 'assets/img/frase4.png',
          cinco: 'assets/img/frase5.png',
          seis: 'assets/img/frase6.png'
    }
];
getFrases(): Frases[] {
  return this.frases;
}

  ngOnInit() {
  }

}


export interface Frases {
  uno: string;
  dos: string;
  tres: string;
  cuatro: string;
  cinco: string;
  seis: string;

  }

