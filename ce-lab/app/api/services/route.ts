import { NextResponse } from "next/server";

export async function GET() {
  const services = [
    {
      id: 1,
      title: "Corporate Training",
      description:
        "Corporate training enhances employees' skills, knowledge, and performance, aligning their expertise with business goals through structured learning programs.",
    },
    {
      id: 2,
      title: "IT Technical Training",
      description:
        "IT technical training covers essential software, hardware, and networking skills to prepare individuals for technology-driven roles in various industries.",
    },
    {
      id: 3,
      title: "Java Fullstack",
      description:
        "Java Fullstack training focuses on frontend and backend development, covering Java, Spring Boot, React.js, and database management.",
    },
    {
      id: 4,
      title: "Cloud",
      description:
        "Cloud training covers AWS, Azure, and Google Cloud platforms, emphasizing cloud architecture, deployment, and security best practices.",
    },
    {
      id: 5,
      title: "DevOps",
      description:
        "DevOps training teaches automation, CI/CD pipelines, and collaboration tools for faster software development and improved deployment processes.",
    },
    {
      id: 6,
      title: "Data Analytics / Data Science",
      description:
        "This training covers data analysis, visualization, machine learning, and Python tools to extract insights from data.",
    },
    {
      id: 7,
      title: "Internships",
      description:
        "Internships provide hands-on experience in real-world projects, enhancing technical skills and industry exposure for students and freshers.",
    },
    {
      id: 8,
      title: "Capstone Projects",
      description:
        "Capstone projects involve end-to-end development, integrating learned skills to build practical, real-world solutions for diverse industries.",
    },
  ];

  return NextResponse.json(services, { status: 200 });
}
