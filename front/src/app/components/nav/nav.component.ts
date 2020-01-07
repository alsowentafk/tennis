import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../../app.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  storage = sessionStorage;
  token = AppComponent.token;
  constructor() { }

  ngOnInit() {
  }

  logOut() {
    sessionStorage.removeItem(this.token);
  }
  checkIfUserAdmin(){
    return atob(sessionStorage.getItem(this.token)) === AppComponent.admin.key;
  }
}
