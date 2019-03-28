import { Component, OnInit } from '@angular/core';
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

  constructor() { }

  ngOnInit() {
  }

}
