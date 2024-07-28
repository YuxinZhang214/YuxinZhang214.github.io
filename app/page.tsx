import Project from "@/components/project";

export default function Home() {
  return (
    <div className="text-left">
      {/*  -- Hero Section -- */}
      <div id="hero-section" className="pb-32">
        <div id="title" className="font-satoshi-medium text-8xl mt-20 pt-32">
          <h1 className="mb-4 flex items-center">
            Research Engineer 
            <span className="ml-2 amp flex items-center" style={{ transform: 'translate(0px, 0px)' }}>
              {/* &amp; */}
              ,
            </span>
          </h1>

          <h1 className="mb-4 flex items-center">
              Front-end Engineer 
              {/* <span className="ml-2 amp flex items-center" style={{ transform: 'translate(0px, 0px)' }}>
              &amp;
              <svg
                className="hero-circle ml-2"
                x="0px"
                y="0px"
                viewBox="0 0 114 114"
                style={{ transform: 'rotate(-90deg)', width: '24px', height: '24px' }}
              />
            </span> */}
          </h1>
          
          {/* <h1 className="mb-4">
              Full-stack Software Engineer 
          </h1> */}
        </div>

        <div id="description" className="pt-8 w-1/2 font-satoshi-regular text-lg">
          <p className="">
            I'm Yuxin Zhang, a Frontend-Development, Research Engineer and a Frontend Software Engineer. 
            I help organization develop AI-driven platform for better decision making. I also develop 
            internal digitalisation tool to increase the productivity for the entire organisation. As a 
            hobby, I'm very interested in developing personal tools for increasing personal productivity
          </p>
        </div>
      </div>

      {/* -- Project Section -- */}
      <div id="projects-section" className="pb-32">
            <h2 className="font-satoshi-bold text-4xl mb-8">My Projects</h2>
            <div className="flex flex-col">
              <Project 
                  title="Wiki Loves Monument UK" 
                  description="Brief description of Project 1. Highlight key features, technologies used, and your role."
                  imageUrl="/images/wlm-uk.png"
                  detailsPageUrl="/projects/project1"
              />
              <Project 
                  title="Visualising Music Trend" 
                  description="Brief description of Project 2. Highlight key features, technologies used, and your role."
                  imageUrl="/images/music-trend.png"
                  detailsPageUrl="/projects/project1"
              />
            </div>
        </div>
     
    </div>
  );
}