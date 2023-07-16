import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-trip-details',
  templateUrl: './trip-details.component.html',
  styleUrls: ['./trip-details.component.scss']
})
export class TripDetailsComponent implements OnInit {
  tripDetail: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.tripDetail = this.getTrip(+id);
    } else {
      // Handle the error or scenario where id is null
    }
    console.log(this.tripDetail);
  }

  getTrip(id: number): any {
    return this.trip.find(trip => trip.id === id);
  }

  trip = [
    {
      id: 1,
      name: 'Agriculture/Nature Visit',
      imageURL: 'assets/images/nature.jpg',
      description: 'This is a sample description for Trip 1. It includes all the fun and educational activities that you can expect during the trip.',
      itinerary: [
        'Day 1: Arrival and orientation',
        'Day 2: Visit to the local museum',
        'Day 3: Hiking and outdoor activities',
        'Day 4: Visit to a local school',
        'Day 5: Departure'
      ],
      activities: 'Hiking, Visit to a local museum, Interaction with locals, Visit to a local school',
      pricing: 'The price for Trip 1 is $1000. This includes accommodation, meals, local transport, and all activities. Flights are not included.',
      ageGroup: 'This trip is suitable for people aged 18 and above.',
      prerequisites: 'No prior experience is needed. However, a moderate level of fitness is required for the hiking activity.',
    },
    {
      id: 2,
      name: 'Ramoji Fil City',
      imageURL: 'assets/images/ramoji.jpg',
      description: 'This is a sample description for Trip 1. It includes all the fun and educational activities that you can expect during the trip.',
      itinerary: [
        'Day 1: Arrival and orientation',
        'Day 2: Visit to the local museum',
        'Day 3: Hiking and outdoor activities',
        'Day 4: Visit to a local school',
        'Day 5: Departure'
      ],
      activities: 'Hiking, Visit to a local museum, Interaction with locals, Visit to a local school',
      pricing: 'The price for Trip 1 is $1000. This includes accommodation, meals, local transport, and all activities. Flights are not included.',
      ageGroup: 'This trip is suitable for people aged 18 and above.',
      prerequisites: 'No prior experience is needed. However, a moderate level of fitness is required for the hiking activity.',
    },
    {
      id: 3,
      name: 'Nagarjuna Sagar',
      imageURL: 'assets/images/nagarjuna sagar.jpeg',
      description: 'This is a sample description for Trip 1. It includes all the fun and educational activities that you can expect during the trip.',
      itinerary: [
        'Day 1: Arrival and orientation',
        'Day 2: Visit to the local museum',
        'Day 3: Hiking and outdoor activities',
        'Day 4: Visit to a local school',
        'Day 5: Departure'
      ],
      activities: 'Hiking, Visit to a local museum, Interaction with locals, Visit to a local school',
      pricing: 'The price for Trip 1 is $1000. This includes accommodation, meals, local transport, and all activities. Flights are not included.',
      ageGroup: 'This trip is suitable for people aged 18 and above.',
      prerequisites: 'No prior experience is needed. However, a moderate level of fitness is required for the hiking activity.',
    },
    {
      id: 4,
      name: 'BM Science Planatary',
      imageURL: 'assets/images/bmscience.jfif',
      description: 'This is a sample description for Trip 1. It includes all the fun and educational activities that you can expect during the trip.',
      itinerary: [
        'Day 1: Arrival and orientation',
        'Day 2: Visit to the local museum',
        'Day 3: Hiking and outdoor activities',
        'Day 4: Visit to a local school',
        'Day 5: Departure'
      ],
      activities: 'Hiking, Visit to a local museum, Interaction with locals, Visit to a local school',
      pricing: 'The price for Trip 1 is $1000. This includes accommodation, meals, local transport, and all activities. Flights are not included.',
      ageGroup: 'This trip is suitable for people aged 18 and above.',
      prerequisites: 'No prior experience is needed. However, a moderate level of fitness is required for the hiking activity.',
    },
    {
      id: 5,
      name: 'Nehru Zoological Park',
      imageURL: 'assets/images/zoo1.jpg',
      description: 'This is a sample description for Trip 1. It includes all the fun and educational activities that you can expect during the trip.',
      itinerary: [
        'Day 1: Arrival and orientation',
        'Day 2: Visit to the local museum',
        'Day 3: Hiking and outdoor activities',
        'Day 4: Visit to a local school',
        'Day 5: Departure'
      ],
      activities: 'Hiking, Visit to a local museum, Interaction with locals, Visit to a local school',
      pricing: 'The price for Trip 1 is $1000. This includes accommodation, meals, local transport, and all activities. Flights are not included.',
      ageGroup: 'This trip is suitable for people aged 18 and above.',
      prerequisites: 'No prior experience is needed. However, a moderate level of fitness is required for the hiking activity.',
    },
    {
      id: 6,
      name: 'Wonderla',
      imageURL: 'assets/images/wonder11.webp',
      description: 'This is a sample description for Trip 1. It includes all the fun and educational activities that you can expect during the trip.',
      itinerary: [
        'Day 1: Arrival and orientation',
        'Day 2: Visit to the local museum',
        'Day 3: Hiking and outdoor activities',
        'Day 4: Visit to a local school',
        'Day 5: Departure'
      ],
      activities: 'Hiking, Visit to a local museum, Interaction with locals, Visit to a local school',
      pricing: 'The price for Trip 1 is $1000. This includes accommodation, meals, local transport, and all activities. Flights are not included.',
      ageGroup: 'This trip is suitable for people aged 18 and above.',
      prerequisites: 'No prior experience is needed. However, a moderate level of fitness is required for the hiking activity.',
    },
    {
      id: 7,
      name: 'Mount-Opera',
      imageURL: 'assets/images/mount-opera-star-resort.jpg',
      description: 'This is a sample description for Trip 1. It includes all the fun and educational activities that you can expect during the trip.',
      itinerary: [
        'Day 1: Arrival and orientation',
        'Day 2: Visit to the local museum',
        'Day 3: Hiking and outdoor activities',
        'Day 4: Visit to a local school',
        'Day 5: Departure'
      ],
      activities: 'Hiking, Visit to a local museum, Interaction with locals, Visit to a local school',
      pricing: 'The price for Trip 1 is $1000. This includes accommodation, meals, local transport, and all activities. Flights are not included.',
      ageGroup: 'This trip is suitable for people aged 18 and above.',
      prerequisites: 'No prior experience is needed. However, a moderate level of fitness is required for the hiking activity.',
    },
    {
      id: 8,
      name: 'SalarJung Museum',
      imageURL: 'assets/images/salarjung.jpeg',
      description: 'This is a sample description for Trip 1. It includes all the fun and educational activities that you can expect during the trip.',
      itinerary: [
        'Day 1: Arrival and orientation',
        'Day 2: Visit to the local museum',
        'Day 3: Hiking and outdoor activities',
        'Day 4: Visit to a local school',
        'Day 5: Departure'
      ],
      activities: 'Hiking, Visit to a local museum, Interaction with locals, Visit to a local school',
      pricing: 'The price for Trip 1 is $1000. This includes accommodation, meals, local transport, and all activities. Flights are not included.',
      ageGroup: 'This trip is suitable for people aged 18 and above.',
      prerequisites: 'No prior experience is needed. However, a moderate level of fitness is required for the hiking activity.',
    },
    {
      id: 9,
      name: 'Jala Vihar',
      imageURL: 'assets/images/jalavihar2.jfif',
      description: 'This is a sample description for Trip 1. It includes all the fun and educational activities that you can expect during the trip.',
      itinerary: [
        'Day 1: Arrival and orientation',
        'Day 2: Visit to the local museum',
        'Day 3: Hiking and outdoor activities',
        'Day 4: Visit to a local school',
        'Day 5: Departure'
      ],
      activities: 'Hiking, Visit to a local museum, Interaction with locals, Visit to a local school',
      pricing: 'The price for Trip 1 is $1000. This includes accommodation, meals, local transport, and all activities. Flights are not included.',
      ageGroup: 'This trip is suitable for people aged 18 and above.',
      prerequisites: 'No prior experience is needed. However, a moderate level of fitness is required for the hiking activity.',
    },
    {
      id: 10,
      name: 'Industrial Visit',
      imageURL: 'assets/images/wonder11',
      description: 'This is a sample description for Trip 1. It includes all the fun and educational activities that you can expect during the trip.',
      itinerary: [
        'Day 1: Arrival and orientation',
        'Day 2: Visit to the local museum',
        'Day 3: Hiking and outdoor activities',
        'Day 4: Visit to a local school',
        'Day 5: Departure'
      ],
      activities: 'Hiking, Visit to a local museum, Interaction with locals, Visit to a local school',
      pricing: 'The price for Trip 1 is $1000. This includes accommodation, meals, local transport, and all activities. Flights are not included.',
      ageGroup: 'This trip is suitable for people aged 18 and above.',
      prerequisites: 'No prior experience is needed. However, a moderate level of fitness is required for the hiking activity.',
    }
    // Add more trips here
  ];
}
