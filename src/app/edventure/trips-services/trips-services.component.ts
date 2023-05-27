import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trips-services',
  templateUrl: './trips-services.component.html',
  styleUrls: ['./trips-services.component.scss']
})
export class TripsServicesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  trips = [
    {
      title: 'Trip 1',
      description: 'Detailed description of Trip 1.',
      itinerary: 'Itinerary details for Trip 1.',
      activities: 'Activities for Trip 1.',
      pricing: 'Pricing details for Trip 1.',
      ageGroup: 'Age group recommendation for Trip 1.',
      prerequisites: 'Prerequisite information for Trip 1.',
      url: 'assets/images/nagarjuna sagar.jpeg',
      alt: 'Image 1 description'
    },
    {
      title: 'Trip 2',
      description: 'Detailed description of Trip 1.',
      itinerary: 'Itinerary details for Trip 1.',
      activities: 'Activities for Trip 1.',
      pricing: 'Pricing details for Trip 1.',
      ageGroup: 'Age group recommendation for Trip 1.',
      prerequisites: 'Prerequisite information for Trip 1.',
      url: 'assets/images/jala vihar.jpg',
      alt: 'Image 2 description'
    },
    {
      title: 'Trip 3',
      description: 'Detailed description of Trip 1.',
      itinerary: 'Itinerary details for Trip 1.',
      activities: 'Activities for Trip 1.',
      pricing: 'Pricing details for Trip 1.',
      ageGroup: 'Age group recommendation for Trip 1.',
      prerequisites: 'Prerequisite information for Trip 1.',
      url: 'assets/images/mount-opera-star-resort.jpg',
      alt: 'Image 3 description'
    },
    {
      title: 'Trip 4',
      description: 'Detailed description of Trip 1.',
      itinerary: 'Itinerary details for Trip 1.',
      activities: 'Activities for Trip 1.',
      pricing: 'Pricing details for Trip 1.',
      ageGroup: 'Age group recommendation for Trip 1.',
      prerequisites: 'Prerequisite information for Trip 1.',
      url: 'assets/images/ramoji film.jfif',
      alt: 'Image 1 description'
    }
    // Add more trip objects with their details here
  ];
}
