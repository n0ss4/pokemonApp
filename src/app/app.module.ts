import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FiltrosComponent } from './filtros/filtros.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { EditarComponent } from './pokemon/editar/editar.component';
import { EliminarComponent } from './pokemon/eliminar/eliminar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FiltrosComponent,
    PokemonComponent,
    EditarComponent,
    EliminarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
