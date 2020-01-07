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
    const endpoint = 'http://localhost:8080/api/user/registerNewUser';
    const formData: FormData = new FormData();
    formData.append('file', fileToUpload);
    formData.append('object', JSON.stringify(user));
    return await this.httpClient.post(endpoint, formData).toPromise();
  }

  async checkExistUserByEmail(email: string) {
    const endpoint = 'http://localhost:8080/api/user/checkUserExistByEmail';
    return await this.httpClient.get(endpoint, {params: {'email': email}}).toPromise();
  }

  async confirmAccount(token: string) {
    const endpoint = 'http://localhost:8080/api/user/confirm-account';
    return await this.httpClient.get(endpoint, {params: {'token': token}}).toPromise();
  }
  async sendCodeOneMore(userId: string) {
    const endpoint = 'http://localhost:8080/api/user/sendCodeOneMore';
    return await this.httpClient.post(endpoint, {},{params: {'userId': userId}}).toPromise();
  }

  async login(loginData: LoginDataDTO) {
    const endpoint = 'http://localhost:8080/api/user/login';
    return await this.httpClient.post<boolean>(endpoint, loginData).toPromise();
  }

  async findUserByEmail(email: string): Promise<User> {
    this.httpOptionsUser.params = new HttpParams().set('email', email);
    const endpoint = 'http://localhost:8080/api/user/getUser';
    return await this.httpClient.get<User>(endpoint, this.httpOptionsUser).toPromise();
  }
  async findUserById(id: number) {
    const endpoint = '/api/user/getUserById';
    return await this.httpClient.get(endpoint, {params: {'id': String(id)}}).toPromise();
  }

  async updateUser(user: User, fileToUpload: File) {
    if (fileToUpload != null) {
      const endpoint = 'http://localhost:8080/api/user/updateUserWithPhoto';
      const formData: FormData = new FormData();
      formData.append('file', fileToUpload);
      formData.append('object', JSON.stringify(user));
      this.httpClient
        .put(endpoint, formData).subscribe((val) => {
        console.log(val);
      });
    } else {
      const endpoint = 'http://localhost:8080/api/user/updateUserWithOutPhoto';
      this.httpClient
        .put(endpoint, user).subscribe((val) => {
        console.log(val);
      });
    }
    return false;
  }
}
