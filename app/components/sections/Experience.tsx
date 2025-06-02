import React from 'react';
import ExperienceCard from './ui/ExperienceCard';

const Experience: React.FC = () => {
  const experiences = [
    {
      company: "Saint-Gobain Research (Shanghai)",
      role: "Frontend Development, Research Engineer",
      period: "July 2024 - Nov 2024",
      description: "Developing AI-driven platforms and internal digitalization tools on low-code platforms to increase organizational productivity.",
      logo: "/experience/saint-gobain.png",
      recognition: "Top in Building Materials, Fortune 500",
      technologies: ["Python", "Plotly", "Matplotlib", "Ignition Perspective", "Flask", "FastAPI", "MS SQL", "GitLab"],
    },
    {
      company: "Saint-Gobain Research (Shanghai)",
      role: "Frontend Development Intern",
      period: "Apr 2024 - June 2024",
      description: "Worked on frontend development projects, improving user interfaces and experiences.",
      logo: "/experience/saint-gobain.png",
      recognition: "Top in Building Materials, Fortune 500",
      technologies: ["Python", "Ignition Perspective", "Flask", "FastAPI", "MS SQL", "GitLab"],
    },
    {
      company: "School of Computer Science, University of St Andrews",
      role: "Research Intern",
      period: "June 2023 - Jan 2024",
      description: "Maintained and improved four existing web applications for academic projects.",
      logo: "/experience/st-andrews.jpeg",
      recognition: "UK's Top University",
      technologies: ["Next.js", "React", "TypeScript", "JavaScript", "Tailwind CSS", "HTML", "CSS", "GitHub Actions"],
    },
  ];

  return (
    <div className="space-y-6">
      {experiences.map((exp, index) => (
        <ExperienceCard
          key={index}
          company={exp.company}
          role={exp.role}
          period={exp.period}
          description={exp.description}
          logo={exp.logo}
          recognition={exp.recognition}
          technologies={exp.technologies}
        />
      ))}
    </div>
  );
};

export default Experience;