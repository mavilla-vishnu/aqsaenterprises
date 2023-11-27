import { Component, Input, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: ' carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations: [
    trigger('carouselAnimation', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate('600ms', style({ opacity: 1 })),
      ]),
      transition('* => void', [animate('600ms', style({ opacity: 0 }))]),
    ]),
  ],
})
export class CarouselComponent implements OnInit {
  ngOnInit() {
    setInterval(() => {
      const next = this.currentSlide + 1;
      this.currentSlide = next === this.slides.length ? 0 : next;
    }, 4000);
  }
  @Input() slides: any;
  currentSlide = 0;

  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
    console.log('previous clicked, new current slide is: ', this.currentSlide);
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
    console.log('next clicked, new current slide is: ', this.currentSlide);
  }
}
