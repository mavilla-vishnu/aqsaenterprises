import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public slides = [
    { src: '../../../assets/first.png', text: 'Welcome to Aqsa Gas', url: '/' },
    { src: '../../../assets/hotel1.jpg', text: 'LPG for Hotel', url: '/hotel' },
    { src: '../../../assets/kitchen1.png', text: 'LPG for Home', url: '/home' },
    {
      src: '../../../assets/industry1.png',
      text: 'LPG for Industry',
      url: 'industry',
    },
  ];
}
