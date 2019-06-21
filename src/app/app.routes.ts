// 1- ingresamos las clases de los compontents
import { Routes, RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { InicioComponent } from './components/inicio/inicio.component';
import { EquiposComponent } from './components/equipos/equipos.component';
import { EquipoComponent } from './components/equipo/equipo.component';
import { CampeonatoslocalesComponent } from './components/campeonatoslocales/campeonatoslocales.component';
import { CompeonatolocalComponent } from './components/compeonatolocal/compeonatolocal.component';
import { CampeonatosintersComponent } from './components/campeonatosinters/campeonatosinters.component';
import { CampeonatointerComponent } from './components/campeonatointer/campeonatointer.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { SeleccionComponent } from './components/seleccion/seleccion.component';
// tslint:disable-next-line:variable-name
// rutas de nuestros componentes

const APP_ROUTES: Routes = [
    { path : 'inicio', component: InicioComponent },
    { path : 'equipos', component: EquiposComponent },
    { path : 'equipo/:id', component: EquipoComponent },
    { path: 'campeonatoslocales', component: CampeonatoslocalesComponent },
    { path: 'local/:idlocal', component: CompeonatolocalComponent },
    { path: 'campeonatosinter', component: CampeonatosintersComponent },
    { path : 'buscar/:termino', component: BuscadorComponent },
    { path: 'inter/:idinter', component: CampeonatointerComponent },
    { path: 'seleccion', component: SeleccionComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];

// app_routing es una expresion constante
// para exportar en app.modules
// tslint:disable-next-line:variable-name
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });
