import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Pokemon } from '../home/pokemonObject';
import {HttpClient} from '@angular/common/http';
import { EditarComponent } from './editar/editar.component';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
  providers: [NgbModalConfig, NgbModal]

})
export class PokemonComponent implements OnInit {

  @Input() arrayPokemon: Pokemon[];
  @Input('verEstadistica') verEstadistica: boolean;
  @Input('filterPost') filterPost: string;
  @ViewChild(EditarComponent) modal: EditarComponent;

  constructor(private http: HttpClient,config: NgbModalConfig, private modalService: NgbModal) { 
    config.backdrop = 'static';
    config.keyboard = false;
  }
  open(content) {
    this.modalService.open(content);
  }

  ngOnInit() {
    this.verEstadistica = true;
  }

  deletePokemon(id: any){
    this.http.delete('http://localhost:3000/pokemon/'+id).subscribe((data) => this.eliminar(id) );
    alert(this.arrayPokemon.length);
  }

  eliminar(id: any){
    for (var [key, value] of Object.entries(this.arrayPokemon)) {
      if (id == value.id) {
        this.arrayPokemon.splice(Number(key),1);
      }
    }
  }

  show(id: number){
    this.modal.show(id);
  }
 
}
