import { Component, OnInit } from '@angular/core';
import {TournamentService} from '../../Services/tournament.service';
import {Tournament} from '../../Models/Tournament';

@Component({
  selector: 'app-tournaments-list',
  templateUrl: './tournaments-list.component.html',
  styleUrls: ['./tournaments-list.component.scss']
})
export class TournamentsListComponent implements OnInit {
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
