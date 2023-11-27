import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public slides = [
    { src: '../../../assets/first.png', text: 'Welcome to Aqsa Gas' },
    { src: '../../../assets/hotel.jpg', text: 'LPG for Hotel' },
    { src: '../../../assets/kitchen.jpg', text: 'LPG for Home' },
    { src: '../../../assets/industry.jpg', text: 'LPG for Industry' },
  ];
}
