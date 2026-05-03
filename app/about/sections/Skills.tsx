import React from 'react';
import SkillIcon from './ui/SkillIcon';
import content from '../../content/skills.json';

const Skills: React.FC = () => {
  return (
    <section className="">
      <div className="container mx-auto text-center">
        {content.categories.map((category, i) => (
          <div
            key={category.name}
            className={`flex flex-wrap justify-center gap-12 ${i < content.categories.length - 1 ? 'mb-12' : ''}`}
          >
            {category.skills.map((skill) => (
              <SkillIcon key={skill.name} src={skill.src} alt={skill.alt} name={skill.name} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;