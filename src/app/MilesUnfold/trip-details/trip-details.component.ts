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
      description: "An educational trip for school students offers a diverse and engaging experience centered around agriculture and farming practices. The day begins with an enlightening session on Domestic Animals Feeding and Petting, where students can interact with various farm animals, learning about their care and importance in agriculture. Next, they embark on an exciting Farm Train Ride, exploring the vast fields and gaining insights into the farming landscape. The students get hands-on experience with crucial agricultural tasks like Paddy Transplantation and Sowing, understanding the meticulous process of planting crops and their significance in food production. They also get to participate in Seed Testing, learning about the quality assessment of seeds before planting.",
      description1: "Moving on to the vital aspect of Soil Preparation, students learn about soil health, its importance, and the methods used to optimize it for productive farming. They further discover the wonders of Natural Pest Preparation and Natural Compost Preparation, witnessing eco-friendly approaches to pest control and sustainable farming practices.The educational trip offers a chance to witness the various stages of agricultural harvesting with demonstrations on Available Harvesting techniques. Additionally, they get an opportunity to observe traditional Rice, Oil, and Flour Mills in action, witnessing the processing of grains and its significance in food production.",
      description2: "The day concludes with an interactive session on Milk Toning, where students learn about dairy farming, milk processing, and its journey from farm to table. Moreover, an Agri Tools Expo showcases the innovative tools and equipment used in modern agriculture.Throughout the trip, students actively participate in Weeding, understanding the importance of removing unwanted plants that compete for nutrients with the main crops. This enriching experience instills a deeper understanding of agriculture, fostering appreciation for the hard work of farmers and the importance of sustainable food production.",
      itinerary: [
        'Day 1: Arrival and orientation',
        'Day 2: Visit to the local museum',
        'Day 3: Hiking and outdoor activities',
        'Day 4: Visit to a local school',
        'Day 5: Departure'
      ],
      activities: 'Domestic Animals Feeding and Petting, Farm Train Ride, Paddy Transplantation, Sowing, Seed Testing, Soil Preparation, Natural Pest Preparation, Natural Compost Preparation, Available Harvesting, Rice Mill, Oil Mill, Flour Mill, Milk Tonning, Agri Tools Expo, Weeding.',
      pricing: 'The price for Trip 1 is $1000. This includes accommodation, meals, local transport, and all activities. Flights are not included.',
      ageGroup: 'This trip is suitable for people aged 8 and above.',
      prerequisites: 'No prior experience is needed. However, a moderate level of fitness is required for the hiking activity.',
    },
    {
      id: 2,
      name: 'Ramoji Film City',
      imageURL: 'assets/images/ramoji.jpg',
      description: "Ramoji Film City, a mesmerizing world of entertainment and creativity that offers an unforgettable experience for children. Spread across acres of breathtaking landscape, Ramoji Film City is not only the largest film studio complex in the world but also a hub of exciting activities, thrilling adventures, and interactive learning. At Ramoji Film City, children will be immersed in the magical world of cinema. They can explore the various film sets, captivating gardens, and stunning landscapes that have been the backdrop for countless blockbuster movies.",
      description1: "From ancient palaces to bustling streets, every corner of Ramoji Film City offers a glimpse into the enchanting world of filmmaking. Additionally, Ramoji Film City boasts an array of exciting rides and attractions. Children can hop on thrilling roller coasters, splash around in water parks, and enjoy exciting 3D and 4D shows. They can embark on adventurous tours, exploring the city's iconic landmarks and getting behind-the-scenes glimpses of film production. The eco-zone within the film city offers nature trails, butterfly parks, and interactive exhibits that teach children about the importance of environmental conservation.",
      itinerary: [
        'Day 1: Arrival and orientation',
        'Day 2: Visit to the local museum',
        'Day 3: Hiking and outdoor activities',
        'Day 4: Visit to a local school',
        'Day 5: Departure'
      ],
      activities: "Guided tour of film sets, movie magic show, amusement rides at Fundustan, adventure activities, live shows, and interactive entertainment zones.",
      pricing: 'The price for Trip 1 is $1000. This includes accommodation, meals, local transport, and all activities. Flights are not included.',
      ageGroup: 'This trip is suitable for people aged 8 and above.',
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
      description: "BM Science Planetary, an extraordinary destination that ignites the curiosity of children and immerses them in the awe-inspiring world of space and science. Step into a realm of discovery and exploration where young minds can embark on a thrilling journey through the mysteries of the universe.At BM Science Planetary, children will have the opportunity to learn about our solar system, distant galaxies, and the wonders of the cosmos through captivating exhibits and interactive displays.",
      description1: "They can marvel at life-sized models of rockets, spacecraft, and satellites, gaining a deeper understanding of space exploration and the technologies that enable it.The planetarium at BM Science Planetary offers an immersive experience where children can gaze up at a realistic night sky. They'll be enthralled as they witness stunning visuals of celestial bodies, constellations, and astronomical phenomena, fostering a sense of wonder and expanding their knowledge of the universe.",
      itinerary: [
        'Day 1: Arrival and orientation',
        'Day 2: Visit to the local museum',
        'Day 3: Hiking and outdoor activities',
        'Day 4: Visit to a local school',
        'Day 5: Departure'
      ],
      activities: "Planetarium Shows, Space Exploration Exhibits, Science Demonstrations",
      pricing: 'The price for Trip 1 is $1000. This includes accommodation, meals, local transport, and all activities. Flights are not included.',
      ageGroup: 'This trip is suitable for people aged 8 and above.',
      prerequisites: 'No prior experience is needed. However, a moderate level of fitness is required for the hiking activity.',
    },
    {
      id: 5,
      name: 'Nehru Zoological Park',
      imageURL: 'assets/images/zoo1.jpg',
      description: "Nehru Zoological Park, a captivating destination where children can embark on a thrilling wildlife adventure and experience the wonders of the animal kingdom. Spread across vast acres of lush greenery, this renowned zoo offers a unique opportunity for children to connect with nature, learn about diverse wildlife species, and develop a deeper appreciation for the importance of conservation. As children step into Nehru Zoological Park, they are greeted by a fascinating array of wildlife from around the world.",
      description1: "They can encounter majestic big cats such as tigers and lions, observe graceful elephants, and marvel at the playful antics of primates like chimpanzees. The zoo houses a wide variety of animal species, providing an up-close and personal experience with the wonders of the animal kingdom. Nehru Zoological Park ensures the safety and well-being of its visitors, with trained staff, well-maintained enclosures, and strict adherence to safety protocols. It aims to provide a secure environment where children can learn, explore, and connect with wildlife in a responsible manner.",
      itinerary: [
        'Day 1: Arrival and orientation',
        'Day 2: Visit to the local museum',
        'Day 3: Hiking and outdoor activities',
        'Day 4: Visit to a local school',
        'Day 5: Departure'
      ],
      activities: "Guided zoo tour, interactive discussions about wildlife conservation, visit to the zoos aquarium and butterfly house.",
      pricing: 'The price for Trip 1 is $1000. This includes accommodation, meals, local transport, and all activities. Flights are not included.',
      ageGroup: 'This trip is suitable for people aged 8 and above.',
      prerequisites: 'No prior experience is needed. However, a moderate level of fitness is required for the hiking activity.',
    },
    {
      id: 6,
      name: 'Wonderla',
      imageURL: 'assets/images/wonder11.webp',
      description: "Wonderla, an exhilarating adventure park that promises endless excitement and thrills for children of all ages. Get ready for a day filled with laughter, adrenaline-pumping rides, and unforgettable memories as you step into this amusement park designed to cater to the thrill-seekers and fun enthusiasts. Wonderla boasts a wide array of thrilling rides and attractions that cater to children's sense of adventure.",
      description1: "From high-speed roller coasters that defy gravity to water slides that make a splash, there is something for everyone. Children can experience the rush of adrenaline as they zoom through twists, turns, and loops, immersing themselves in the thrill of each ride.For water lovers, Wonderla's water park offers a refreshing oasis of fun. Children can splash around in wave pools, race down towering water slides, and float lazily in lazy rivers. With a variety of water-based attractions, they can beat the heat and have a splashing good time.",
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
      description: "Mount Opera, a thrilling recreational destination that promises an unforgettable day of fun and excitement for children. Nestled amidst scenic landscapes, this amusement park offers a wide range of activities and attractions that cater to the adventurous spirit and boundless energy of young visitors.Mount Opera is home to a variety of exhilarating rides and attractions that will keep children entertained for hours.",
      description1: "From thrilling roller coasters and swinging pirate ships to spinning carousels and bumper cars, there is something for every age group and level of thrill-seeking.Water lovers can cool off and make a splash in the water park at Mount Opera. With exciting water slides, wave pools, lazy rivers, and splash zones, children can enjoy a refreshing aquatic adventure and beat the heat in a fun-filled environment.",
      itinerary: [
        'Day 1: Arrival and orientation',
        'Day 2: Visit to the local museum',
        'Day 3: Hiking and outdoor activities',
        'Day 4: Visit to a local school',
        'Day 5: Departure'
      ],
      activities: "Thrill Rides, Water Park Adventures, Adventure Activities",
      pricing: 'The price for Trip 1 is $1000. This includes accommodation, meals, local transport, and all activities. Flights are not included.',
      ageGroup: 'This trip is suitable for people aged 7 and above.',
      prerequisites: 'No prior experience is needed. However, a moderate level of fitness is required for the hiking activity.',
    },
    {
      id: 8,
      name: 'SalarJung Museum',
      imageURL: 'assets/images/salarjung.jpeg',
      description: "Salarjung Museum, an enchanting destination that takes children on a captivating journey through centuries of art, history, and cultural heritage. Housed within a magnificent building, this museum boasts an extensive collection of artifacts, paintings, sculptures, and historical treasures from various civilizations. As children step into the Salarjung Museum, they are transported to a world of artistic wonders and historical significance.",
      description1: "They can explore the galleries filled with exquisite sculptures, ancient manuscripts, intricate textiles, and ornate jewelry, gaining a deeper understanding of the rich cultural heritage of India and beyond.The museum's diverse collection showcases artifacts from different eras, including ancient civilizations, medieval times, and the modern era. Children can marvel at the craftsmanship of intricate ivory carvings, admire the detailed miniatures, and observe the delicate brushstrokes in centuries-old paintings.",
      itinerary: [
        'Day 1: Arrival and orientation',
        'Day 2: Visit to the local museum',
        'Day 3: Hiking and outdoor activities',
        'Day 4: Visit to a local school',
        'Day 5: Departure'
      ],
      activities: "Art Exploration, Interactive Displays",
      pricing: 'The price for Trip 1 is $1000. This includes accommodation, meals, local transport, and all activities. Flights are not included.',
      ageGroup: 'This trip is suitable for people aged 8 and above.',
      prerequisites: 'No prior experience is needed. However, a moderate level of fitness is required for the hiking activity.',
    },
    {
      id: 10,
      name: 'Industrial Visit',
      imageURL: 'assets/images/industrial.jpg',
      description: "An Industrial Visit provides students a practical perspective of the industry functioning. children will have the opportunity to engage in a delightful array of hands-on activities. They will craft vibrant and scented candle crayons, exploring the fascinating world of colors and artistry. As they mold and shape delectable chocolates, they will discover the joy of culinary creativity. In the realm of herbal concoctions, young minds will delve into the art of making soothing and fragrant potions, learning about the wonders of nature's remedies.",
      description1: "The magic of chemistry will come alive as they concoct their own detergent powder, understanding the science behind cleaning and hygiene. Finally, through soap preparation, they will unleash their imaginations, crafting unique and personalized soaps that carry their individual flair. Our workshops aim to inspire curiosity, spark creativity, and empower children to become masters of their own creations, fostering a love for learning that will last a lifetime.",
      itinerary: [
        'Day 1: Arrival and orientation',
        'Day 2: Visit to the local museum',
        'Day 3: Hiking and outdoor activities',
        'Day 4: Visit to a local school',
        'Day 5: Departure'
      ],
      activities: 'Hands-on preparation of candle crayons, chocolate, herbal, detergant powder, soap preparation.',
      pricing: 'The price for Trip 1 is $1000. This includes accommodation, meals, local transport, and all activities. Flights are not included.',
      ageGroup: 'This trip is suitable for people aged 8 and above.',
      prerequisites: 'No prior experience is needed. However, a moderate level of fitness is required for the hiking activity.',
    },
    {
      id: 11,
      name: 'Science and Technology',
      imageURL: 'assets/images/stem.jpg',
      description: 'Science, Technology practical exposure for school students is an immersive and hands-on educational program designed to provide students with real-world experiences and practical applications in the fields of science, technology. This initiative aims to go beyond traditional classroom learning and textbooks, offering students the opportunity to engage in interactive, experiential, and problem-solving activities.',
      itinerary: [
        'Day 1: Arrival and orientation',
        'Day 2: Visit to the local museum',
        'Day 3: Hiking and outdoor activities',
        'Day 4: Visit to a local school',
        'Day 5: Departure'
      ],
      activities: 'Enhanced Understanding, Hands-on Learning, Collaboration and Teamwork, Creativity and Innovation',
      pricing: 'The price for Trip 1 is $1000. This includes accommodation, meals, local transport, and all activities. Flights are not included.',
      ageGroup: 'This trip is suitable for people aged 8 and above.',
      prerequisites: 'No prior experience is needed. However, a moderate level of fitness is required for the hiking activity.',
    }
    // Add more trips here
  ];
}
