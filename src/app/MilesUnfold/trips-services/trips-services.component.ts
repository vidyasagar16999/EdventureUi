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
      id: 1,
      title: 'Agriculture/Nature Visit',
      description: 'Step into the world of farming and agriculture! Witness the process of food production from sowing seeds to reaping crops.',
      activities: 'Paddy Transplantation, Sowing, Seed testing, Soil Preparation, Natural Pest Preparation, Natural Compost Preparation',
      groupSize: '100-150',
      duration: '4 Hrs',
      ageGroup: '8+',
      targetAreas: 'Understanding sustainable farming practices, appreciation of nature and biodiversity, team-building, relaxation and stress relief.',
      url: 'assets/images/agri-naidu.jpeg',
      alt: 'Image 1 description'
    },
    {
      id: 2,
      title: 'Farm School',
      description: 'This innovative farm combines Organic Farming, Vermiculture, Hydroponics, Aquaponics, Soil Testing, and Apiculture, creating a harmonious ecosystem where sustainable agriculture and modern techniques blend to produce eco-friendly and products.',
      activities: 'Organic Farming, Vermiculture, Hydrophonics, Aquaphonics, Soil Testing, Apiculture (Honey bee)',
      groupSize: '100-150',
      duration: '4 Hrs',
      ageGroup: '8+',
      targetAreas: 'Understanding sustainable farming practices, appreciation of nature and biodiversity, team-building, relaxation and stress relief.',
      url: 'assets/images/ppfarm1.jpeg',
      alt: 'Image 1 description'
    },
    {
      id: 3,
      title: 'Active Industry',
      description: 'An Active Industry provides students a practical perspective of the industry functioning. It provides students with an opportunity to learn practically through interaction, working methods.',
      activities: 'Hands-on preparation of candles, chocolate, floor cleaner, detergant powder, soap preparation',
      groupSize: '100-150',
      duration: '3 Hrs',
      ageGroup: '8+',
      targetAreas: 'Practical learning, Industry exposure, Understanding of industrial procedures, Knowledge expansion.',
      url: 'assets/images/soap.jpg',
      alt: 'Image 1 description'
    },
    {
      id: 4,
      title: 'Science and Technology',
      description: 'Hands-on educational program designed to provide students with real-world experiences and practical applications in the fields of science, technology.',
      activities: 'Enhanced Understanding, Hands-on Learning of Solar panel lab, Science Park Visit, Science Activities that includes Acid and Base, TDS Water testing, Glow in the night experiment, fire extinguisher',
      groupSize: '100-150',
      duration: '2 Hrs',
      ageGroup: '8+',
      targetAreas: 'Solar Panel, SCience Park',
      url: 'assets/images/science.jpg',
      alt: 'Image 1 description'
    },
    {
      id: 5,
      title: 'Science Park',
      description: 'Hands-on educational program designed to provide students with real-world experiences and practical applications in the fields of science',
      activities: 'Enhanced Understanding, Science Park Visit (60 Experiments)',
      groupSize: '100-150',
      duration: '2 Hrs',
      ageGroup: '8+',
      targetAreas: 'Solar Panel, SCience Park',
      url: 'assets/images/doscience.jpg',
      alt: 'Image 1 description'
    },
    {
      id: 6,
      title: 'Pochampally',
      description: 'Join us on a trip to Pochampally, a village famous for its beautiful hand-woven sarees. Watch local craftsmen create colorful patterns on cloth using age-old techniques.',
      activities: 'Handloom, weaving, dying, bleaching & take a tour of the weaving museum',
      groupSize: 'Itinerary details for Trip 1.',
      duration: 'Itinerary details for Trip 1.',
      ageGroup: 'Age group recommendation for Trip 1.',
      targetAreas: 'Introduction to film production, creative learning, appreciation of art and culture, team building, and interactive fun.',
      url: 'assets/images/pochampally.jpg',
      alt: 'Image 2 description'
    },
    // {
    //   id: 7,
    //   title: 'Nehru Zoological Park',
    //   description: 'Experience wildlife like never before at the Nehru Zoological Park. Our trip provides students the opportunity to learn about a wide array of animals, their habitats, and the importance of conservation efforts.',
    //   activities: 'Guided zoo tour, interactive discussions about wildlife conservation, visit to the zoos aquarium and butterfly house.',
    //   groupSize: 'Itinerary details for Trip 1.',
    //   duration: 'Itinerary details for Trip 1.',
    //   ageGroup: 'Age group recommendation for Trip 1.',
    //   targetAreas: 'Biology, environmental science, animal behavior, conservation awareness, observational skills.',
    //   url: 'assets/images/zoo1.jpg',
    //   alt: 'Image 1 description'
    // },
    {
      id: 8,
      title: 'SalarJung Museum',
      description: 'A visit to Salar Jung Museum, one of the three National Museums of India, will let students explore a broad range of art objects from across the world. The trip will be an educational journey through the realms of history, culture, and art.',
      activities: 'Exploration of various exhibits, Interactive Displays',
      groupSize: 'Itinerary details for Trip 1.',
      duration: 'Itinerary details for Trip 1.',
      ageGroup: 'Age group recommendation for Trip 1.',
      targetAreas: 'History, culture, art appreciation, cognitive development.',
      url: 'assets/images/salarjung.jpeg',
      alt: 'Image 1 description'
    },
    {
      id: 9,
      title: 'Parle Factory Visit',
      description: 'Witness the mesmerizing transformation of simple ingredients into your favorite Parle biscuits. From mixing and baking to packaging',
      activities: 'Making dough by mixing ingredients, Process of fermentation, Giving the shape, Baking raw biscuits, Testing, packaging and supply',
      groupSize: 'Itinerary details for Trip 1.',
      duration: 'Itinerary details for Trip 1.',
      ageGroup: 'Age group recommendation for Trip 1.',
      targetAreas: 'Introduction to film production, creative learning, appreciation of art and culture, team building, and interactive fun.',
      url: 'assets/images/parle.png',
      alt: 'Image 2 description'
    },
    {
      id: 10,
      title: 'Coca Cola Factory Visit',
      description: 'An incredible opportunity to see how one of the world’s most popular drinks is made, from start to finish',
      activities: 'different stages involved in producing a bottle of Coca Cola',
      groupSize: 'Itinerary details for Trip 1.',
      duration: 'Itinerary details for Trip 1.',
      ageGroup: 'Age group recommendation for Trip 1.',
      targetAreas: 'Introduction to film production, creative learning, appreciation of art and culture, team building, and interactive fun.',
      url: 'assets/images/cocacola.jpg',
      alt: 'Image 2 description'
    },
    {
      id: 11,
      title: 'Masqati Dairy Products',
      description: 'Step into the wholesome world of the Masqati dairy farm on a memorable trip',
      activities: 'Walk through different units, Milk packaging Unit, Ghee Preparation, Flavoured milk like Badam (almond) milk is prepared and then bottled',
      groupSize: 'Itinerary details for Trip 1.',
      duration: 'Itinerary details for Trip 1.',
      ageGroup: 'Age group recommendation for Trip 1.',
      targetAreas: 'Introduction to film production, creative learning, appreciation of art and culture, team building, and interactive fun.',
      url: 'assets/images/masqati1.JPG',
      alt: 'Image 2 description'
    },
    {
      id: 12,
      title: 'Zinda Tilasmath',
      description: 'learn about the fascinating history of the medicine, which dates back to the times of the Nizams and carries with it stories of alchemic secrets and cultural significance',
      activities: 'Exploring the heritage and the process that goes into making the renowned home remedy',
      groupSize: 'Itinerary details for Trip 1.',
      duration: 'Itinerary details for Trip 1.',
      ageGroup: 'Age group recommendation for Trip 1.',
      targetAreas: 'Introduction to film production, creative learning, appreciation of art and culture, team building, and interactive fun.',
      url: 'assets/images/zinda.jpg',
      alt: 'Image 2 description'
    },
    {
      id: 13,
      title: 'Nagarjuna Sagar',
      description: 'Discover the marvel of engineering and human accomplishment at Nagarjuna Sagar, the world’s tallest masonry dam. This trip combines learning experience about the dam and its surrounding ecology.',
      activities: 'Guided tour of the dam, learning about its construction and functions, visit to the Nagarjuna Konda Island Museum, exploration of the surrounding wildlife and nature.',
      groupSize: 'Itinerary details for Trip 1.',
      duration: 'Itinerary details for Trip 1.',
      ageGroup: 'Age group recommendation for Trip 1.',
      targetAreas: 'Understanding of engineering and hydroelectric power, environmental education, historical and cultural knowledge and exploration.',
      url: 'assets/images/nagarjuna sagar.jpeg',
      alt: 'Image 3 description'
    },  
    {
      id: 14,
      title: 'Sericulture',
      description: 'Sericulture is the process of growing silkworms and harvesting their silk. A sericulture visit provides an opportunity to explore the fascinating world of silk production.',
      activities: 'Moriculture, Silkworm rearing, Silk reeling',
      groupSize: 'Itinerary details for Trip 1.',
      duration: 'Itinerary details for Trip 1.',
      ageGroup: 'Age group recommendation for Trip 1.',
      targetAreas: 'Physics, engineering principles, team building, safety awareness.',
      url: 'assets/images/sericulture.jpeg',
      alt: 'Image 2 description'
    },
    // {
    //   id: 15,
    //   title: "South India's Biggest Rice Cluster",
    //   description: 'Rice Milling is the process of removing the husk and bran layers from the paddy and producing a white rice kernel that is free of impurities.',
    //   activities: 'Steam Process, Boil Process, Power generation from Husk',
    //   groupSize: 'Itinerary details for Trip 1.',
    //   duration: 'Itinerary details for Trip 1.',
    //   ageGroup: 'Age group recommendation for Trip 1.',
    //   targetAreas: 'Physics, engineering principles, team building, safety awareness.',
    //   url: 'assets/images/ricecluster.jpeg',
    //   alt: 'Image 2 description'
    // },
    {
      id: 16,
      title: "Cars Museum",
      description: 'A visit to the Sudha Cars Museum in Hyderabad is a journey through a world of whimsical and inventive automobile designs. The museum displays "crazy cars" that resemble everyday objects and these cars are handmade',
      activities: 'Visit Unique Handmade Vehicles, Innovative Creations',
      groupSize: 'Itinerary details for Trip 1.',
      duration: 'Itinerary details for Trip 1.',
      ageGroup: 'Age group recommendation for Trip 1.',
      targetAreas: 'Physics, engineering principles, team building, safety awareness.',
      url: 'assets/images/sudhacars3.jpg',
      alt: 'Image 2 description'
    },
    {
      id: 17,
      title: "Disaster Response & Fire Services",
      description: 'Students will get to see the various firefighting equipment such as fire trucks, ladders, and protective gear. Educate and train students in fire prevention and firefighting techniques',
      activities: 'Prompt Response to Emergencies, understanding of Disaster management and the precautions',
      groupSize: 'Itinerary details for Trip 1.',
      duration: 'Itinerary details for Trip 1.',
      ageGroup: 'Age group recommendation for Trip 1.',
      targetAreas: 'Physics, engineering principles, team building, safety awareness.',
      url: 'assets/images/firestation.jpeg',
      alt: 'Image 2 description'
    },
    {
      id: 18,
      title: "Students Traffic Training",
      description: 'A visit to the Traffic Training Institute provides valuable insights into road safety, traffic management, and law enforcement. ',
      activities: 'Traffic education & road safety rules',
      groupSize: 'Itinerary details for Trip 1.',
      duration: 'Itinerary details for Trip 1.',
      ageGroup: 'Age group recommendation for Trip 1.',
      targetAreas: 'Physics, engineering principles, team building, safety awareness.',
      url: 'assets/images/trafficstation1.jpg',
      alt: 'Image 2 description'
    },
    // {
    //   id: 20,
    //   title: 'Mount-Opera',
    //   description: 'Mount Opera, one of the largest amusement parks and resorts in the country, offers a perfect blend of thrill and relaxation. This trip will allow students to enjoy a wide variety of rides, attractions, and games in a fun, engaging environment.',
    //   activities: 'Exploration of the park, Thrill Rides, Water Park Adventures, Adventure Activities',
    //   groupSize: 'Itinerary details for Trip 1.',
    //   duration: 'Itinerary details for Trip 1.',
    //   ageGroup: 'Age group recommendation for Trip 1.',
    //   targetAreas: 'Fun, recreation, team building, social skills.',
    //   url: 'assets/images/mount-opera-star-resort.jpg',
    //   alt: 'Image 3 description'
    // },
    // {
    //   id: 21,
    //   title: 'BM Science Planatary',
    //   description: 'Embark on an interstellar adventure at the BM Science Planetarium. Our educational tour is designed to inspire a love of astronomy in students, while also teaching them about the fundamentals of space science in a fun and engaging way.',
    //   activities: 'Planetarium show featuring current astronomical phenomena, exploring space science principles, guided tour discussing the history and future of space exploration.',
    //   groupSize: 'Itinerary details for Trip 1.',
    //   duration: 'Itinerary details for Trip 1.',
    //   ageGroup: 'Age group recommendation for Trip 1.',
    //   targetAreas: 'Astronomy, space science, scientific curiosity, critical thinking, team building.',
    //   url: 'assets/images/bmscience.jfif',
    //   alt: 'Image 1 description'
    // },
    // {
    //   id: 22,
    //   title: 'Ramoji Film City',
    //   description: 'Dive into a world of excitement and learning at Ramoji Film City, the world’s largest integrated film city.',
    //   activities: 'Guided tour of film sets, movie magic show, amusement rides at Fundustan, adventure activities, live shows, and interactive entertainment zones.',
    //   groupSize: 'Itinerary details for Trip 1.',
    //   duration: 'Itinerary details for Trip 1.',
    //   ageGroup: 'Age group recommendation for Trip 1.',
    //   targetAreas: 'Introduction to film production, creative learning, appreciation of art and culture, team building, and interactive fun.',
    //   url: 'assets/images/ramoji.jpg',
    //   alt: 'Image 2 description'
    // },
    // {
    //   id: 23,
    //   title: 'Wonderla',
    //   description: 'Experience the thrill of cutting-edge rides and attractions at Wonderla, one of the best amusement parks in the country. This trip aims to provide students a fun-filled day.',
    //   activities: 'Thrill Rides, Water Park Adventures, Interactive Gaming Zones, Adventure Sports',
    //   groupSize: 'Itinerary details for Trip 1.',
    //   duration: 'Itinerary details for Trip 1.',
    //   ageGroup: 'Age group recommendation for Trip 1.',
    //   targetAreas: 'Physics, engineering principles, team building, safety awareness.',
    //   url: 'assets/images/wonder11.webp',
    //   alt: 'Image 2 description'
    // },
    // Add more trip objects with their details here
  ];
}
