import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit, Input } from '@angular/core';
import { IMAGES_SIZES } from 'src/app/constants/images-sizes';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [
    trigger('slidefade', [
      state('void', style({ opacity: 0 })),
      transition('void => *', [animate('1s')]),
      transition('* => void', [animate('500ms')]),
    ]),
  ],
})
export class SliderComponent implements OnInit {
  @Input() items: Movie[] = [];
  @Input() isBanner: boolean = false;
  readonly imagesSizes = IMAGES_SIZES;
  currentSlideIndex: number = 0;

  constructor() {}

  ngOnInit(): void {
    if (!this.isBanner) {
      setInterval(() => {
        this.currentSlideIndex = ++this.currentSlideIndex % this.items.length;
      }, 5000);
    }
  }
}
