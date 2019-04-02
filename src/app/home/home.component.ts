import { Component, OnInit, Output } from '@angular/core';
// ICONOS recogidos con font-awesome.
import { faTint } from '@fortawesome/free-solid-svg-icons';
import { faFire } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faBolt } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faInfo } from '@fortawesome/free-solid-svg-icons';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
import {Pokemon, POKEMON} from '../home/pokemonObject';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // Iconos declarados con font-awesome.

  faTint = faTint;
  faFire = faFire;
  faStar = faStar;
  faBolt = faBolt;
  faHome = faHome;
  faInfo = faInfo;
  faUserFriends = faUserFriends;
  arrayPokemon = POKEMON;
 
  filterPost = '';
  url = 'http://localhost:3000/pokemon';
  

  // Numero de pokemon
  //items:number[] = new Array(30);
  //json-server --watch pokemon.json

  constructor(private http: HttpClient) { }
  verEstadistica: boolean;
  sortName: string;
  arraytot: Pokemon[];

  ngOnInit() {
    this.arraytot= this.arrayPokemon;

    this.getPokemonAll();
  }
   show(event):void{
    this.verEstadistica = event.nombre;
  }
  showSort(event):void{
    this.sortName = event.nombre;
    console.log("El event "+event.nombre)
    if(this.sortName === "Nom"){
      console.log("1")
      this.Nom();
    }else if(this.sortName === "Height"){
      console.log("2")
      this.Height();
    }else if(this.sortName === "Attack"){
      console.log("3")
      this.Attack();
    }
  }

  getPokemonAll() {
    this.arrayPokemon.length = 0;

    this.http.get<Pokemon[]>(this.url, {observe: 'response'})
      .subscribe((data) => this.procesar(data) );
  }
  getPokemonType(type: string) {
    console.log(this.arraytot.length)
    this.arrayPokemon = this.arraytot;
    alert("Be")
    this.arrayPokemon = this.arrayPokemon.filter(word => JSON.stringify(word.types).indexOf(type) !== -1);
    console.log(this.arrayPokemon)
    //this.http.get<Pokemon[]>(this.url, {observe: 'response'})
      //.subscribe((data) => this.getTypes(data,type) );
  }

 
  procesar(data: any ) {
    data.body.forEach(
      afegim => this.arrayPokemon.push({
    id: afegim['id'],
    name: afegim['name'],
    height: afegim['height'],
    weight: afegim['weight'],
    color: afegim['color'],
    sprite: afegim['sprite'],
    hp: afegim['hp'],
    attack: afegim['attack'],
    defense: afegim['defense'],
    speed: afegim['speed'],
    types: afegim['types'],
  }));
  }
  
  Nom(){

    this.arrayPokemon.sort(function (a, b) {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
  }
  Height(){

    this.arrayPokemon.sort(function (a, b) {
      if (a.height > b.height) {
        return 1;
      }
      if (a.height < b.height) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
  }
  Attack(){

    this.arrayPokemon.sort(function (a, b) {
      if (a.attack > b.attack) {
        return 1;
      }
      if (a.attack < b.attack) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
  }

}
