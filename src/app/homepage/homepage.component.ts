import { Component, OnInit } from '@angular/core';
import { SliderInterface } from '../sharedComponents/image-slider/slide.interface';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  slideImages: SliderInterface[] = [
    {url: '../../assets/exTat1.png', title: "example 1"},
    {url: '../../assets/exTat2.png', title: "example 2"},
    {url: '../../assets/exTat3.png', title: "example 3"},
    {url: '../../assets/exTat4.png', title: "example 4"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
