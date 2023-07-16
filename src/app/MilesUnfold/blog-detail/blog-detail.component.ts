import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit {

  blogDetail: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log("hi");
    let id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.blogDetail = this.getBlogs(+id);
    } else {
      // Handle the error or scenario where id is null
    }
    console.log(this.blogDetail);
  }

  getBlogs(id: number): any {
    return this.blogs.find(blogs => blogs.id === id);
  }

  blogs = [
    {
      id: 1,
      title: "Tips for Planning Educational Trips",
      featuredImage: "assets/images/imageblog.jpg",
      summary: "This blog post provides tips on how to plan educational trips.",
      content: [
        { heading: "Start early", content: "Planning an educational trip takes time, so it's important to start early. This will give you plenty of time to research destinations, book flights and accommodations, and get permission from parents and schools." },
        { heading: "Choose the right destination", content: "When choosing a destination for an educational trip, it's important to consider the curriculum and the interests of the students. You'll also need to factor in the budget and the time constraints." },
        { heading: "Plan the itinerary", content: "Once you've chosen a destination, you'll need to plan the itinerary. This includes deciding which activities the students will participate in, where they'll stay, and how they'll get around." },
        { heading: "Set a budget", content: "It's important to set a budget for the trip before you start planning. This will help you to stay on track and to avoid overspending." },
        { heading: "Get permission from parents and schools", content: "Before you book any flights or accommodations, you'll need to get permission from parents and schools. This will ensure that everyone is on the same page and that the trip is approved." },
        { heading: "Be flexible", content: "Things don't always go according to plan, so it's important to be flexible when planning an educational trip. Be prepared to make changes if necessary, such as if there is bad weather or if a flight is cancelled." },
        { heading: "Have fun!", content: "Educational trips should be fun and engaging for students. Make sure to include activities that the students will enjoy and that will help them to learn." },
      ],
    },
    {
      id: 2,
      title: "The Benefits of Educational Trips for Students",
      featuredImage: "assets/images/blog4.jpg",
      summary: "This blog post discusses the benefits of educational trips for students.",
      content: [
        {heading: "Improved learning outcomes", content: "Students who participate in educational trips tend to have improved learning outcomes. This is because they are able to apply what they learn in the classroom to real-world experiences."},
        {heading: "Increased knowledge and understanding", content: "Educational trips can help students to increase their knowledge and understanding of different cultures, historical events, and scientific concepts."},
        {heading: "Developed critical thinking skills", content: "Educational trips can help students to develop critical thinking skills. This is because they are forced to think on their feet and solve problems in new and unfamiliar environments."},
        {heading: "Improved communication skills", content: "Educational trips can help students to improve their communication skills. This is because they are forced to interact with people from different backgrounds and cultures."},
      ],
    },
    {
      id:3,
      title: "Tips for Choosing the Right Educational Trip Destination",
      featuredImage: "assets/images/blog3.jpg",
      summary: "This blog post provides tips on how to choose the right educational trip destination.",
      content: [
        {
          heading: "Consider the curriculum",
          content: "What are you hoping students will learn from the trip? Make sure the destination is relevant to the curriculum and that it will provide students with opportunities to apply what they are learning in the classroom to real-world experiences."
        },
        {
          heading: "Consider the interests of the students",
          content: "Where do they want to go? What are they interested in learning about? Choosing a destination that interests the students will help them to be more engaged and to get the most out of the trip."
        },
        {
          heading: "Factor in the budget",
          content: "How much money do you have to spend on the trip? This will help you to narrow down your options and to find a destination that fits within your budget."
        },
        {
          heading: "Consider the time constraints",
          content: "How much time do you have for the trip? This will help you to choose a destination that is accessible and that can be visited in the amount of time you have available."
        },
        {
          heading: "Do your research",
          content: "Once you have a few destinations in mind, do some research to learn more about them. This will help you to make an informed decision about which destination is the best fit for your group."
        }
      ]
    },
    {
      id: 4,
      "title": "How to Plan an Educational Trip",
      "featuredImage": "assets/images/blog2.jpg",
      "summary": "This blog post provides tips on how to plan an educational trip.",
      "content": [
        {
          "heading": "Start early",
          "content": "Planning an educational trip takes time, so it's important to start early. This will give you plenty of time to research destinations, book flights and accommodations, and get permission from parents and schools."
        },
        {
          "heading": "Choose a destination that is relevant to the curriculum",
          "content": "This will help students to see how what they are learning in the classroom applies to the real world."
        },
        {
          "heading": "Make sure the trip is well-organized and well-planned",
          "content": "This will help to ensure that the trip is a positive experience for all involved."
        },
        {
          "heading": "Involve students in the planning process",
          "content": "This will help them to feel more ownership of the trip and to be more invested in the experience."
        },
        {
          "heading": "Provide students with opportunities to reflect on their experiences",
          "content": "This will help them to process what they have learned and to make connections between their academic studies and their personal lives."
        },
        {
          "heading": "Set a budget and stick to it",
          "content": "It's important to set a budget for your trip and to stick to it as much as possible. This will help you to avoid overspending."
        },
        {
          "heading": "Do your research",
          "content": "Once you have a few destinations in mind, do some research to learn more about them. This will help you to make an informed decision about which destination is the best fit for your group."
        },
        {
          "heading": "Get permission from parents and schools",
          "content": "If you are planning to take students on an educational trip, it's important to get permission from parents and schools. This will help to ensure that the trip is safe and that students are able to participate."
        },
        {
          "heading": "Book flights and accommodations early",
          "content": "This will help you to get the best deals on flights and accommodations."
        },
        {
          "heading": "Plan the itinerary",
          "content": "Once you have booked your flights and accommodations, you need to plan the itinerary. This includes deciding which activities the students will participate in, where they'll stay, and how they'll get around."
        },
        {
          "heading": "Be flexible",
          "content": "Things don't always go according to plan, so it's important to be flexible when planning an educational trip. If your first choice isn't available, be prepared to choose a different destination."
        }
      ]
    }
  ];
}
