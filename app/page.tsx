import Project from './projects/project';
import Skills from './skill';
import Services from './service';
import Experience from './experience';
import Projects from './projects/project';

export default function Home() {
  return (
    <div className="text-left font-satoshi-regular">
      {/*  -- Hero Section -- */}
      <div id="hero-section" className="pb-32">
        <div id="title" className="font-satoshi-medium text-8xl mt-16 pt-16">
          <h1 className="mb-4 flex items-center">
            Research Engineer,
          </h1>

          <h1 className="mb-4 flex items-center">
              Front-end Engineer 
          </h1>
    
        </div>

        <div id="description" className="pt-8 w-1/2 text-lg">
          <p className="">
            I'm Yuxin Zhang, a Frontend-Development, Research Engineer and a Frontend Software Engineer. 
            I help organization develop AI-driven platform for better decision making. I also develop 
            internal digitalisation tool to increase the productivity for the entire organisation.
          </p>
        </div>
      </div>

      {/* -- Skills Section -- */}
      <div id="skills-section" className="pb-10">
        <h2 className="font-satoshi-bold text-4xl mb-8">My Skills</h2>
        <Skills />
      </div>

      {/* -- Services Section -- */}
      <div id="services-section" className="pb-10 w-full">
        <h2 className="font-satoshi-bold text-4xl mb-8">My Services</h2>
        <Services />
      </div>

      {/* -- Experience Section -- */}
      <div id="experience-section" className="pb-10">
        <h2 className="font-satoshi-bold text-4xl mb-8">My Experience</h2>
        <Experience />
      </div>
        
      {/* -- Project Section -- */}
      <div id="projects-section" className="pb-32 space-y-8">
        <h2 className="font-satoshi-bold text-4xl mb-8">My Projects</h2>
        <Projects />
      </div>
     
    </div>
  );
}
