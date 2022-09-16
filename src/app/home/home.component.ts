import { Component, Input, OnInit } from '@angular/core';
import { Image } from '../models/image';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
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
    this.currentIndex = index;
    console.log("onPreviewImage")
  }


}
