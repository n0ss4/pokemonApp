import { Component, OnInit, Output,EventEmitter,ViewChild,ElementRef,Inject,Renderer2  } from '@angular/core';
// ICONOS recogidos con font-awesome.
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.css']
})
export class FiltrosComponent implements OnInit {

  // Iconos declarados con font-awesome.
  faExchangeAlt = faExchangeAlt;
  nombre: boolean;
  selectedOption: string;
  reversebol: boolean;
  @Output() verEstadistica= new EventEmitter();
  @Output() result= new EventEmitter();
  @Output() reverse= new EventEmitter();

  constructor() {
  this.nombre = true;
  this.reversebol= false;
   }

  lanzar(event){
    if(this.nombre ){
      this.nombre = false;
    }else{
      this.nombre = true;
    };
    this.verEstadistica.emit({nombre: this.nombre});
  };
 
  triar(nom: string){
    if(this.reversebol ){
      this.reversebol = false;
    }else{
      this.reversebol = true;
    };
    console.log(this.selectedOption)
    this.result.emit({nombre: this.selectedOption})
  };

  sendReverse(event){
    if(this.reversebol ){
      this.reversebol = false;
    }else{
      this.reversebol = true;
    };
    this.reverse.emit({nombre: this.reversebol});
  };

  ngOnInit() {
  }
}
