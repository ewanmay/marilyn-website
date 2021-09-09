import React from "react";
import PrioritiesItem from "./PrioritiesItem";

interface PrioritiesListProps {
  refProps: any;
}
function PrioritiesList({ refProps }: PrioritiesListProps) {
  const priorities = [
    {
      title: "Supporting Students",
      text: "Marilyn will ensure that education funding is spent effectively to directly support student needs.",
      icon: "/images/desk-dark.svg",
      link: "/priorities#support",
      commitment:
        " I WILL continue to provide oversight and hold administration accountable to directing human and financial resources to where they are needed most – supporting students in our schools.",
      points: [
        {
          title:
            "Significant progress has been made toward focussing resources directly to schools.",
          subpoints: [
            "Board system and administrative spending is capped by the Province and the CBE consistently falls below that cap.  CBE has the lowest per student spending on Board system and administration among our comparators.",
            "Over the last four years, we have further reduced central office staff – moving directors to area offices and teachers back into school based positions where they provide more direct support to schools and students.",
            "I supported a budget for the 2021/22 school year that saw an additional $3 million allocated away from administration expenses and re-directed to schools.",
          ],
        },
      ],
    },
    {
      title: "Advancing Equity",
      text: "Marilyn will continue to bring forward ideas and support policies that provide better learning opportunities for students in NE Calgary.",
      icon: "/images/scale-dark.svg",
      link: "/priorities#equity",
      commitment:
        "I WILL continue to work collaboratively with my fellow trustees to propel the advancement of equity across the CBE.",
      points: [
        {
          title:
            "Celebrating and recognizing diversity is not a replacement for expecting that inequities be addressed.  During my first term, I have been a steady advocate that if we are going to remove barriers to success, we first need to understand what those barriers are and then allocate resources in a way that will have impact. I have advanced this work through:",
          subpoints: [
            "Hiring of our Chief Superintendent who brought with him considerable experience in the advancement of equity in a school system.",
            "Significant changes to Results 2 – Academic Success Policy which will provide Trustees with higher quality data and analysis allowing the Board to see how groups of students achieve over time. ",
            "Development of the Indigenous Education Holistic Lifelong Learning Framework for implementation in Fall 2021.",
            "Development of an equity index framework that will take a wider system view of equity based on data that describes our student population with greater depth, such as attendance, high school completion rates, English language proficiency, citizenship, income and waivers, school moves and more.",
          ],
        },
      ],
    },
    {
      title: "Advocacy ",
      text: "Marilyn will continue to listen and bring forward the voices of NE Calgary families to all levels of government to make sure that they are heard and respected.",
      icon: "/images/megaphone-dark.svg",
      link: "/priorities#advocacy",
      commitment:
        "I WILL continue to ensure the voice of NE Calgary families are heard at all levels of government.",
      points: [
        {
          title: "New Schools for NE Calgary:",
          subpoints: [
            "Many NE Calgary schools are full which means that many NE Calgary students must attend school further from home.  I supported a Capital Plan that included three new school construction projects - two of them for NE Calgary; a middle school for Saddle Ridge and a high school for Cornerstone.",
            "I have met with local MLAs emphasizing the need for these new schools for NE Calgary and to express our concerns around being left out of the Province’s Spring 2021 capital announcement.",
          ],
        },
        {
          title: "Transportation:",
          subpoints: [
            "Met with the provincial Transportation Taskforce and advocated for changes to the transportation regulations to include transportation for programs of choice such as Traditional Learning Centres (TLC) and to fully fund the cost of special needs transportation.",
          ],
        },
        {
          title: "High School Engagement:",
          subpoints: [
            "Reached out to community leaders, MLAs, City Councillors and media to promote participation in surveys and meetings taking place in relation to the high school engagement.",
            "Pressed administration to ensure that materials and surveys related to the high school engagement were translated to facilitate greater participation by NE families.",
            "Supported NE students and their families in their advocacy to have the International Baccalaureate (IB) program maintained at Lester B. Pearson High School.",
          ],
        },
        {
          title: "Covid-19:",
          subpoints: [
            "For the safety of students and staff, advocated for placing school based staff in priority sequence to receive the COVID-19 vaccination.",
            "Promoted efforts to help supply technology to students to ease the burden of disruptions to their learning as staff and students moved in and out of quarantine.",
          ],
        },
        {
          title: "Curriculum:",
          subpoints: [
            "Placed students and educators first by making the decision to not pilot the draft curriculum while students and teachers continue to grapple with the disruption associated with the COVID-19 global pandemic.",
            "Due to concerns regarding the content of the draft curriculum, advocated for a delay in the implementation of the curriculum until it can be revisited and adjusted.",
            "Support a thorough review of the draft curriculum by the CBE.  As the largest school board in the province, it is important that CBE provides robust feedback to Alberta Education on the content of the curriculum.  This review will take place in the fall of 2021",
          ],
        },
      ],
    },
  ];

  return (
    <div ref={refProps} className="priorities-list" id="priorities" >
      <h4 className=" flex column center">
        Marilyn's Priorities <span className="underline" />
      </h4>
      {priorities.map((priority) => (
        <PrioritiesItem
          title={priority.title}
          icon={priority.icon}
          text={priority.text}
          link={priority.link}
          commitment={priority.commitment}
          points={priority.points}
        />
      ))}
    </div>
  );
}

export default PrioritiesList;
