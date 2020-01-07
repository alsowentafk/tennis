import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  private images = [
    {picture:'../../../assets/img/sponsor/eksimbank.jpg'},
    {picture:'../../../assets/img/sponsor/galicia.jpg'},
    {picture:'../../../assets/img/sponsor/KIA_logo2.png'},
    {picture:'../../../assets/img/sponsor/logo-milka.jpeg'},
    {picture:'../../../assets/img/sponsor/morshinska.png'}];
  constructor() { }

  ngOnInit() {
  }

  goSponsorUrl(sponsor: string) {
      switch (sponsor) {
        case 'morshinska': {window.open('https://www.morshynska.ua/')} break;
        case  'milka': {window.open('http://milka-promo.com.ua/')} break;
        case 'kia': {window.open('https://www.kia.com/ua/main.html')} break;
        case 'galicia': {window.open('http://galicia.com.ua/about/')} break;
        case 'eksimbank': {window.open('https://www.eximb.com/')} break;
        default: break;
      }
  }
}
