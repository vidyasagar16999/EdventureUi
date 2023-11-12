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
    'assets/images/parlestu.jpeg',
    'assets/images/ppfarm1.jpeg',
    'assets/images/nfarm.jpeg',
    'assets/images/msr trip33.jpg',
    
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

  services = [
    {
      id: 1,
      name: 'Trip 1',
      description: 'This is trip 1.',
      image: 'assets/images/nagarjuna sagar.jpeg',
    },
    {
      id: 2,
      name: 'Trip 2',
      description: 'This is trip 2.',
      image: 'assets/images/ramoji film.jfif'
    },
    // add more trips/services as needed
  ];
}
