import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Route, Router, RouterModule} from '@angular/router';
import {Tournament} from '../../Models/Tournament';
import {TournamentService} from '../../Services/tournament.service';
import {User} from '../../Models/User';
import {AppComponent} from '../../app.component';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-tournament-page',
  templateUrl: './tournament-page.component.html',
  styleUrls: ['./tournament-page.component.scss']
})
export class TournamentPageComponent implements OnInit {
  tournamentId: string;
  tournament: Tournament = new Tournament('','',new Date(),new Date(), new Date());
  constructor(private activatedRoute: ActivatedRoute, private tournamentService: TournamentService, private router: Router) {
    this.tournamentId = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.tournamentService.findTournamentById(this.tournamentId).then((tournament: Tournament) => {
      this.tournament = tournament;
    })
  }

  openPlayersFromCurrentTournament() {
    this.router.navigateByUrl('tournament/players/'+this.tournamentId).then();
  }

  registrationOnCurrentTournament() {
    if(sessionStorage.getItem(AppComponent.token) === null){
      Swal.fire({
        icon: 'warning',
        title: 'Щоб зареєструватись на турнір ввійдіть у свій аккаунт або зареєструйтесь',
        target: 'app-tournament-page',
        position: 'top-left'
      });
      return;
    }
      this.router.navigateByUrl('/reg/'+this.tournamentId).then();
  }
  getNow(){
    return new Date();
  }
}
