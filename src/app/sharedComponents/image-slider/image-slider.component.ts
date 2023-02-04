import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { SliderInterface } from './slide.interface';

@Component({
  selector: 'app-image-slider',
  template: `
<div class="slider">
  <div>
    <div (click)="goToPrevious()" class="leftArrow">❰</div>
    <div (click)="goToNext()" class="rightArrow">❱</div>
  </div>
  <div
    class="slide"
    [ngStyle]="{ 'background-image': getCurrentSlideUrl(), 'background-repeat': 'no-repeat', 'background-size': '100% 100%', 'height': '100%', 'width': 'auto' }"
  ></div>
  <div class="dotsContainer">
    <div
      *ngFor="let slide of slides; let slideIndex = index"
      class="dot"
      (click)="goToSlide(slideIndex)"
    >
      ●
    </div>
  </div>
</div>
  `,
  styleUrls: ['./image-slider.component.css'],
})
export class ImageSliderComponent implements OnInit, OnDestroy {
  @Input() slides: SliderInterface[] = [];
  currentIndex: number = 0;
  timeoutId?: number;

  constructor() {}

  ngOnInit(): void {
    this.resetTimer();
  }

  ngOnDestroy() {
    window.clearTimeout(this.timeoutId);
  }
  resetTimer() {
    if (this.timeoutId) {
      window.clearTimeout(this.timeoutId);
    }
    this.timeoutId = window.setTimeout(() => this.goToNext(), 5000);
  }

  goToPrevious(): void {
    const isFirstSlide = this.currentIndex === 0;
    const newIndex = isFirstSlide
      ? this.slides.length - 1
      : this.currentIndex - 1;

    this.resetTimer();
    this.currentIndex = newIndex;
  }

  goToNext(): void {
    const isLastSlide = this.currentIndex === this.slides.length - 1;
    const newIndex = isLastSlide ? 0 : this.currentIndex + 1;

    this.resetTimer();
    this.currentIndex = newIndex;
  }

  goToSlide(slideIndex: number): void {
    this.resetTimer();
    this.currentIndex = slideIndex;
  }

  getCurrentSlideUrl(): string {
    return `url('${this.slides[this.currentIndex].url}')`;
  }
}
