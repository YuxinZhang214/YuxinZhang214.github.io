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
  <div className="flex flex-col sm:flex-row items-start mb-8 gap-4">

    {/* Logo Section */}
    <div className="flex-shrink-0">
      <Image 
        src={logo} 
        alt={company} 
        width={128} 
        height={128} 
        className="w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 rounded-md"
      />
    </div>

    {/* Content Section */}
    <div className="flex-grow">
      
      {/* Company and Role */}
      <div className="flex flex-col sm:flex-row justify-between gap-2">
        <div>
          <h3 className="text-lg sm:text-xl font-bold">{company}</h3>
          <h4 className="text-md sm:text-lg font-semibold">{role}</h4>
        </div>

        <div className="text-sm sm:text-right">
          {recognition && <p className="text-gray-500 mb-1">{recognition}</p>}
          <p className="text-gray-600">{period}</p>
        </div>
      </div>

      {/* Technologies */}
      {technologies && technologies.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-3">
          {technologies.map((tech, index) => (
            <span key={index} className="border border-gray-700 text-gray-700 text-xs sm:text-sm font-medium px-2 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>
      )}

      {/* Description */}
      <p className="text-gray-700 mt-3 text-sm sm:text-base">{description}</p>
    </div>
  </div>
);

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
        <ExperienceCard key={index} {...exp} />
      ))}
    </div>
  );
};

export default Experience;