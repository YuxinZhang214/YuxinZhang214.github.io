import Project from './projects/project';

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
            internal digitalisation tool to increase the productivity for the entire organisation. As a 
            hobby, I'm very interested in developing personal tools for increasing personal productivity
          </p>
        </div>
      </div>

      {/* -- Project Section -- */}
      <div id="projects-section" className="pb-32 space-y-8">
          <h2 className="font-satoshi-bold text-4xl mb-8">My Projects</h2>

          <Project 
              title="Wiki Loves Monument UK" 
              description="Developed a comprehensive full-stack data visualisation application 
                          from end-to-end, highlighting individual contributions to the Wiki Loves 
                          Monuments UK competition. Utilised the d3.js library to create interactive 
                          charts and maps, showcasing the extensive dataset containing more than 
                          300,000 items across the competition’s 12-year history. "
              imageUrl="/images/wlm-uk.png"
              detailsPageUrl="/projects/wlm-uk"
          />

          <Project 
              title="Visualising Music Trend" 
              description="Brief description of Project 2. Highlight key features, technologies used, and your role."
              imageUrl="/images/music-trend.png"
              detailsPageUrl="/projects/music-trend"
          />

        </div>
     
    </div>
  );
}