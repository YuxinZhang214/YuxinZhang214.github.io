import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectDetailProps {
    title: string;
    description: string;
    url:string;
    coverImage: string;
    overview: string;
    myRole: string;
    techStack: string;
    impact: string;
    images: Array<{ src: string }>;
}
  
const ProjectDetail: React.FC<ProjectDetailProps> = ({ title,description,url,coverImage,overview,myRole,techStack,impact,images,}) => {

  return (
    <div className="container mx-auto pb-12 font-satoshi-regular">

      {/* <- Back Button */}
      <div className="mb-4">
          <Link href="/" passHref className="px-4 py-2 rounded-full text-black
                       hover:bg-black hover:text-white transition-colors duration-300">
              <span className="mr-2 text-xl">← Go Back </span> 
          </Link>
      </div>

      <div>
          {/* Project Title */}
          <h1 className="text-8xl mb-4 py-4">
            {title}
          </h1>
          
          <div className="flex justify-between items-center mb-6">
            <p className="text-xl">
              {description}
            </p>
            <Link href={url} target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-full text-black
                       hover:bg-black hover:text-white transition-colors duration-300">
              View Project <span className="ml-1">↗</span>
            </Link>
          </div>
      </div>
      
      {/* Cover Image */}
      <div className="mb-8">
        <Image 
          src={coverImage} 
          alt={`${title} Cover Image`}
          width={1500}
          height={600}
          className="rounded-lg"
        />
      </div>

      <TextSection title="Overview" content={overview} />
      <TextSection title="My Role" content={myRole} />
      <TextSection title="Technology" content={techStack} />
      <TextSection title="Impact" content={impact} />


      {/* Project Gallery */}
      <section className="py-8">
        <h2 className="text-6xl mb-16">Project Gallery</h2>
        <div className="grid grid-cols-3 gap-4">
          {images.map((img, index) => (
            <Image 
              key={index} 
              src={img.src} 
              alt={`Gallery Image ${index + 1}`} 
              width={800} 
              height={500} 
              className="rounded-lg" 
            />
          ))}
        </div>
      </section>
    </div>
  );
};

interface TextSectionProps {
  title: string;
  content: string;
}

const TextSection: React.FC<TextSectionProps> = ({ title, content }) => {
  return (
    <section className="flex flex-col md:flex-row  mb-8">
      <div className="w-1/4">
        <h2 className="text-4xl mb-4">{title}</h2>
      </div>
      <div className="w-3/4 text-lg">
        <p>{content}</p>
      </div>
    </section>
  );
};

export default ProjectDetail;