import React from 'react';
import content from '../../content/skills.json';

const Skills: React.FC = () => {
  return (
    <section>
      {Object.entries(content.groups).map(([group, skills]) => (
        <div key={group}>
          <h4>{group}</h4>
          <div>{skills.map(([name]) => <span key={name}>{name}</span>)}</div>
        </div>
      ))}
    </section>
  );
};

export default Skills;
