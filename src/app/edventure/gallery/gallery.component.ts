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
      url: 'assets/images/nagarjuna sagar.jpeg',
      alt: 'Image 1 description'
    },
    {
      url: 'assets/images/jala vihar.jpg',
      alt: 'Image 2 description'
    },
    {
      url: 'assets/images/mount-opera-star-resort.jpg',
      alt: 'Image 3 description'
    },
    {
      url: 'assets/images/ramoji film.jfif',
      alt: 'Image 1 description'
    },
    {
      url: 'assets/images/ramoji.jpg',
      alt: 'Image 2 description'
    },
    {
      url: 'assets/images/wonderla3.jfif',
      alt: 'Image 3 description'
    },
    // Add more gallery item objects with their details here
  ];

}
