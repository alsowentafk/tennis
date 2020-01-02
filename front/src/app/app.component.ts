import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title;
  constructor(private httpClient: HttpClient) {
      const endpoint = 'http://localhost:8080/api/user/hello';
      httpClient.get<string>(endpoint).subscribe((data) => {
        this.title = data;
        console.log(data)
      });
  }
}
