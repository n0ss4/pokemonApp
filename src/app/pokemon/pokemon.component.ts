import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  // Numero de pokemon
  items:number[] = new Array(30);

  constructor() { }

  ngOnInit() {
  }

}
