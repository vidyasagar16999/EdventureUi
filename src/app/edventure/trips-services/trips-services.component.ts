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
      prerequisites: 'Prerequisite information for Trip 1.'
    },
    // Add more trip objects with their details here
  ];
}
