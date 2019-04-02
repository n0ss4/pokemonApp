import { Component, OnInit, Input } from '@angular/core';
import { waitForMap } from '@angular/router/src/utils/collection';
import { Pokemon } from '../home/pokemonObject';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  @Input() arrayPokemon: Pokemon[];
  @Input('verEstadistica') verEstadistica: boolean;
  @Input('filterPost') filterPost: string;
   constructor(private http: HttpClient) { }
    ngOnInit() {
      

    this.verEstadistica = true;
  
  }

 
  
  deletePokemon(id: any){
   
    this.http.delete('http://localhost:3000/pokemon/'+id).subscribe((data) => this.eliminar(id) );
   
    alert(this.arrayPokemon.length)
  }
  eliminar(id: any){
    for (var [key, value] of Object.entries(this.arrayPokemon)) {//hem de importar el array ja que si no ens donaa un conflicte, no podem utilitzar el del input

      if (id == value.id) {
        this.arrayPokemon.splice(Number(key),1);
      }
    }
  }
 
}
