import { Component, OnInit } from '@angular/core';
import {Tournament} from '../../../Models/Tournament';
import {TournamentService} from '../../../Services/tournament.service';

@Component({
  selector: 'app-edit-tournament-list',
  templateUrl: './edit-tournament-list.component.html',
  styleUrls: ['./edit-tournament-list.component.scss']
})
export class EditTournamentListComponent implements OnInit {
  tournamentsList: Tournament[] = [];
  searchTournamentString = '';
  p: number = 1;
  constructor(private tournamentService: TournamentService) { }

  ngOnInit() {
    this.tournamentService.getAllTournaments().then((tournamentsList: Tournament[])=>{
      this.tournamentsList = tournamentsList;
    })
  }
}
