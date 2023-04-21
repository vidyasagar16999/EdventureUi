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
      url: 'path/to/image1.jpg',
      alt: 'Image 1 description'
    },
    {
      url: 'path/to/image2.jpg',
      alt: 'Image 2 description'
    },
    // Add more gallery item objects with their details here
  ];

}
