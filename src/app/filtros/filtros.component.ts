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

  @Output() verEstadistica= new EventEmitter();
  @Output() result= new EventEmitter();

  selectedOption = "default";
  

  constructor() {
    this.nombre = true;
   }
  lanzar(event){
    if(this.nombre ){
      this.nombre = false;
    }else{
      this.nombre = true
    }
    this.verEstadistica.emit({nombre: this.nombre});
  }
  sendSort(event) {
    console.log(this.selectedOption)
  }
  klk(){
    this.result.emit({nombre: this.selectedOption})
  }

  ngOnInit() {

  }
  


}
