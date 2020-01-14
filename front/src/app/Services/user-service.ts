import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {User} from '../Models/User';
import {LoginDataDTO} from '../Models/LoginDataDTO';

@Injectable({
  providedIn: 'root'
})
export class UserService {

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
  async registerNewUser(user: User, fileToUpload: File) {
    const endpoint = '/api/user/registerNewUser';
    const formData: FormData = new FormData();
    formData.append('file', fileToUpload);
    formData.append('object', JSON.stringify(user));
    return await this.httpClient.post(endpoint, formData).toPromise();
  }

  async checkExistUserByEmail(email: string) {
    const endpoint = '/api/user/checkUserExistByEmail';
    return await this.httpClient.get(endpoint, {params: {'email': email}}).toPromise();
  }

  async confirmAccount(token: string) {
    const endpoint = '/api/user/confirm-account';
    return await this.httpClient.get(endpoint, {params: {'token': token}}).toPromise();
  }
  async sendCodeOneMore(userId: string) {
    const endpoint = '/api/user/sendCodeOneMore';
    return await this.httpClient.post(endpoint, {},{params: {'userId': userId}}).toPromise();
  }

  async login(loginData: LoginDataDTO) {
    const endpoint = '/api/user/login';
    return await this.httpClient.post<boolean>(endpoint, loginData).toPromise();
  }

  async findUserByEmail(email: string): Promise<User> {
    this.httpOptionsUser.params = new HttpParams().set('email', email);
    const endpoint = '/api/user/getUser';
    return await this.httpClient.get<User>(endpoint, this.httpOptionsUser).toPromise();
  }

  async updateUser(user: User, fileToUpload: File) {
    const endpoint = '/api/user/updateUser';
    let options =  this.httpOptionsUser;
    options.headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa('Rp29K#jpM-TgZ8BCm5Ln5hGu7Q69My^UF2uR8LPz:6n!MYwMjrb+$r6d#qC!z9pL2zgqH-4rJMQsK4Bs7')
    });
    const formData: FormData = new FormData();
    formData.append('file', fileToUpload);
    formData.append('object', JSON.stringify(user));
    return await this.httpClient.put(endpoint, formData, options).toPromise();
  }
  async findUserById(id: string): Promise<User> {
    const endpoint = '/api/user/getUserById';
    return await this.httpClient.get<User>(endpoint, {params: {'id': id}}).toPromise();
  }
  async getUserPhoto(endpoint) {
    return await this.httpClient.get(endpoint,{responseType: 'blob'}).toPromise();
  }
  async findAllPlayersByTournament(id: string): Promise<User[]> {
    this.httpOptionsUser.params = new HttpParams().set('id', id);
    const endpoint = '/api/tournamentUser/findAllPlayersFromTournament';
    return await this.httpClient.get<User[]>(endpoint, this.httpOptionsUser).toPromise();
  }
  async findAllPlayers(): Promise<User[]> {
    const endpoint = '/api/tournamentUser/findAllPlayers';
    return await this.httpClient.get<User[]>(endpoint).toPromise();
  }
  async findAll(): Promise<User[]> {
    const endpoint = '/api/user/findAll';
    return await this.httpClient.get<User[]>(endpoint, this.httpOptionsAdmin).toPromise();
  }
  async delete(id: string){
    const endpoint = '/api/user/delete';
    let options = this.httpOptionsAdmin;
    options.params = new HttpParams().set('id', id);
    return await this.httpClient.delete(endpoint, options).toPromise();
  }
}
