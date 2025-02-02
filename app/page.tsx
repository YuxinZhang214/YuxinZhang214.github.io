import Skills from './skill';
import Services from './service';
import Experience from './experience';
import Projects from './projects/project';
import Action from './layout/Action';

export default function Home() {
  return (
    <div className="text-left font-satoshi-regular">
      {/*  -- Hero Section -- */}
      <div id="hero-section" className="pb-32">
        <div id="title" className="font-satoshi-medium text-8xl mt-16 pt-16">
          <h1 className="mb-4 flex items-center">
            Front-end Engineer
          </h1>

          {/* <h1 className="mb-4 flex items-center">
            Full-stack Engineer 
          </h1> */}
    
        </div>

        <div id="description" className="pt-4 sm:pt-6 lg:pt-8 w-full md:w-2/3 lg:w-1/2 text-base sm:text-lg">
          <p className="mb-4 sm:mb-6">
            I'm <b> Yuxin Zhang </b>, a Frontend Engineer and a Full-stack Software Engineer based in China with six month of industry experience, 
            specializing in data visualization and low-code platform development. 
          </p>
          
          <p>
          I love using frontend technologies to solve real-world problems. I've worked on AI-powered platforms and internal digital tools that streamline decision-making and boost 
            productivity. My main interests lie in building intuitive, high-performance data visualization tools and low-code platforms that drive digital transformation.
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

      <div id="projects-section" className="pb-12 space-y-8">
        <Action/>
      </div>
     
    </div>
  );
}
