import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../Services/user-service';
import {User} from '../../Models/User';
import {AppComponent} from '../../app.component';
import {PlayersListComponent} from '../players-list/players-list.component';

@Component({
  selector: 'app-player-page',
  templateUrl: './player-page.component.html',
  styleUrls: ['./player-page.component.scss']
})
export class PlayerPageComponent implements OnInit {
  userId: string;
  user: User = new User('','','','','','',null,'','');
  constructor(private activatedRoute: ActivatedRoute, private userService: UserService) {
    this.userId = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.userService.findUserById(this.userId).then((user : User) => {
      this.user = user;
    })
  }
  getUserPhoto(id){
    return  AppComponent.getPictureFromApi('user',id);
  }
}
