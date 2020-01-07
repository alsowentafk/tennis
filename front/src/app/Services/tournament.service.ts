import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
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
    const endpoint = 'http://localhost:8080/api/tournament/getAllTournaments';
    return await this.httpClient.get<Tournament[]>(endpoint).toPromise();
  }
}
