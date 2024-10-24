import React from 'react';
import Image from 'next/image';
import { IconDefinition, IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faReact,
  faJsSquare,
  faCss3Alt,
  faHtml5,
  faPython,
  faNode,
} from '@fortawesome/free-brands-svg-icons';

interface SkillIconProps {
  icon?: IconDefinition; // Made this optional to handle cases where only an image is provided
  src?: string;          // Made this optional
  alt?: string;          // Made this optional
  name: string;          // This should always be provided
}

const SkillIcon: React.FC<SkillIconProps> = ({ icon, src, alt, name }) => (
  <div className="flex flex-col items-center">
    {icon ? (
      <FontAwesomeIcon icon={icon as IconProp} className="w-16 h-16 mb-4" />
    ) : (
      <div className="w-16 h-16 mb-4 relative">
        {src && <Image src={src} alt={alt ?? ''} layout="fill" objectFit="contain" />}
      </div>
    )}
    <span className="text-lg font-semibold">{name}</span>
  </div>
);

const Skills: React.FC = () => {
  return (
    <section className="">
      <div className="container mx-auto text-center">
        {/* Frontend Technologies */}

        <div className="flex flex-wrap justify-center gap-12 mb-12">
          <SkillIcon icon={faReact} name="ReactJS" />
          <SkillIcon icon={faJsSquare} name="JavaScript" />
          <SkillIcon src="/next.svg" alt="NextJS" name="NextJS" />
          <SkillIcon icon={faCss3Alt} name="CSS" />
          <SkillIcon icon={faHtml5} name="HTML" />
          <SkillIcon src="/skills/d3.jpeg" alt="D3.js" name="D3.js" />
        </div>

        {/* Backend Technologies */}
        <div className="flex flex-wrap justify-center gap-12 mb-12">
          <SkillIcon icon={faNode} name="Node.js" />
          <SkillIcon src="/skills/express.svg" alt="Express.js" name="Express.js" />
          <SkillIcon icon={faPython} name="Python" />
          <SkillIcon src="/skills/django.svg" alt="Django" name="Django" />
          <SkillIcon src="/skills/flask.png" alt="Flask" name="Flask" />
          <SkillIcon src="/skills/fastapi.png" alt="FastAPI" name="FastAPI" />
        </div>

        {/* Database Technologies */}
        {/* <div className="flex flex-wrap justify-center gap-12">
          <SkillIcon src="/sql.png" alt="SQL" name="SQL" />
          <SkillIcon src="/mongodb.svg" alt="MongoDB" name="MongoDB" />
        </div> */}

      </div>
    </section>
  );
};

export default Skills;
