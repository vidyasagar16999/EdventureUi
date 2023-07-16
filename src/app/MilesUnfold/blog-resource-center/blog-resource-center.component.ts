import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-resource-center',
  templateUrl: './blog-resource-center.component.html',
  styleUrls: ['./blog-resource-center.component.scss']
})
export class BlogResourceCenterComponent implements OnInit {
  posts: Array<{ id: number, title: string, author: string, date: string, excerpt: string, img: string }> = [
    {
      id: 1,
      title: 'Tips for planning educational trips',
      author: 'Author 1',
      date: '2023-07-15',
      excerpt: 'Tips for planning educational trips',
      img: 'assets/images/blog1.jpg',
    },
    {
      id: 2,
      title: 'The Benefits of Educational Trips for Students',
      author: 'Author 1',
      date: '2023-07-15',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies...',
      img: 'assets/images/blog4.jpg',
    },
    {
      id: 3,
      title: 'Tips for Choosing the Right Educational Trip Destination',
      author: 'Author 1',
      date: '2023-01-01',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies...',
      img: 'assets/images/blog3.jpg',
    },
    {
      id: 4,
      title: 'How to Plan an Educational Trip',
      author: 'Author 1',
      date: '2023-01-01',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies...',
      img: 'assets/images/blog2.jpg',
    },
    // ... more posts
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
