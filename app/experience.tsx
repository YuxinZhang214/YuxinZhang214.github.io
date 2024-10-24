import React from 'react';
import Image from 'next/image';

interface ExperienceCardProps {
  company: string;
  role: string;
  period: string;
  description: string;
  logo: string;
  recognition?: string; // New optional prop for company information
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ company, role, period, description, logo, recognition }) => (
  <div className="flex items-start mb-8">
    <div className="flex-shrink-0 mr-12">
      <Image src={logo} alt={company} width={128} height={128} className="" />
    </div>
    <div className="flex-grow">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-bold">{company}</h3>
          <h4 className="text-lg font-semibold">{role}</h4>
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
      role: "Frontend-development, Research Engineer",
      period: "Aug 2022 - Present",
      description: "Developing AI-driven platforms and internal digitalization tools to increase organizational productivity.",
      logo: "/experience/saint-gobain.png",
      recognition: "Fortune 250"
    },
    {
      company: "Saint-Gobain",
      role: "Frontend Development Intern",
      period: "May 2022 - Aug 2022",
      description: "Worked on frontend development projects, improving user interfaces and experiences.",
      logo: "/experience/saint-gobain.png",
      recognition: "Fortune 250"
    },
    {
      company: "School of Computer Science, University of St Andrews",
      role: "Research Intern",
      period: "May 2021 - Aug 2021",
      description: "Conducted research on computer science topics and contributed to academic projects.",
      logo: "/experience/st-andrews.jpeg",
      recognition: "Good Times UK No.1"
    },
    // Add more experiences as needed
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
