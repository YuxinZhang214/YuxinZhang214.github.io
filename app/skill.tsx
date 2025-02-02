import React from 'react';
import Image from 'next/image';

interface SkillIconProps {
  src: string;          // Now required since we're only using images
  alt: string;          // Now required for accessibility
  name: string;
}

const SkillIcon: React.FC<SkillIconProps> = ({ src, alt, name }) => (
  <div className="flex flex-col items-center">
    <div className="w-16 h-16 mb-4 relative">
      <Image src={src} alt={alt} layout="fill" objectFit="contain" />
    </div>
    <span className="text-lg font-semibold">{name}</span>
  </div>
);

const Skills: React.FC = () => {
  return (
    <section className="">
      <div className="container mx-auto text-center">
        {/* Frontend Technologies */}
        <div className="flex flex-wrap justify-center gap-12 mb-12">
          <SkillIcon src="/skills/react.png" alt="ReactJS" name="ReactJS" />
          <SkillIcon src="/skills/javascript.png" alt="JavaScript" name="JavaScript" />
          <SkillIcon src="/skills/css.png" alt="CSS" name="CSS" />
          <SkillIcon src="/skills/html.png" alt="HTML" name="HTML" />
          <SkillIcon src="/skills/d3.jpeg" alt="D3.js" name="D3.js" />
          <SkillIcon src="/skills/tailwindcss.png" alt="Tailwind CSS" name="Tailwind CSS" />
          <SkillIcon src="next.svg" alt="NextJS" name="NextJS" />
        </div>

        {/* Backend Technologies */}
        <div className="flex flex-wrap justify-center gap-12 mb-12">
          <SkillIcon src="/skills/nodejs.png" alt="Node.js" name="Node.js" />
          <SkillIcon src="/skills/express.svg" alt="Express.js" name="Express.js" />
          <SkillIcon src="/skills/python.jpeg" alt="Python" name="Python" />
          <SkillIcon src="/skills/plotly.png" alt="Plotly" name="Plotly" />
          <SkillIcon src="/skills/django.png" alt="Django" name="Django" />
          <SkillIcon src="/skills/flask.png" alt="Flask" name="Flask" />
          <SkillIcon src="/skills/fastapi.png" alt="FastAPI" name="FastAPI" />
        </div>

        {/* Database and other Technologies */}
        <div className="flex flex-wrap justify-center gap-12">

          <SkillIcon src="/skills/MS-SQL.png" alt="MS SQL" name="MS SQL" />
          <SkillIcon src="/skills/sqlite.jpeg" alt="Sqlite" name="Sqlite" />
          <SkillIcon src="/skills/github.png" alt="Github" name="Github" />
          <SkillIcon src="/skills/gitlab.png" alt="Gitlab" name="Gitlab" />
          <SkillIcon src="/skills/linux.jpeg" alt="Linux" name="Linux" />
          <SkillIcon src="/skills/macos.png" alt="MacOS" name="MacOS" />
     
        </div>
      </div>
    </section>
  );
};

export default Skills;
