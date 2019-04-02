import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from 'src/app/home/home.component';
import {HttpClient} from '@angular/common/http';
import {Pokemon, POKEMON} from '../../home/pokemonObject';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class EditarComponent implements OnInit {
  
  @ViewChild('content') public content:NgbModal;
  title = "Sin nombre";
  HomeComponent: HomeComponent;
  arrayPokemon = POKEMON;
  pokemon = [];
  url = 'http://localhost:3000/pokemon';

  constructor(config: NgbModalConfig, private modalService: NgbModal, private http: HttpClient) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }


  getPokemon(id: number){
    this.http.get<Pokemon[]>(this.url+'/'+id, {observe: 'response'})
    .subscribe((data) => this.pokemon.push(
      data.body['id'],
      data.body['name'],
      data.body['height'],
      data.body['weight'], 
      data.body['color'], 
      data.body['sprite'],
      data.body['hp'], 
      data.body['attack'], 
      data.body['defense'], 
      data.body['speed'], 
      data.body['types'])
      );
  }

  async show(id: number) {
    await this.getPokemon(id);
    var self = this;
    setTimeout(function(){
        self.mostrar(self.pokemon);
    },500);   
  }

  mostrar(datos){
    this.title = datos[1];
    this.modalService.open(this.content);
  }

  close(){
    this.modalService.dismissAll();
    this.pokemon.splice(0);
  }

  ngOnInit() {
  }

}
