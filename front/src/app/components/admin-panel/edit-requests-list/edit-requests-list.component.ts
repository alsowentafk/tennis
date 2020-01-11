import { Component, OnInit } from '@angular/core';
import {Tournament} from '../../../Models/Tournament';
import {TournamentService} from '../../../Services/tournament.service';
import {TournamentUser} from '../../../Models/TournamentUser';
import {TournamentUserService} from '../../../Services/tournament-user-service';

@Component({
  selector: 'app-edit-requests-list',
  templateUrl: './edit-requests-list.component.html',
  styleUrls: ['./edit-requests-list.component.scss']
})
export class EditRequestsListComponent implements OnInit {
  requestList: TournamentUser[] = [];
  searchRequestString = '';
  p: number = 1;
  constructor(private tournamentUserService: TournamentUserService) { }

  ngOnInit() {
    this.tournamentUserService.getAll().then((tournamentUserList: TournamentUser[])=>{
      this.requestList = tournamentUserList;
    })
  }

}
