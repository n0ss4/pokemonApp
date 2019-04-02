import { BrowserModule } from '@angular/platform-browser';
import { NgModule, } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FiltrosComponent } from './filtros/filtros.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { EditarComponent } from './pokemon/editar/editar.component';
import { EliminarComponent } from './pokemon/eliminar/eliminar.component';
import { FilterPipe } from './filter/filter.pipe';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { SortPipe } from './sort/sort.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FiltrosComponent,
    PokemonComponent,
    EditarComponent,
    EliminarComponent,
    FilterPipe,
    SortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
