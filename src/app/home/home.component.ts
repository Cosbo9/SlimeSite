import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Image } from '../models/image';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @Input() showCount = false;

  
  galleryData: Image[] = [
    {
      imageSrc: "../assets/1hr1.png",
      imageAlt: "1 hour image",
      imageTier: 1
    },
    {
      imageSrc: "../assets/1hr2.jpg",
      imageAlt: "1 hour image",
      imageTier: 1
    },
    {
      imageSrc: "../assets/1hr3.jpg",
      imageAlt: "1 hour image",
      imageTier: 1
    },
    {
      imageSrc: "../assets/1hr4.jpg",
      imageAlt: "1 hour image",
      imageTier: 1
    }
  ]

  previewImage = false;
  showMask = false;
  currentImage: Image = this.galleryData[0];
  currentIndex = 0;
  controls = true;
  totalImageCount = 0;

  constructor() { }

  ngOnInit(): void {
    this.totalImageCount = this.galleryData.length
  }


  onPreviewImage(index: number) {
    this.showMask = true;
    this.previewImage = true;
    this.currentIndex = index;
    this.currentImage = this.galleryData[index];
  }

  onClose() {
    this.showMask = false;
    this.previewImage = false;
  }

  onNextImage() {
    this.currentIndex = this.currentIndex + 1;
    if (this.currentIndex >= this.galleryData.length) {
      this.currentIndex = 0;
    }
    this.currentImage = this.galleryData[this.currentIndex]
  }

  onPreviousImage() {
    this.currentIndex = this.currentIndex - 1;
    if (this.currentIndex < 0) {
      this.currentIndex = this.galleryData.length - 1
    }
    this.currentImage = this.galleryData[this.currentIndex]
  }




}
