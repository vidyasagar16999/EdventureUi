import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-resource-center',
  templateUrl: './blog-resource-center.component.html',
  styleUrls: ['./blog-resource-center.component.scss']
})
export class BlogResourceCenterComponent implements OnInit {
  posts: Array<{ id: string, title: string, author: string, date: string, excerpt: string, img: string }> = [
    {
      id: 'Educational-Tour-Benefits-for-Students:Top-5-Insights',
      title: 'Educational Tour Benefits for Students: Top 5 Insights',
      author: 'Author 1',
      date: '2023-07-15',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies...',
      img: 'assets/images/blogedbe1.png',
    },
    {
      id: 'Guide-to-Planning-Successful-Educational-Tours',
      title: 'Guide to Planning Successful Educational Tours',
      author: 'Author 1',
      date: '2023-07-15',
      excerpt: 'Tips for planning educational trips',
      img: 'assets/images/blogedplan.png',
    },
    {
      id: 'How-to-Choose-the-Right-Field-Trip-Destination',
      title: 'How to Choose the Right Field Trip Destination',
      author: 'Author 1',
      date: '2023-01-01',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies...',
      img: 'assets/images/blogdes.png',
    },
    {
      id: 'Best-Educational-Field-Trips-Ideas-for-Students',
      title: 'Best Educational Field Trips Ideas for Students',
      author: 'Author 1',
      date: '2023-01-01',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies...',
      img: 'assets/images/blogsci.png',
    },
    // ... more posts
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
