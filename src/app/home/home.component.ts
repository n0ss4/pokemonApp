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
  };
  
  show(event):void{
    this.verEstadistica = event.nombre;
  };
  
  showSort(event):void{
    this.sortName = event.nombre;
    if(this.sortName === "Nom"){
      this.nom();
    }else if(this.sortName === "Height"){
      this.height();
    }else if(this.sortName === "Attack"){
      this.attack();
    };
  };
  
  showReverse(event):void{
    console.log(event.nombre, this.sortName);
    if(event.nombre && this.sortName=== "Nom"){
      this.nomReverse();
    }else if (event.nombre===false && this.sortName=== "Nom"){
      this.nom();
    }else if (event.nombre && this.sortName=== "Height"){
      this.heightReverse();
    }else if (event.nombre===false && this.sortName=== "Height"){
      this.height();
    }else if (event.nombre && this.sortName=== "Attack"){
      this.attackReverse();
    }else if (event.nombre==false && this.sortName=== "Attack"){
      this.attack();
    }else if (event.nombre && this.sortName=== "Tria una opció:"){
      this.nomReverse();
    }else{
      this.nom();
    };
  };
  
  getPokemonAll() {
    this.arrayPokemon.length = 0;
    this.http.get<Pokemon[]>(this.url, {observe: 'response'})
      .subscribe((data) => this.procesar(data));
  };
  
  getPokemonType(type: string) {
    this.arrayPokemon = this.arraytot;
    this.arrayPokemon = this.arrayPokemon.filter(word => JSON.stringify(word.types).indexOf(type) !== -1);
  };
  
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
  };
  
  nom(){
    this.arrayPokemon.sort(function (a, b) {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });
  };
  
  height(){
    this.arrayPokemon.sort(function (a, b) {
      if (a.height > b.height) {
        return 1;
      }
      if (a.height < b.height) {
        return -1;
      }
      return 0;
    });
  };
  
  attack(){
    this.arrayPokemon.sort(function (a, b) {
      if (a.attack > b.attack) {
        return 1;
      }
      if (a.attack < b.attack) {
        return -1;
      }
      return 0;
    });
  };
  
  nomReverse(){
    this.arrayPokemon.sort(function (a, b) {
      if (a.name < b.name) {
        return 1;
      }
      if (a.name > b.name) {
        return -1;
      }
      return 0;
    });
  };
  
  heightReverse(){
    this.arrayPokemon.sort(function (a, b) {
      if (a.height < b.height) {
        return 1;
      }
      if (a.height > b.height) {
        return -1;
      }
      return 0;
    });
  };
  
  attackReverse(){
    this.arrayPokemon.sort(function (a, b) {
      if (a.attack < b.attack) {
        return 1;
      }
      if (a.attack > b.attack) {
        return -1;
      }
      return 0;
    });
  };
}
