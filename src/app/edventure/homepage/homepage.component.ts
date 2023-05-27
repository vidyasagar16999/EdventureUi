import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit, OnDestroy  {
  private slideShowInterval: any;
  constructor() { }

  images: string[] = [
    'assets/images/nagarjuna sagar.jpeg',
    'assets/images/mount-opera-star-resort.jpg',
    'assets/images/wonderla3.jfif'
    // add paths to more images as needed
  ];

  currentImageIndex = 0;

  ngOnInit() {
    this.slideShowInterval = setInterval(() => {
      this.nextImage();
    }, 4000);
  }

  ngOnDestroy() {
    if (this.slideShowInterval) {
      clearInterval(this.slideShowInterval);
    }
  }

  previousImage() {
    this.currentImageIndex--;
    if (this.currentImageIndex < 0) {
      this.currentImageIndex = this.images.length - 1;
    }
  }

  nextImage() {
    this.currentImageIndex++;
    if (this.currentImageIndex >= this.images.length) {
      this.currentImageIndex = 0;
    }
  }
}
