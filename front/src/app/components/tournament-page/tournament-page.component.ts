import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Route, Router, RouterModule} from '@angular/router';
import {Tournament} from '../../Models/Tournament';
import {TournamentService} from '../../Services/tournament.service';
import {User} from '../../Models/User';
import {AppComponent} from '../../app.component';
import Swal from 'sweetalert2'
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-tournament-page',
  templateUrl: './tournament-page.component.html',
  styleUrls: ['./tournament-page.component.scss']
})
export class TournamentPageComponent implements OnInit {
  tournamentId: string;
  regulation = "https://docs.google.com/document/d/e/2PACX-1vSbgEzSRQlgC6_8uI6LNSdIpkCtabSIZdTT560n0pviZQ8WcAaPddYZ1gzyNVwksfKjXdlAaoMA3Om5U--iF2E/pub?embedded=true;"
  tournament: Tournament = new Tournament('','',new Date(),new Date(), new Date());
  constructor(private activatedRoute: ActivatedRoute, private tournamentService: TournamentService
              , private router: Router, private sanitizer: DomSanitizer) {
    this.tournamentId = this.activatedRoute.snapshot.paramMap.get('id');
  }
  getSanitizer(value){
    return this.sanitizer.bypassSecurityTrustResourceUrl(value);
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
