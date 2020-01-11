import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {User} from '../Models/User';
import {TournamentUser} from '../Models/TournamentUser';
import {Tournament} from '../Models/Tournament';

@Injectable({
  providedIn: 'root'
})
export class TournamentUserService {

  constructor(private httpClient: HttpClient) {
  }
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
  async regUserOnTournament(user_id: string, tournament_id: string, tournamentUser: TournamentUser
                            , fileBirthday: File, filePay: File): Promise<TournamentUser> {
    const endpoint = 'http://localhost:8080/api/tournamentUser/regUserOnTournament';
    let options = this.httpOptionsUser;
    options.params = new HttpParams().set('user_id', user_id).set('tournament_id', tournament_id);
    options.headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa('Rp29K#jpM-TgZ8BCm5Ln5hGu7Q69My^UF2uR8LPz:6n!MYwMjrb+$r6d#qC!z9pL2zgqH-4rJMQsK4Bs7')
    });
    const formData: FormData = new FormData();
    formData.append('file1', fileBirthday);
    formData.append('file2', filePay);
    formData.append('object', JSON.stringify(tournamentUser));
    return await this.httpClient.post<TournamentUser>(endpoint, formData, this.httpOptionsUser).toPromise();
  }
  async getAll(): Promise<TournamentUser[]>{
    const endpoint = 'http://localhost:8080/api/tournamentUser/getAll';
    return await this.httpClient.get<TournamentUser[]>(endpoint, this.httpOptionsAdmin).toPromise();
  }
  async getById(id: string): Promise<TournamentUser>{
    const endpoint = 'http://localhost:8080/api/tournamentUser/getRequestById';
    let options = this.httpOptionsAdmin;
    options.params = new HttpParams().set('id', id);
    return await this.httpClient.get<TournamentUser>(endpoint, options).toPromise();
  }
  async confirm(id: string){
    const endpoint = 'http://localhost:8080/api/tournamentUser/confirm';
    let options = this.httpOptionsAdmin;
    options.params = new HttpParams().set('id', id);
    return await this.httpClient.put<TournamentUser>(endpoint, {}, options).toPromise();
  }

  async delete(id: string){
    const endpoint = 'http://localhost:8080/api/tournamentUser/delete';
    let options = this.httpOptionsAdmin;
    options.params = new HttpParams().set('id', id);
    return await this.httpClient.delete(endpoint, options).toPromise();
  }
}
