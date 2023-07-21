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
      summary: "This blog post provides valuable tips on how to plan educational trips, ensuring a well-organized and enriching experience for students. It covers essential aspects such as starting early, choosing the right destination, planning the itinerary, setting a budget, obtaining permission, being flexible, and prioritizing fun and engagement.",
      content: [
        { heading: "Start early", content: "Planning an educational trip takes time, so it's important to start early. This will give you plenty of time to research destinations, book flights and accommodations, and get permission from parents and schools. Early planning also allows for better coordination and ensures availability of desired venues, activities, and accommodations." },
        { heading: "Choose the right destination", content: "When selecting a destination for an educational trip, consider the curriculum and the interests of the students. Look for places that provide relevant learning opportunities and align with educational goals. Additionally, factor in the budget and time constraints to choose a destination that offers the most value within your resources." },
        { heading: "Plan the itinerary", content: "Once you've chosen a destination, plan the itinerary in detail. Determine which activities the students will participate in, where they'll stay, and how they'll get around. Balance educational visits with recreational activities to create a well-rounded experience. Allow for flexibility in the schedule to accommodate unexpected changes or additional learning opportunities that may arise." },
        { heading: "Set a budget", content: "It's crucial to establish a budget for the trip before diving into the planning process. Consider all expenses, including transportation, accommodation, meals, entry fees, and additional activities. Setting a budget helps you stay on track and make informed decisions about resource allocation throughout the planning process." },
        { heading: "Get permission from parents and schools", content: "Before making any bookings, obtain permission from parents and schools. Communicate the educational objectives, itinerary details, safety measures, and expected costs clearly. Ensure that all stakeholders are aware of the trip's educational value, safety precautions, and the benefits it offers to the students' development." },
        { heading: "Be flexible", content: "Recognize that things don't always go according to plan, so it's essential to be flexible. Prepare contingency plans for unforeseen circumstances such as bad weather or flight cancellations. Have alternatives and backup options available to minimize disruptions and keep the trip running smoothly." },
        { heading: "Have fun!", content: "Remember that educational trips should be enjoyable and engaging for students. Include activities that are not only educational but also fun and interactive. Incorporate hands-on experiences, interactive workshops, and team-building activities that help students learn while having a great time." },
      ],
        end: "By following these tips, you can plan and execute educational trips that provide memorable and impactful experiences for students. These trips go beyond classroom learning, fostering a love for exploration, expanding knowledge, and facilitating personal growth.",
    },
    {
      id: 2,
      title: "The Benefits of Educational Trips for Students",
      featuredImage: "assets/images/blog4.jpg",
      summary: "This blog post delves into the various benefits that educational trips offer to students. It highlights improved learning outcomes, increased knowledge and understanding, the development of critical thinking skills, and improved communication skills as some of the advantages students gain through participating in educational trips.",
      content: [
        {heading: "Improved learning outcomes", content: "Students who participate in educational trips tend to have improved learning outcomes. By experiencing real-world applications of classroom knowledge, students can better understand and retain information. Educational trips provide opportunities for hands-on learning, enabling students to connect theoretical concepts with practical experiences, thereby enhancing their comprehension and retention of subject matter."},
        {heading: "Increased knowledge and understanding", content: "Educational trips play a significant role in expanding students' knowledge and understanding. They provide exposure to different cultures, historical events, scientific concepts, and more. Students can witness historical landmarks, interact with experts, explore museums, and engage in immersive experiences that deepen their understanding of various subjects. These experiences promote a broader perspective and foster a lifelong appreciation for learning."},
        {heading: "Developed critical thinking skills", content: "Educational trips contribute to the development of critical thinking skills. Students are faced with new and unfamiliar environments where they must think on their feet and find solutions to challenges. Navigating through different settings, interacting with locals, and encountering unique situations require adaptability, problem-solving, and analytical thinking. These experiences encourage students to think critically, make decisions, and develop resourcefulness."},
        {heading: "Improved communication skills", content: "Educational trips offer opportunities for students to enhance their communication skills. Interacting with people from different backgrounds and cultures requires effective communication and understanding. Students learn to express themselves clearly, actively listen, and collaborate with others to overcome language and cultural barriers. These experiences foster empathy, tolerance, and the ability to engage in meaningful conversations, ultimately improving communication skills."},
      ],
      end :"By participating in educational trips, students benefit from improved learning outcomes, increased knowledge and understanding, the development of critical thinking skills, and improved communication abilities. These experiences complement classroom learning, nurture personal growth, and cultivate lifelong skills that prepare students for future academic and professional endeavors."
    },
    {
      id:3,
      title: "Tips for Choosing the Right Educational Trip Destination",
      featuredImage: "assets/images/blog3.jpg",
      summary: "This blog post offers valuable tips on how to select the ideal destination for an educational trip. It emphasizes considering the curriculum relevance, student interests, budgetary considerations, time constraints, and conducting thorough research to make an informed decision.",
      content: [
        {
          heading: "Consider the curriculum",
          content: "When choosing an educational trip destination, it is crucial to align it with the curriculum. Reflect on the learning objectives and what you hope students will gain from the trip. Ensure that the destination offers relevant educational opportunities where students can apply what they have learned in the classroom to real-world experiences. This connection enhances their understanding and reinforces classroom teachings."
        },
        {
          heading: "Consider the interests of the students",
          content: "To maximize student engagement and enthusiasm, consider their interests when selecting a destination. Inquire about their preferences and what they would like to learn and explore. Choosing a destination that aligns with their interests not only enhances their motivation but also helps them derive the most benefit from the trip."
        },
        {
          heading: "Factor in the budget",
          content: "Determine the budget available for the trip. Understanding the financial constraints will help you narrow down destination options that fit within your budget. Consider all expenses, including transportation, accommodation, meals, entry fees, and additional activities. This thoughtful approach ensures a financially feasible trip without compromising the quality of the educational experience."
        },
        {
          heading: "Consider the time constraints",
          content: "Take into account the available time for the trip. Assess the duration of the trip and the time it takes to reach the destination. Choose a location that is easily accessible within the given time frame. It's essential to plan realistically, considering travel time, potential jet lag, and the amount of time needed to explore the destination adequately."
        },
        {
          heading: "Do your research",
          content: "Once you have identified a few potential destinations, conduct thorough research. Gather information about each location's educational opportunities, landmarks, museums, cultural experiences, and safety considerations. Review testimonials, travel guides, and online resources to gain insights and make an informed decision. Researching will help you select the destination that best aligns with your educational goals and the needs of your student group."
        }
      ],
      end : "By following these tips, you can make a well-informed decision when choosing the right destination for your educational trip. A carefully selected destination enhances the educational value of the trip and ensures a memorable and impactful experience for students."
    },
    {
      id: 4,
      "title": "How to Plan an Educational Trip",
      "featuredImage": "assets/images/blog2.jpg",
      "summary": "This blog post provides essential tips on planning an educational trip, ensuring a well-organized and meaningful experience for students. It emphasizes starting early, choosing a curriculum-relevant destination, involving students in the planning process, setting a budget, conducting thorough research, obtaining necessary permissions, booking accommodations and flights in advance, and being flexible in case of unforeseen circumstances.",
      "content": [
        {
          "heading": "Start early",
          "content": "Planning an educational trip takes time, so it's crucial to start the process early. This allows ample time for research, securing permissions, and making necessary arrangements. Starting early ensures you have sufficient time to explore destinations, compare options, and make informed decisions to create a well-crafted trip itinerary."
        },
        {
          "heading": "Choose a destination that is relevant to the curriculum",
          "content": "Selecting a destination aligned with the curriculum enhances students' understanding of how classroom concepts apply in the real world. It provides them with practical examples, allowing for meaningful connections between academic studies and real-life experiences. Consider destinations that offer educational opportunities that complement and reinforce classroom learning."
        },
        {
          "heading": "Make sure the trip is well-organized and well-planned",
          "content": "Effective organization and planning are crucial for a successful educational trip. Ensure all logistics, including transportation, accommodations, and activities, are thoughtfully arranged. A well-planned trip minimizes disruptions and creates a positive experience for all participants, maximizing educational outcomes."
        },
        {
          "heading": "Involve students in the planning process",
          "content": "Engaging students in the planning process fosters their ownership and investment in the trip. Seek their input, preferences, and suggestions. By involving them, you can tailor the trip to their interests and make it more relevant and engaging. This participation enhances their excitement and commitment to the educational journey."
        },
        {
          "heading": "Provide students with opportunities to reflect on their experiences",
          "content": "Encourage students to reflect on their experiences during and after the trip. Incorporate reflection activities that allow them to process what they have learned and make connections between academic studies and their personal lives. Reflection enhances deeper understanding and long-term retention of knowledge."
        },
        {
          "heading": "Set a budget and stick to it",
          "content": "Establish a budget for the trip and allocate funds wisely. Setting a budget ensures financial discipline and prevents overspending. Prioritize expenses based on educational goals and choose cost-effective options without compromising the quality of the trip."
        },
        {
          "heading": "Do your research",
          "content": "Conduct thorough research on potential destinations. Gather information about educational attractions, safety considerations, local resources, and cultural experiences. Evaluate the suitability of each destination based on educational objectives, budget constraints, and logistical feasibility. Researching enables you to make informed decisions and select the most suitable destination for your group."
        },
        {
          "heading": "Get permission from parents and schools",
          "content": "Obtain necessary permissions from parents and schools before proceeding with the trip. Effective communication with parents and school authorities ensures safety measures are in place and that everyone is informed and supportive of the educational journey."
        },
        {
          "heading": "Book flights and accommodations early",
          "content": "Secure flights and accommodations in advance to take advantage of better deals and availability. Early bookings provide peace of mind, especially during peak travel seasons when availability may be limited."
        },
        {
          "heading": "Plan the itinerary",
          "content": "Once flights and accommodations are confirmed, plan the itinerary meticulously. Determine the activities students will participate in, arrange suitable accommodations, and consider transportation arrangements. A well-structured itinerary ensures a balanced and enriching experience for students."
        },
        {
          "heading": "Be flexible",
          "content": "Flexibility is crucial when planning an educational trip. Unexpected circumstances may arise, such as unavailability of desired destinations or changes in circumstances. Be prepared to consider alternative options and adapt the itinerary to ensure a smooth and enjoyable trip."
        }
      ],
      end : "By following these tips, you can plan and execute an educational trip that provides students with a transformative learning experience, expands their horizons, and fosters personal and academic growth."
    }
  ];
}
