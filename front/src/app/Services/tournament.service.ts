import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Tournament} from '../Models/Tournament';

@Injectable({
  providedIn: 'root'
})
export class TournamentService {

  constructor(private httpClient: HttpClient) { }
  httpOptionsUser = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Basic ' + btoa('zz%bK@7WAmKCF8Dp:w@&zR5-U_amyqb9y')
    }),
    params: null
  };
  httpOptionsAdmin = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Basic ' + btoa('Rp29K#jpM-TgZ8BCm5Ln5hGu7Q69My^UF2uR8LPz:6n!MYwMjrb+$r6d#qC!z9pL2zgqH-4rJMQsK4Bs7')
    }),
    params: null
  };
   async getAllTournaments(): Promise<Tournament[]> {
    const endpoint = '/api/tournament/getAllTournaments';
    return await this.httpClient.get<Tournament[]>(endpoint).toPromise();
  }
  async findTournamentById(id: string): Promise<Tournament>{
    const endpoint = '/api/tournament/getTournamentById';
    return await this.httpClient.get<Tournament>(endpoint,{params: {'id': String(id)}}).toPromise();
  }
  async addTournament(tournament: Tournament): Promise<Tournament>{
    const endpoint = '/api/tournament/addTournament';
    return await this.httpClient.post<Tournament>(endpoint, tournament, this.httpOptionsAdmin).toPromise();
  }

  async updateTournament(tournament: Tournament): Promise<Tournament>{
    const endpoint = '/api/tournament/updateTournament';
    return await this.httpClient.put<Tournament>(endpoint, tournament, this.httpOptionsAdmin).toPromise();
  }

  async delete(id: string){
    const endpoint = '/api/tournament/delete';
    let options = this.httpOptionsAdmin;
    options.params = new HttpParams().set('id', id);
    return await this.httpClient.delete(endpoint, options).toPromise();
  }
}
