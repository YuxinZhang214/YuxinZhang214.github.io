import Image from 'next/image';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  details?: string; // Additional details for the service
  caseStudy?: string; // Case study for the service
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, details, caseStudy }) => {
  return (
    <div
      className="bg-white rounded-lg p-6 flex flex-col items-center w-full md:w-1/3 relative"
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

      {/* Expanded Content */}
      <div className="w-full bg-white mt-2 z-10">
        <h4 className="text-lg font-semibold mb-2 text-center">Details</h4>
        <p className="text-gray-600 mb-4 text-left">{details}</p>
        <h4 className="text-lg font-semibold mb-2 text-center">Case Study</h4>
        <p className="text-gray-600 text-left">{caseStudy}</p>
      </div>
    </div>
  );
};

export default ServiceCard;