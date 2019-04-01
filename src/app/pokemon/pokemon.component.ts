import { Component, OnInit, Input } from '@angular/core';
import { waitForMap } from '@angular/router/src/utils/collection';
import { Pokemon } from '../home/pokemonObject';


@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  @Input() arrayPokemon: Pokemon[];
  @Input('verEstadistica') verEstadistica: boolean;
  @Input('filterPost') filterPost: string;
   constructor() { }
    ngOnInit() {
    this.verEstadistica = true;
  
  }
 
}
