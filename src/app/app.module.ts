import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Rutas
import { APP_ROUTING } from './app.routes';
// servicios
import { EquiposService } from './components/servicios/equipos.service';
import { CampeonatosLocales } from './components/servicios/campeonatos.locales.service';
import { CampeonatosInternacionales } from './components/servicios/campeonatointer.service';

// componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { EquiposComponent } from './components/equipos/equipos.component';
import { EquipoComponent } from './components/equipo/equipo.component';
import { CampeonatoslocalesComponent } from './components/campeonatoslocales/campeonatoslocales.component';
import { CompeonatolocalComponent } from './components/compeonatolocal/compeonatolocal.component';
import { CampeonatosintersComponent } from './components/campeonatosinters/campeonatosinters.component';
import { CampeonatointerComponent } from './components/campeonatointer/campeonatointer.component';
import { BuscadorComponent } from './components/buscador/buscador.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    EquiposComponent,
    EquipoComponent,
    CampeonatoslocalesComponent,
    CompeonatolocalComponent,
    CampeonatosintersComponent,
    CampeonatointerComponent,
    BuscadorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    APP_ROUTING
  ],
  providers: [
    EquiposService,
    CampeonatosLocales,
    CampeonatosInternacionales
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
