import { Component, OnInit } from '@angular/core';
// ICONOS recogidos con font-awesome.
import { faTint } from '@fortawesome/free-solid-svg-icons';
import { faFire } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faBolt } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faInfo } from '@fortawesome/free-solid-svg-icons';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';

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

  constructor() { }

  ngOnInit() {
  }

}
