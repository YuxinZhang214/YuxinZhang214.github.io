import React from 'react';
import ExperienceCard from './ui/ExperienceCard';
import content from '../../content/experience.json';

const Experience: React.FC = () => {
  return (
    <div className="space-y-6">
      {content.experiences.map((exp, index) => (
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