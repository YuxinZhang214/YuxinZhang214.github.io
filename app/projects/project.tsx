import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface ProjectProps {
  title: string;
  description: string;
  imageUrl: string;
  detailsPageUrl: string;
  technologies?: string[]; // Optional prop for technologies used
  association?: string; // New optional prop for associated organization
}

const Project: React.FC<ProjectProps> = ({ title, description, imageUrl, detailsPageUrl, technologies, association }) => {
  return (
    <div className="flex flex-row space-x-8 h-2/3">
      <div id="project-image" className="">
        <div className="overflow-hidden rounded-lg">
          <Image 
            src={imageUrl} 
            alt={title} 
            width={2000} 
            height={600} 
            className="rounded-lg object-cover" 
          />
        </div>
      </div>
      <div id="project-text" className="w-1/2 flex flex-col justify-between">
        {/* Display association if provided */}
        {association && (
          <div className="text-sm font-medium text-gray-600 mb-1">
            <span className="font-bold text-black">{association}</span>
          </div>
        )}
        
        <div id="project-title">
          <h3 className="font-satoshi-medium text-2xl mb-4">{title}</h3>
        </div>  
        
        <div id="project-description" className="flex-grow">
          <p className="font-satoshi-regular text-base mb-4">{description}</p>
          {/* Technology section immediately after the description */}
          {technologies && technologies.length > 0 && (
            <div className="flex flex-wrap mt-4 gap-2">
              {technologies.map((tech, index) => (
                <span key={index} className="border border-black text-black text-sm font-medium px-2 py-1 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
        
        <div id="view-more" className="flex justify-end mt-4">
          <Link 
            href={detailsPageUrl} 
            className="px-4 py-2 rounded-full text-black hover:bg-black hover:text-white transition-colors duration-300"
          >
            View Details <span className="">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <div className="space-y-8">
      <Project 
        title="Wiki Loves Monument UK" 
        description="Developed a comprehensive full-stack data visualization application from end-to-end, highlighting individual contributions to the Wiki Loves Monuments UK competition. Utilized the D3.js library to create interactive charts and maps, showcasing the extensive dataset containing more than 300,000 items across the competition’s 12-year history"
        imageUrl="/images/wlm-uk.png"
        detailsPageUrl="/projects/wlm-uk"
        technologies={["React", "Next.js", "D3.js", "Tailwind CSS", "Django", "Wikidata", "Wikimedia Commons API", "SQLite"]}
        association="Wikimedia UK" 
      />
      
      <Project 
        title="Visualizing Music Trend" 
        description="Collaborated with a friend to develop a D3.js application using the Spotify Tracks Chart Dataset (2014-2023) from Kaggle, containing around 110,000 entries to analyze global music trends"
        imageUrl="/images/music-trend.png"
        detailsPageUrl="/projects/music-trend"
        technologies={["D3.js", "JavaScript", "HTML", "CSS", 'Kaggle', 'Spotify API']}
        association="University of St Andrews" 
      />
      
      {/* Add more projects as needed */}
    </div>
  );
};

export default Projects;