import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from './components/index/index.component';
import {AboutUsComponent} from './components/about-us/about-us.component';
import {LoginComponent} from './components/login/login.component';
import {PlayersListComponent} from './components/players-list/players-list.component';
import {SignUpComponent} from './components/sign-up/sign-up.component';
import {TournamentsListComponent} from './components/tournaments-list/tournaments-list.component';
import {NotFoundComponent} from './components/not-found/not-found.component';


const appRoutes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'players', component: PlayersListComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'tournaments', component: TournamentsListComponent},
  // {path: 'account/:id', component: AccountComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
