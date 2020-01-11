import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../Services/user-service';
import {User} from '../../../Models/User';
import {AppComponent} from '../../../app.component';

@Component({
  selector: 'app-edit-users-list',
  templateUrl: './edit-users-list.component.html',
  styleUrls: ['./edit-users-list.component.scss']
})
export class EditUsersListComponent implements OnInit {

  playersList = [];
  p: number = 1;
  searchString = '';
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.findAll().then((userList:User[]) => {
      this.playersList = userList;
    })
  }
  getUserPhoto(id){
    return AppComponent.getPictureFromApi('user', id);
  }

}
