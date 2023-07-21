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
      description: "Experience the wonders of agriculture and nature with our captivating and interactive visit designed exclusively for children. Step into a world where learning meets fun as children engage in hands-on activities, explore sustainable farming practices, and develop a deeper understanding of the natural environment.During the visit, children will have the opportunity to actively participate in planting and tending to crops, fostering a connection to the earth and promoting eco-consciousness. They'll discover the lifecycle of plants, from seed to harvest, while gaining valuable knowledge about organic farming methods. Additionally, they'll explore fruit orchards, where they can pick and taste ripe fruits, experiencing the joy of farm-to-table goodness.",
      itinerary: [
        'Day 1: Arrival and orientation',
        'Day 2: Visit to the local museum',
        'Day 3: Hiking and outdoor activities',
        'Day 4: Visit to a local school',
        'Day 5: Departure'
      ],
      activities: 'hands-on and immersive experience for children, fostering their understanding of agriculture, nature, and the environment.',
      pricing: 'The price for Trip 1 is $1000. This includes accommodation, meals, local transport, and all activities. Flights are not included.',
      ageGroup: 'This trip is suitable for people aged 10 and above.',
      prerequisites: 'No prior experience is needed. However, a moderate level of fitness is required for the hiking activity.',
    },
    {
      id: 2,
      name: 'Ramoji Film City',
      imageURL: 'assets/images/ramoji.jpg',
      description: "Ramoji Film City, a mesmerizing world of entertainment and creativity that offers an unforgettable experience for children. Spread across acres of breathtaking landscape, Ramoji Film City is not only the largest film studio complex in the world but also a hub of exciting activities, thrilling adventures, and interactive learning. At Ramoji Film City, children will be immersed in the magical world of cinema. They can explore the various film sets, captivating gardens, and stunning landscapes that have been the backdrop for countless blockbuster movies. From ancient palaces to bustling streets, every corner of Ramoji Film City offers a glimpse into the enchanting world of filmmaking. Additionally, Ramoji Film City boasts an array of exciting rides and attractions. Children can hop on thrilling roller coasters, splash around in water parks, and enjoy exciting 3D and 4D shows. They can embark on adventurous tours, exploring the city's iconic landmarks and getting behind-the-scenes glimpses of film production. The eco-zone within the film city offers nature trails, butterfly parks, and interactive exhibits that teach children about the importance of environmental conservation.",
      itinerary: [
        'Day 1: Arrival and orientation',
        'Day 2: Visit to the local museum',
        'Day 3: Hiking and outdoor activities',
        'Day 4: Visit to a local school',
        'Day 5: Departure'
      ],
      activities: "Film Sets Exploration, Filmmaking Workshops, Adventure Rides, Eco-Zone Exploration, Traditional Arts and Crafts, Dance and Music Sessions",
      pricing: 'The price for Trip 1 is $1000. This includes accommodation, meals, local transport, and all activities. Flights are not included.',
      ageGroup: 'This trip is suitable for people aged 10 and above.',
      prerequisites: 'No prior experience is needed. However, a moderate level of fitness is required for the hiking activity.',
    },
    {
      id: 3,
      name: 'Nagarjuna Sagar',
      imageURL: 'assets/images/nagarjuna sagar.jpeg',
      description: " Nagarjuna Sagar, a tranquil and picturesque destination that offers a serene escape for children while providing them with enriching educational experiences. Nestled amidst stunning landscapes and set against the backdrop of the Nagarjuna Sagar Dam, this destination offers a unique blend of natural beauty, historical significance, and engaging activities for young learners.Children can embark on an exciting journey to explore the marvels of Nagarjuna Sagar Dam, one of the world's largest masonry dams. They will witness the sheer engineering brilliance that went into its construction and learn about the significance of dams in water resource management and hydroelectric power generation.",
      itinerary: [
        'Day 1: Arrival and orientation',
        'Day 2: Visit to the local museum',
        'Day 3: Hiking and outdoor activities',
        'Day 4: Visit to a local school',
        'Day 5: Departure'
      ],
      activities: "Dam Exploration, Nagarjuna Konda Visit, Boat Rides, Wildlife Sanctuary Visit, Nature Appreciation",
      pricing: 'The price for Trip 1 is $1000. This includes accommodation, meals, local transport, and all activities. Flights are not included.',
      ageGroup: 'This trip is suitable for people aged 10 and above.',
      prerequisites: 'No prior experience is needed. However, a moderate level of fitness is required for the hiking activity.',
    },
    {
      id: 4,
      name: 'BM Science Planatary',
      imageURL: 'assets/images/bmscience.jfif',
      description: "BM Science Planetary, an extraordinary destination that ignites the curiosity of children and immerses them in the awe-inspiring world of space and science. Step into a realm of discovery and exploration where young minds can embark on a thrilling journey through the mysteries of the universe.At BM Science Planetary, children will have the opportunity to learn about our solar system, distant galaxies, and the wonders of the cosmos through captivating exhibits and interactive displays. They can marvel at life-sized models of rockets, spacecraft, and satellites, gaining a deeper understanding of space exploration and the technologies that enable it.The planetarium at BM Science Planetary offers an immersive experience where children can gaze up at a realistic night sky. They'll be enthralled as they witness stunning visuals of celestial bodies, constellations, and astronomical phenomena, fostering a sense of wonder and expanding their knowledge of the universe.",
      itinerary: [
        'Day 1: Arrival and orientation',
        'Day 2: Visit to the local museum',
        'Day 3: Hiking and outdoor activities',
        'Day 4: Visit to a local school',
        'Day 5: Departure'
      ],
      activities: "Planetarium Shows, Space Exploration Exhibits, Science Demonstrations",
      pricing: 'The price for Trip 1 is $1000. This includes accommodation, meals, local transport, and all activities. Flights are not included.',
      ageGroup: 'This trip is suitable for people aged 10 and above.',
      prerequisites: 'No prior experience is needed. However, a moderate level of fitness is required for the hiking activity.',
    },
    {
      id: 5,
      name: 'Nehru Zoological Park',
      imageURL: 'assets/images/zoo1.jpg',
      description: "Nehru Zoological Park, a captivating destination where children can embark on a thrilling wildlife adventure and experience the wonders of the animal kingdom. Spread across vast acres of lush greenery, this renowned zoo offers a unique opportunity for children to connect with nature, learn about diverse wildlife species, and develop a deeper appreciation for the importance of conservation. As children step into Nehru Zoological Park, they are greeted by a fascinating array of wildlife from around the world. They can encounter majestic big cats such as tigers and lions, observe graceful elephants, and marvel at the playful antics of primates like chimpanzees and orangutans. The zoo houses a wide variety of animal species, providing an up-close and personal experience with the wonders of the animal kingdom. Nehru Zoological Park ensures the safety and well-being of its visitors, with trained staff, well-maintained enclosures, and strict adherence to safety protocols. It aims to provide a secure environment where children can learn, explore, and connect with wildlife in a responsible manner.",
      itinerary: [
        'Day 1: Arrival and orientation',
        'Day 2: Visit to the local museum',
        'Day 3: Hiking and outdoor activities',
        'Day 4: Visit to a local school',
        'Day 5: Departure'
      ],
      activities: "Wildlife Encounters, Educational Signage and Exhibits, Children's Park, Nature Trails and Botanical Gardens",
      pricing: 'The price for Trip 1 is $1000. This includes accommodation, meals, local transport, and all activities. Flights are not included.',
      ageGroup: 'This trip is suitable for people aged 10 and above.',
      prerequisites: 'No prior experience is needed. However, a moderate level of fitness is required for the hiking activity.',
    },
    {
      id: 6,
      name: 'Wonderla',
      imageURL: 'assets/images/wonder11.webp',
      description: "Wonderla, an exhilarating adventure park that promises endless excitement and thrills for children of all ages. Get ready for a day filled with laughter, adrenaline-pumping rides, and unforgettable memories as you step into this amusement park designed to cater to the thrill-seekers and fun enthusiasts. Wonderla boasts a wide array of thrilling rides and attractions that cater to children's sense of adventure. From high-speed roller coasters that defy gravity to water slides that make a splash, there is something for everyone. Children can experience the rush of adrenaline as they zoom through twists, turns, and loops, immersing themselves in the thrill of each ride.For water lovers, Wonderla's water park offers a refreshing oasis of fun. Children can splash around in wave pools, race down towering water slides, and float lazily in lazy rivers. With a variety of water-based attractions, they can beat the heat and have a splashing good time.",
      itinerary: [
        'Day 1: Arrival and orientation',
        'Day 2: Visit to the local museum',
        'Day 3: Hiking and outdoor activities',
        'Day 4: Visit to a local school',
        'Day 5: Departure'
      ],
      activities: "Thrill Rides, Water Park Adventures, Interactive Gaming Zones, Adventure Sports, Play Zones",
      pricing: 'The price for Trip 1 is $1000. This includes accommodation, meals, local transport, and all activities. Flights are not included.',
      ageGroup: 'This trip is suitable for people aged 10 and above.',
      prerequisites: 'No prior experience is needed. However, a moderate level of fitness is required for the hiking activity.',
    },
    {
      id: 7,
      name: 'Mount-Opera',
      imageURL: 'assets/images/mount-opera-star-resort.jpg',
      description: "Mount Opera, a thrilling recreational destination that promises an unforgettable day of fun and excitement for children. Nestled amidst scenic landscapes, this amusement park offers a wide range of activities and attractions that cater to the adventurous spirit and boundless energy of young visitors.Mount Opera is home to a variety of exhilarating rides and attractions that will keep children entertained for hours. From thrilling roller coasters and swinging pirate ships to spinning carousels and bumper cars, there is something for every age group and level of thrill-seeking.Water lovers can cool off and make a splash in the water park at Mount Opera. With exciting water slides, wave pools, lazy rivers, and splash zones, children can enjoy a refreshing aquatic adventure and beat the heat in a fun-filled environment.",
      itinerary: [
        'Day 1: Arrival and orientation',
        'Day 2: Visit to the local museum',
        'Day 3: Hiking and outdoor activities',
        'Day 4: Visit to a local school',
        'Day 5: Departure'
      ],
      activities: "Thrill Rides, Water Park Adventures, Adventure Activities",
      pricing: 'The price for Trip 1 is $1000. This includes accommodation, meals, local transport, and all activities. Flights are not included.',
      ageGroup: 'This trip is suitable for people aged 10 and above.',
      prerequisites: 'No prior experience is needed. However, a moderate level of fitness is required for the hiking activity.',
    },
    {
      id: 8,
      name: 'SalarJung Museum',
      imageURL: 'assets/images/salarjung.jpeg',
      description: "Salarjung Museum, an enchanting destination that takes children on a captivating journey through centuries of art, history, and cultural heritage. Housed within a magnificent building, this museum boasts an extensive collection of artifacts, paintings, sculptures, and historical treasures from various civilizations. As children step into the Salarjung Museum, they are transported to a world of artistic wonders and historical significance. They can explore the galleries filled with exquisite sculptures, ancient manuscripts, intricate textiles, and ornate jewelry, gaining a deeper understanding of the rich cultural heritage of India and beyond.The museum's diverse collection showcases artifacts from different eras, including ancient civilizations, medieval times, and the modern era. Children can marvel at the craftsmanship of intricate ivory carvings, admire the detailed miniatures, and observe the delicate brushstrokes in centuries-old paintings.",
      itinerary: [
        'Day 1: Arrival and orientation',
        'Day 2: Visit to the local museum',
        'Day 3: Hiking and outdoor activities',
        'Day 4: Visit to a local school',
        'Day 5: Departure'
      ],
      activities: "Art Exploration, Interactive Displays",
      pricing: 'The price for Trip 1 is $1000. This includes accommodation, meals, local transport, and all activities. Flights are not included.',
      ageGroup: 'This trip is suitable for people aged 10 and above.',
      prerequisites: 'No prior experience is needed. However, a moderate level of fitness is required for the hiking activity.',
    },
    // {
    //   id: 9,
    //   name: 'Jala Vihar',
    //   imageURL: 'assets/images/jalavihar2.jfif',
    //   description: "Jala Vihar, a thrilling water park that offers a world of fun and excitement for children. Situated amidst scenic surroundings, Jala Vihar is a perfect destination for children to beat the heat, make a splash, and create unforgettable memories.Jala Vihar features a variety of water-based attractions that cater to children of all ages. From exhilarating water slides and splash pools to lazy rivers and wave pools, there is no shortage of aquatic adventures. Children can experience the thrill of zooming down twisting slides, riding waves, and enjoying the cool, refreshing water.For those seeking a more relaxed experience, Jala Vihar offers calm and gentle pools where children can wade, play, and enjoy the water in a safe and controlled environment. They can engage in water games, float on tubes, and simply have a great time with family and friends.",
    //   itinerary: [
    //     'Day 1: Arrival and orientation',
    //     'Day 2: Visit to the local museum',
    //     'Day 3: Hiking and outdoor activities',
    //     'Day 4: Visit to a local school',
    //     'Day 5: Departure'
    //   ],
    //   activities: "Water Slides, Wave Pool, Lazy River, Splash Pools, Adventure Zones",
    //   pricing: 'The price for Trip 1 is $1000. This includes accommodation, meals, local transport, and all activities. Flights are not included.',
    //   ageGroup: 'This trip is suitable for people aged 18 and above.',
    //   prerequisites: 'No prior experience is needed. However, a moderate level of fitness is required for the hiking activity.',
    // },
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
      ageGroup: 'This trip is suitable for people aged 10 and above.',
      prerequisites: 'No prior experience is needed. However, a moderate level of fitness is required for the hiking activity.',
    }
    // Add more trips here
  ];
}
