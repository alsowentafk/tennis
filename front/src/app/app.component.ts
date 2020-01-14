import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import * as uuid from 'uuid';
import {User} from './Models/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  static token = 'a2d729af-7815-4639-8e43-f0663807baa2';
  static admin = {email: 'admin@gmail.com', password: 'k2F-KywQq5*!w9K4', key: '8a2c169f-ef67-4a73-ae30-5b1e28bac920'};

  public static getPictureFromApi(controllerName: string, idEntity: string){
    return  '/api/' + controllerName + '/downloadFile/' + idEntity;
  }

  static blobToFile = (theBlob: Blob, fileName:string): File => {
    let b: any = theBlob;
    b.lastModifiedDate = new Date();
    b.name = fileName;
    return <File>theBlob;
  }
}
