// 'use client'

import Image from 'next/image';
import { useState } from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  details?: string; // Additional details for the service
  caseStudy?: string; // Case study for the service
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, details, caseStudy }) => {
  // const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-white rounded-lg p-6 flex flex-col items-center w-full md:w-1/3 relative"
      // onMouseEnter={() => setIsHovered(true)}
      // onMouseLeave={() => setIsHovered(false)}
      // onFocus={() => setIsHovered(true)}
      // onBlur={() => setIsHovered(false)}
      // onKeyDown={(e) => {
      //   if (e.key === 'Enter' || e.key === ' ') {
      //     setIsHovered(!isHovered);
      //   }
      // }}
      // style={{ height: isHovered ? 'auto' : '300px' }}
    >
      <div className="mb-4">
        <Image
          src={icon}
          alt={title}
          width={84}
          height={84}
          className="object-contain"
        />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-center">{title}</h3>
      <p className="text-gray-600 text-left">{description}</p>

      {/* Expanded Content on Hover */}
      {/* {isHovered && ( */}
        <div className="w-full bg-white mt-2 z-10">
          <h4 className="text-lg font-semibold mb-2 text-center">Details</h4>
          <p className="text-gray-600 mb-4 text-left">{details}</p>
          <h4 className="text-lg font-semibold mb-2 text-center">Case Study</h4>
          <p className="text-gray-600 text-left">{caseStudy}</p>
        </div>
      {/* )} */}
    </div>
  );
};

const Services = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-6">
      <ServiceCard
        title="Data Visualisation"
        description="Develop customised data visualisation solutions that transform complex data into intuitive charts and dashboards, enabling businesses to identify trends quickly."
        icon="/service/info-vis.png"
        details="Use modern front-end technologies (such as D3.js, ECharts, Chart.js, etc.) to develop interactive data visualization components. Design dynamic dashboards based on business needs, supporting real-time data updates and multi-dimensional analysis."
        caseStudy="Contributed to the development of the Wiki Loves Monuments competition data visualization project, showcasing community contribution data."
      />
      <ServiceCard
        title="Low-Code Platform"
        description="Develop low-code platforms that accelerate application development, reduce costs, and enhance business agility."
        icon="/service/frontend-dev.png"
        details="Design and implement drag-and-drop interface builders, enabling users to create applications through visual operations. Develop reusable component libraries to support rapid construction of common functional modules."
        caseStudy="Participated in the development of a low-code platform prototype, supporting cross-department collaboration and rapid iteration."
      />
      <ServiceCard
        title="Digital Transformation"
        description="Leverage front-end technologies to modernise business processes, improve UX, and enhance operational efficiency."
        icon="/service/digital.png"
        details="Migrate traditional business processes to digital platforms, developing user-friendly front-end interfaces. Optimize the user experience of existing systems to improve user satisfaction and efficiency."
        caseStudy="Participated in the digital transformation project for Saint-Gobain High-Performance Plastics, optimizing the front-end interface and functionality of AI-assisted material product formulation tools."
      />
    </div>
  );
};

export default Services;