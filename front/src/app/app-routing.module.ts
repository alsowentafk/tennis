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
import {AdminPanelComponent} from './components/admin-panel/admin-panel.component';
import {AddTournamentComponent} from './components/admin-panel/add-tournament/add-tournament.component';
import {EditTournamentListComponent} from './components/admin-panel/edit-tournament-list/edit-tournament-list.component';
import {EditTournamentComponent} from './components/admin-panel/edit-tournament/edit-tournament.component';
import {EditUsersListComponent} from './components/admin-panel/edit-users-list/edit-users-list.component';
import {EditUserComponent} from './components/admin-panel/edit-user/edit-user.component';
import {EditRequestsListComponent} from './components/admin-panel/edit-requests-list/edit-requests-list.component';
import {EditRequestComponent} from './components/admin-panel/edit-request/edit-request.component';


const appRoutes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'players', component: PlayersListComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'tournaments', component: TournamentsListComponent},
  {path: 'tournaments/tournament/games/:id', component: GamesComponent},
  {path: 'players/player/:id', component: PlayerPageComponent},
  {path: 'tournaments/tournament/:id', component: TournamentPageComponent},
  {path: 'tournament/players/:id', component: TournamentUsersListComponent},
  {path: 'reg/:id', component: RegistrationOnTournamentComponent},
  {path: 'admin', component: AdminPanelComponent},
  {path: 'admin/addTournament', component: AddTournamentComponent},
  {path: 'admin/tournaments', component: EditTournamentListComponent},
  {path: 'admin/tournaments/edtTournament/:id', component: EditTournamentComponent},
  {path: 'admin/players', component: EditUsersListComponent},
  {path: 'admin/players/player/:id', component: EditUserComponent},
  {path: 'admin/requests', component: EditRequestsListComponent},
  {path: 'admin/requests/request/:id', component: EditRequestComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
