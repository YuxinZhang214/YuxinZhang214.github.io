import React from 'react';
import Projects from './sections/Projects';

const Project: React.FC = () => {
  return (
    <div id="projects-section" className="pb-32 space-y-8">
        <h2 className="font-satoshi-bold text-4xl mb-8">My Projects</h2>
        <Projects />
      </div>
  );
};

export default Project;