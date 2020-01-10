import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from './components/index/index.component';
import {AboutUsComponent} from './components/about-us/about-us.component';
import {LoginComponent} from './components/login/login.component';
import {PlayersListComponent} from './components/players-list/players-list.component';
import {SignUpComponent} from './components/sign-up/sign-up.component';
import {TournamentsListComponent} from './components/tournaments-list/tournaments-list.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {GamesComponent} from './components/games/games.component';
import {PlayerPageComponent} from './components/player-page/player-page.component';
import {TournamentPageComponent} from './components/tournament-page/tournament-page.component';
import {RegistrationOnTournamentComponent} from './components/registration-on-tournament/registration-on-tournament.component';
import {TournamentUsersListComponent} from './components/tournament-users-list/tournament-users-list.component';


const appRoutes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'players', component: PlayersListComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'tournaments', component: TournamentsListComponent},
  {path: 'games', component: GamesComponent},
  {path: 'players/player/:id', component: PlayerPageComponent},
  {path: 'tournaments/tournament/:id', component: TournamentPageComponent},
  {path: 'tournament/players/:id', component: TournamentUsersListComponent},
  {path: 'reg/:id', component: RegistrationOnTournamentComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
