import React from 'react';

interface ServiceProps {
  service: {
    id: number;
    title: string;
    description: string;
    icon: React.ReactNode;
    features: string[];
  };
}

const ServiceCard: React.FC<ServiceProps> = ({ service }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
      <div className="p-6">
        <div className="bg-gray-50 p-4 rounded-lg inline-block mb-4">
          {service.icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
        <p className="text-gray-600 mb-4">{service.description}</p>
        <ul className="space-y-2">
          {service.features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              <span className="text-sm text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-gray-50 px-6 py-4 border-t border-gray-100">
        <a 
          href="#contact" 
          className="text-blue-500 font-medium hover:text-blue-600 text-sm transition-colors duration-300"
        >
          Request Service →
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;