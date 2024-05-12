import { Content } from '@angular/compiler/src/render3/r3_ast';
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
      this.blogDetail = this.getBlogs(id);
    } else {
      // Handle the error or scenario where id is null
    }
    console.log(this.blogDetail);
  }

  getBlogs(id: string): any {
    return this.blogs.find(blogs => blogs.id === id);
  }

  blogs = [
    
    {
      id: 'Educational-Tour-Benefits-for-Students:Top-5-Insights',
      title: "Educational Tour Benefits for Students: Top 5 Insights",
      featuredImage: "assets/images/blogedbe1.png",
      summary: "Every parent and teacher knows how challenging it is to keep students engaged. But what if there’s a proven way to enhance their learning outside the classroom ? I promise to share how educational tours can dramatically improve learning.You'll discover the top five insights that show why these trips are so beneficial.Prepare to see education in a whole new light!",
      content: [
        {heading: "Enhanced Learning", content: [
          { subcontent :"Educational tours provide students with the chance to learn beyond textbooks."},
          { subcontent : "By immersing themselves in new cultures and customs, students gain a deeper understanding of the around them."}
        ]},
        {heading: "Skill Development", content: [
          { subcontent :"Educational tours encourage the improvement of social skills through interactions with peers and locals."},
          { subcontent : "Students experience a boost in problem-solving abilities by navigating unfamiliar environments and scenarios."},
          { subcontent : "Participation in group activities fosters teamwork and collaboration skills."}
        ]},
        {heading: "Personal Growth", content: [
          { subcontent :"Educational tours help students build independence and confidence as they navigate new surroundings."},
          { subcontent : "Adapting to different environments teaches students resilience and flexibility."}
        ]},
        {heading: "Career Inspiration", content: [
          { subcontent :"Exposure to various professions during educational tours can spark interest in different career paths."},
          { subcontent : "Students witness real-world applications of school subjects, connecting classroom knowledge to practical experiences."}
        ]},
        {heading: "Lifelong Memories", content: [
          { subcontent :"Educational tours offer students the chance to form lasting bonds with their peers."},
          { subcontent : "Fun and unique experiences create memories that students cherish for years to come."}
        ]},
      ],
      end :"In conclusion, educational tours provide students with invaluable opportunities for enhanced learning, skill development, personal growth, career inspiration, and lifelong memories. I encourage every student to explore the transformative benefits of educational tours and seize the chance to broaden their horizons."
    },
    {
      id: 'Guide-to-Planning-Successful-Educational-Tours',
      title: 'Guide to Planning Successful Educational Tours',
      featuredImage: "assets/images/blogedplan.png",
      summary: "Ever felt overwhelmed while planning an educational tour? You're not alone. Fortunately, I've navigated these before and found a few secrets to share. In this post, I'll outline five essential strategies that ensure a smooth, educational adventure. Discover how to enhance learning, engage students, and organize without hassle.Join me as we dive into the ultimate guide to planning successful educational tours.",
      content: [
        {heading: "Understanding the Objectives", content: [
          { subcontent :"Define educational goals: Before embarking on planning an educational tour, it is crucial to clearly define the objectives and learning outcomes you aim to achieve. Are you looking to enhance historical knowledge, promote cultural understanding, or improve teamwork skills?"},
          { subcontent : "Identify target age group: Tailoring the tour to the appropriate age group is essential for maximizing engagement and educational impact. Consider the students' interests, cognitive abilities, and prior knowledge."},
          { subcontent : "Outcomes and takeaway: Reflect on what you want the participants to gain from the tour. Whether it's increased cultural awareness, improved critical thinking skills, or enhanced social interaction, having clear outcomes in mind will guide your planning process effectively."}
        ]},
        {heading: "Choosing the Right Destination", content: [
          { subcontent :"Cultural relevance to curriculum: Select a destination that aligns with the topics covered in the curriculum. This ensures that the tour enhances classroom learning and provides real-world context for the students."},
          { subcontent : "Safety and accessibility: Prioritize the safety and accessibility of the chosen location. Conduct thorough research on the destination's security measures, healthcare facilities, and transportation options to ensure a smooth and secure educational experience."},
          { subcontent : "Timing and climate factors: Consider the timing of the tour to coincide with favorable weather conditions and avoid peak tourist seasons. This allows for a more enjoyable and comfortable experience for both students and educators."}
        ]},
        {heading: "Budgeting and Funding", content: [
          { subcontent :"Estimating costs: Create a detailed budget that includes transportation, accommodation, meals, entrance fees, and any additional expenses. Consider all possible costs to avoid unexpected financial constraints during the tour."},
          { subcontent : "Fundraising ideas: Explore creative fundraising ideas such as bake sales, car wash events, or online crowdfunding campaigns to offset the tour expenses. Engaging students and parents in fundraising activities fosters a sense of ownership and commitment to the tour."},
          { subcontent : "Seeking sponsorship and grants: Reach out to local businesses, organizations, and educational foundations for potential sponsorship or grant opportunities. Many companies are willing to support educational initiatives that benefit the community and contribute to student learning."},
        ]},
        {heading: "Logistics and Planning", content: [
          { subcontent :"Transportation and accommodations: Arrange reliable transportation and suitable accommodations that cater to the group's size and needs. Whether it's booking charter buses, reserving hotels, or arranging homestays, plan logistics that prioritize comfort and convenience."},
          { subcontent : "Meal arrangements: Coordinate meal options that cater to dietary restrictions, preferences, and cultural considerations. Research local cuisine and incorporate food experiences that enrich the cultural aspect of the educational tour."},
          { subcontent : "Emergency plans: Develop comprehensive emergency plans that address medical emergencies, natural disasters, or unforeseen circumstances. Communicate emergency procedures to all participants and ensure access to emergency contact information throughout the tour."},
        ]},
        {heading: "Engagement and Activities", content: [
          { subcontent :"Interactive learning experiences: Organize interactive activities and educational workshops that encourage active participation and hands-on learning. Engage local experts, historians, or guides to provide insightful perspectives on the destination's history and culture."},
          { subcontent : "Guides and experts involvement: Collaborate with knowledgeable guides and experts who can enhance the educational experience with their expertise and storytelling skills. Their insights and anecdotes can bring history and culture to life for the students."},
          { subcontent : "Post-tour activities and assessments: Plan post-tour activities that continue the learning experience beyond the trip. Conduct assessments to evaluate the students' knowledge retention and understanding of the tour's educational objectives. Encourage reflection and feedback to improve future educational tours."},
        ]},
      ],
        end: "In conclusion, successful educational tours require careful planning, strategic decision-making, and a focus on meaningful learning outcomes. By following these proven strategies, educators can create enriching and impactful experiences that broaden students' horizons and foster lifelong learning. Start planning your next educational tour today and watch your students' learning journey unfold!",
    },
    {
      id: 'How-to-Choose-the-Right-Field-Trip-Destination',
      title: "How to Choose the Right Field Trip Destination",
      featuredImage: "assets/images/blogdes.png",
      summary: "Choosing the perfect field trip location is challenging. Every teacher wants to blend education with excitement.But how? I'll share secrets to making your next field trip unforgettable. Discover factors that ensure both fun and learning,Strategic tips for logistical planning, And how to cater to varied educational needs.",
      content: [
        {heading: "Understanding Objectives", content: [
          { subcontent : "*Educational goals*: Define the learning outcomes you want to achieve through the field trip."},
          { subcontent : "*Recreational benefits*: Consider how the location can provide a fun and enjoyable experience for the participants."},
          { subcontent : "*Aligning with curriculum*: Choose a destination that aligns with the curriculum or matches the interests of the group."}
        ]},
        {heading: "Setting the Budget", content: [
          { subcontent :"*Estimating costs*: Calculate travel expenses, entry fees, and any additional costs involved."},
          { subcontent : "*Funding options*: Explore tips for securing sponsorships or funding opportunities."},
          { subcontent : "*Budget-friendly options*: Look for destinations that offer affordable packages or discounts for school groups."}
        ]},
        {heading: "Safety First", content: [
          { subcontent :"*Evaluating safety*: Prioritize locations with a good safety record and proper precautions in place."},
          { subcontent : "*Preparations*: Ensure all necessary permissions and insurance arrangements are in order."},
          { subcontent : "*Risk assessment*: Conduct a thorough risk assessment to address potential hazards and emergencies."},
        ]},
        {heading: "Logistics and Timing", content: [
          { subcontent :"*Best time to visit*: Consider the seasonal variations and peak times for specific locations."},
          { subcontent : "*Travel considerations*: Factor in travel time, distance, and transportation options."},
          { subcontent : "*Facilities*: Check for availability of food, facilities, and accommodation if needed."},
        ]},
        {heading: "Engagement Opportunities", content: [
          { subcontent :"*Interactive elements*: Look for destinations that offer hands-on learning experiences and interactive activities."},
          { subcontent : "*Hands-on learning*: Provide opportunities for students to engage in practical, experiential learning."},
          { subcontent : "*Group collaboration*: Choose locations that encourage teamwork and group participation."},
        ]},
        {heading: " Final Checklist", content: [
          { subcontent :"*Key factors*: Recap the essential elements to consider when choosing a field trip destination."},
          { subcontent : "*Pre-visit preparations*: Ensure all necessary arrangements and reservations are made in advance."},
          { subcontent : "*Meeting needs*: Double-check that all requirements are met to guarantee a successful trip."},
        ]},
      ],
      end : "In conclusion, choosing the right field trip destination requires strategic planning, research, and consideration of various factors. By following the steps outlined in this blog post, educators and organizers can make informed decisions that will enhance the learning experience for participants. Remember to take thoughtful steps in selecting the perfect location for a successful and enriching field trip adventure."
    },
    {
      id: 'Best-Educational-Field-Trips-Ideas-for-Students',
      title: 'Best Educational Field Trips Ideas for Students',
      featuredImage: "assets/images/blogsci.png",
      summary: "Field trips have long been recognized as valuable educational experiences for students of all ages For teenagers, these outings offer a unique opportunity to enhance learning outside the classroom gain practical knowledge in various This blog post will explore some of the best educational trip ideas tailored for students across different educational fields.",
      content: [
        {heading: "Science and Nature Trips", content: [
          { subcontent : "*Visit to a Planetarium*: A trip to a planetarium provides students with a close-up look at our fascinating universe, giving them a chance to learn about celestial bodies and space exploration."},
          { subcontent : "*Exploring a Botanical Garden*: Botanical gardens offer a hands-on experience for teenagers to explore diverse plant species, learn about ecosystems, and understand the importance of conservation."},
          { subcontent : "*Tour at a Science Museum*: Science museums provide interactive exhibits and displays that engage students in hands-on learning experiences related to physics, biology, chemistry, and more."}
        ]},
        {heading: "History and Culture Outings", content: [
          { subcontent :"*Walking Tour of Historic Downtown*: Walking tours of historic downtown areas allow teenagers to immerse themselves in the rich history of a city, learn about significant events, and explore architectural landmarks."},
          { subcontent : "*Visiting a Cultural Heritage Museum*: Cultural heritage museums offer insights into different cultures, traditions, and historical periods, helping students gain a deep appreciation for diversity and heritage."},
          { subcontent : "*Day at an Archaeological Site*: Visiting an archaeological site enables students to witness firsthand the excavation process, learn about ancient civilizations, and understand archaeological methods."}
        ]},
        {heading: "Art and Creativity Boosters", content: [
          { subcontent :"*Workshop at an Art Museum*: Art museum workshops provide students with opportunities to engage in artistic activities, learn about different art styles, and express their creativity through hands-on projects."},
          { subcontent : "* *Interactive Visit to a Music Conservatory*: Visiting a music conservatory exposes teenagers to different musical genres, instruments, and performances, fostering a love for music and inspiring potential career paths in the arts."},
        ]},
        {heading: "Technology and Innovation", content: [
          { subcontent :"*Tech Company Campus Tour*: Visiting a tech company campus gives teenagers insights into cutting-edge technology, innovation processes, and career opportunities in the tech industry."},
          { subcontent : "*Innovation Hub Experiences*: Innovation hubs offer hands-on experiences in design thinking, problem-solving, and prototyping, allowing students to explore their creativity and entrepreneurial skills."},
        ]},
        {heading: "Environmental Education", content: [
          { subcontent :"*Wildlife Reserve Safari*: Wildlife reserve safaris provide teenagers with an up-close encounter with animals in their natural habitats, raising awareness about wildlife conservation and environmental protection."},
          { subcontent : "*Conservation Park Activities*: Conservation parks offer activities such as tree planting, wildlife monitoring, and habitat restoration, giving students a chance to contribute to environmental conservation efforts."},
          { subcontent : "*Marine Biology Coastal Walk*: Coastal walks led by marine biologists educate students about coastal ecosystems, marine life, and the importance of preserving ocean environments."},
        ]},
        {heading: "Government and Politics", content: [
          { subcontent :"*State Capital Educational Tour*: State capital tours provide teenagers with insights into the legislative process, government structure, and civic engagement, empowering them to be informed citizens."},
          { subcontent : "*Mock Legislature Session*: Mock legislature sessions enable students to participate in debates, create bills, and experience the dynamics of lawmaking, enhancing their understanding of democracy and governance."},
        ]},
      ],
      end : "In conclusion, educational field trips offer unparalleled opportunities for teenagers to enrich their learning experiences, develop critical thinking skills, and deepen their understanding of various subjects. By organizing field trips that cater to students' interests across science, history, art, technology, environment, and government, educators and parents can nurture a love for learning and inspire the next generation of leaders. Encouraging teenagers to participate in these diverse educational field trip ideas is a powerful way to shape their academic growth and personal development."
    }
  ];
}
