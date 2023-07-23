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
    {
      url: 'assets/images/nature.jpg',
      alt: 'Agriculture/Nature Visit'
    },
    {
      url: 'assets/images/ramoji.jpg',
      alt: 'Ramoji Fil City'
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
    {
      url: 'assets/images/wonder11.webp',
      alt: 'Wonderla'
    },
    {
      url: 'assets/images/mount-opera-star-resort.jpg',
      alt: 'Mount-Opera'
    },
    {
      url: 'assets/images/salarjung.jpeg',
      alt: 'SalarJung Museum'
    },
    // Add more gallery item objects with their details here
  ];

}
