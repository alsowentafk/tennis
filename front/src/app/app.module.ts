import {BrowserModule, DomSanitizer} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './components/login/login.component';
import { PlayersListComponent } from './components/players-list/players-list.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { TournamentsListComponent } from './components/tournaments-list/tournaments-list.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CarouselComponent } from './components/index/carusel/carousel.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule, MatSelectModule} from '@angular/material';
import {NgxPaginationModule} from 'ngx-pagination';
import { GamesComponent } from './components/games/games.component';
import { PlayerPageComponent } from './components/player-page/player-page.component';
import { TournamentPageComponent } from './components/tournament-page/tournament-page.component';
import { RegistrationOnTournamentComponent } from './components/registration-on-tournament/registration-on-tournament.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import {registerLocaleData} from '@angular/common';
import localeUa from '@angular/common/locales/ru';
import { TournamentUsersListComponent } from './components/tournament-users-list/tournament-users-list.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { AddTournamentComponent } from './components/admin-panel/add-tournament/add-tournament.component';
import { EditTournamentListComponent } from './components/admin-panel/edit-tournament-list/edit-tournament-list.component';
import {TournamentSearchFilterPipe} from './Pipes/TournamentSearchFilterPipe';
import { EditTournamentComponent } from './components/admin-panel/edit-tournament/edit-tournament.component';
import { EditUsersListComponent } from './components/admin-panel/edit-users-list/edit-users-list.component';
import {PlayerSearchFilterPipe} from './Pipes/PlayerSearchFilterPipe';
import { EditUserComponent } from './components/admin-panel/edit-user/edit-user.component';
import { EditRequestsListComponent } from './components/admin-panel/edit-requests-list/edit-requests-list.component';
import { EditRequestComponent } from './components/admin-panel/edit-request/edit-request.component';
import {RequestSearchFilterPipe} from './Pipes/RequestSearchFilterPipe';

registerLocaleData(localeUa, 'ua');
@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    IndexComponent,
    LoginComponent,
    PlayersListComponent,
    SignUpComponent,
    TournamentsListComponent,
    NavComponent,
    FooterComponent,
    NotFoundComponent,
    CarouselComponent,
    GamesComponent,
    PlayerPageComponent,
    TournamentPageComponent,
    RegistrationOnTournamentComponent,
    TournamentUsersListComponent,
    AdminPanelComponent,
    AddTournamentComponent,
    EditTournamentListComponent,
    TournamentSearchFilterPipe,
    EditTournamentComponent,
    EditUsersListComponent,
    PlayerSearchFilterPipe,
    EditUserComponent,
    EditRequestsListComponent,
    EditRequestComponent,
    RequestSearchFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    NgxPaginationModule,
    SweetAlert2Module.forRoot(),
  ],
  providers: [FormBuilder, {provide: LOCALE_ID, useValue: 'ua'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
