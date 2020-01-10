import { Component, OnInit } from '@angular/core';
import {User} from '../../Models/User';
import {UserService} from '../../Services/user-service';
import {AppComponent} from '../../app.component';

@Component({
  selector: 'app-player-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.scss']
})
export class PlayersListComponent implements OnInit {
  playersList = [];
  p: number = 1;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.findAllPlayers().then((userList:User[]) => {
       this.playersList = userList;
    })
  }
  getUserPhoto(id){
    return AppComponent.getPictureFromApi('user', id);
  }
}
