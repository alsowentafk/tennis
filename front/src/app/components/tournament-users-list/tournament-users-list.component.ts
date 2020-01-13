import { Component, OnInit } from '@angular/core';
import {UserService} from '../../Services/user-service';
import {User} from '../../Models/User';
import {AppComponent} from '../../app.component';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-tournament-users-list',
  templateUrl: './tournament-users-list.component.html',
  styleUrls: ['./tournament-users-list.component.scss']
})
export class TournamentUsersListComponent implements OnInit {
  tournamentId: string;
  playersList = [];
  searchString: string = '';
  p: number = 1;
  constructor(private userService: UserService, private activatedRoute: ActivatedRoute) {
    this.tournamentId = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.userService.findAllPlayersByTournament(this.tournamentId).then((userList:User[]) => {
      this.playersList = userList;
    })
  }
  getUserPhoto(id){
    return AppComponent.getPictureFromApi('user', id);
  }

}
