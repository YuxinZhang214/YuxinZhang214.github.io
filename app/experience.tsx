import React from 'react';
import Image from 'next/image';

interface ExperienceCardProps {
  company: string;
  role: string;
  period: string;
  description: string;
  logo: string;
  recognition?: string; 
  technologies?: string[];
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ company, role, period, description, logo, recognition, technologies }) => (
  <div className="flex items-start mb-8">
    <div className="flex-shrink-0 mr-12">
      <Image src={logo} alt={company} width={128} height={128} />
    </div>
    <div className="flex-grow">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-bold">{company}</h3>
          <h4 className="text-lg font-semibold">{role}</h4>
          {technologies && technologies.length > 0 && (
          <div className="flex flex-wrap mt-4 gap-2">
            {technologies.map((tech, index) => (
              <span key={index} className="border border-black text-black text-sm font-medium px-2 py-1 rounded-full">
                {tech}
              </span>
            ))}
          </div>
        )}
        </div>
        <div className="text-right">
          {recognition && <p className="text-sm text-gray-500 mb-1">{recognition}</p>}
          <p className="text-gray-600">{period}</p>
        </div>
      </div>
      <p className="text-gray-700 mt-2">{description}</p>
    </div>
  </div>
);

const Experience: React.FC = () => {
  const experiences = [
    {
      company: "Saint-Gobain Research (Shanghai)",
      role: "Frontend Development, Research Engineer",
      period: "July 2024 - Present",
      description: "Developing AI-driven platforms and internal digitalization tools on low-code platforms to increase organizational productivity",
      logo: "/experience/saint-gobain.png",
      recognition: "Top in Building Materials, Fortune 500",
      technologies: ["Python", 'Plotly' ,'Matplotlib', "Ignition Perspective", "Flask", "Fast‐API", "MS SQL", "Gitlab"],
    },
    {
      company: "Saint-Gobain",
      role: "Frontend Development Intern",
      period: "Apr 2024 - June 2024",
      description: "Worked on frontend development projects, improving user interfaces and experiences",
      logo: "/experience/saint-gobain.png",
      recognition: "Top in Building Materials, Fortune 500",
      technologies: ["Python" ,"Ignition Perspective", "Flask", "Fast‐API", "MS SQL", "Gitlab"],
    },
    {
      company: "School of Computer Science, University of St Andrews",
      role: "Research Intern",
      period: "June 2023 - June 2024",
      description: "Maintained and improved four existing web applications for academic projects.",
      logo: "/experience/st-andrews.jpeg",
      recognition: "UK’s Top University",
      technologies: ["Next.js", "React", "TypeScript", "JavaScript", "Tailwind CSS", "HTML", "CSS", "GitHub Actions"],
    },
  ];

  return (
    <div className="space-y-6">
      {experiences.map((exp, index) => (
        <ExperienceCard key={index} {...exp} />
      ))}
    </div>
  );
};

export default Experience;