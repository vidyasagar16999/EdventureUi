import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  galleryItems = [
    // { 
    //   url: 'assets/images/msr trip1.jpg',
    //   alt: 'msr trip Visit'
    // },
    {
      url: 'assets/images/msr trip33.jpg',
      alt: 'msr trip Visit'
    },
    {
      url: 'assets/images/msr trip22.jpg',
      alt: 'msr trip Visit'
    },
    {
      url: 'assets/images/cocacola.jpg',
      alt: 'msr trip Visit'
    },
    {
      url: 'assets/images/doscience.jpg',
      alt: 'msr trip Visit'
    },
    {
      url: 'assets/images/nature.jpg',
      alt: 'Agriculture/Nature Visit'
    },
    {
      url: 'assets/images/nagarjuna sagar.jpeg',
      alt: 'Nagarjuna Sagar'
    },
    {
      url: 'assets/images/bmscience.jfif',
      alt: 'BM Science Planatary'
    },
    {
      url: 'assets/images/zoo1.jpg',
      alt: 'Nehru Zoological Park'
    },
    // {
    //   url: 'assets/images/mount-opera-star-resort.jpg',
    //   alt: 'Mount-Opera'
    // },
    {
      url: 'assets/images/salarjung.jpeg',
      alt: 'SalarJung Museum'
    },
    {
      url: 'assets/images/farm.jpg',
      alt: 'farm'
    },
    {
      url: 'assets/images/chocolate.jpg',
      alt: 'factory'
    },
    {
      url: 'assets/images/science.jpg',
      alt: 'science'
    },
    {
      url: 'assets/images/chocolate1.jpg',
      alt: 'factory'
    },
    {
      url: 'assets/images/farm1.jpg',
      alt: 'factory'
    },
    {
      url: 'assets/images/farm2.jpg',
      alt: 'factory'
    },
    {
      url: 'assets/images/farm3.jpg',
      alt: 'factory'
    },
    {
      url: 'assets/images/farm4.jpg',
      alt: 'factory'
    },
    {
      url: 'assets/images/farm5.jpg',
      alt: 'factory'
    },
    {
      url: 'assets/images/farm6.jpg',
      alt: 'factory'
    },
    {
      url: 'assets/images/candle.jpg',
      alt: 'factory'
    },
    {
      url: 'assets/images/carrot.jpg',
      alt: 'factory'
    },
    {
      url: 'assets/images/chicken.jpg',
      alt: 'factory'
    },
    {
      url: 'assets/images/animals.jpg',
      alt: 'factory'
    },
    {
      url: 'assets/images/physics exper.jpg',
      alt: 'factory'
    },
    {
      url: 'assets/images/physics.jpg',
      alt: 'factory'
    },
    {
      url: 'assets/images/physics2.jpg',
      alt: 'factory'
    },
    {
      url: 'assets/images/seeds.jpg',
      alt: 'factory'
    },
    {
      url: 'assets/images/soap.jpg',
      alt: 'factory'
    },
    {
      url: 'assets/images/soap3.jpg',
      alt: 'factory'
    },
    {
      url: 'assets/images/soap1.jpg',
      alt: 'factory'
    },
    {
      url: 'assets/images/pochampally.jpg',
      alt: 'pochampally'
    },
    {
      url: 'assets/images/pochampally11.jpeg',
      alt: 'pochampally'
    },
    {
      url: 'assets/images/pochampally12.jpeg',
      alt: 'pochampally'
    },
    {
      url: 'assets/images/sericulture.jpeg',
      alt: 'pochampally'
    },
    {
      url: 'assets/images/ricecluster.jpeg',
      alt: 'pochampally'
    },
    // {
    //   url: 'assets/images/ramoji.jpg',
    //   alt: 'Ramoji Film City'
    // },
    // {
    //   url: 'assets/images/wonder11.webp',
    //   alt: 'Wonderla'
    // },
    // Add more gallery item objects with their details here
  ];

}
