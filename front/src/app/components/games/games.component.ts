import { Component, OnInit } from '@angular/core';
import {TournamentUser} from '../../Models/TournamentUser';
import {TournamentService} from '../../Services/tournament.service';
import {ActivatedRoute} from '@angular/router';
import {Tournament} from '../../Models/Tournament';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
  tournamentId: string;
  tournament: Tournament = new Tournament('','',new Date(),new Date(), new Date());
  constructor(private tournamentService: TournamentService, private activatedRoute: ActivatedRoute) {
    this.tournamentId = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.tournamentService.findTournamentById(this.tournamentId).then((tournament: Tournament) => {
      this.tournament = tournament;
      console.log(tournament.results);
    })
  }

}
