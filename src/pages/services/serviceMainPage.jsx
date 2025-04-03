import React from "react";
import { servicesContent } from "../../utils/servicesContent";
import InstantTopLink from "../../utils/instantTopLink";

const ServiceCard = ({ title, description, slug, imageUrl, icon }) => {
  return (
    <div className="bg-white/10 backdrop-blur-lg p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out border border-white/20 w-full">
      <div className="flex justify-between items-center mb-4">
        <img src={icon} alt={title} className="w-12 h-12 object-contain" />
        <span className="text-xl font-medium text-white">{title}</span>
      </div>
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover rounded-lg mb-4 transition-transform duration-500 ease-in-out hover:scale-110"
      />
      <p className="text-gray-300 text-lg mb-4">{description}</p>
      <InstantTopLink to={`/services/${slug}`}>
        <span className="text-[#00bcd4] font-medium hover:underline transition-colors duration-300">
          Learn More
        </span>
      </InstantTopLink>
    </div>
  );
};

const ServiceMainPage = () => {
  return (
    <div className="min-h-screen bg-transparent backdrop-blur-2xl border border-white/10 py-20 w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <h1 className="text-5xl font-extrabold text-center text-white mb-12">
          Our Premium Services
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8 justify-center w-full">
          {servicesContent.map((service) => (
            <InstantTopLink key={service.id} to={`/services/${service.slug}`} className="w-full">
              <ServiceCard
                title={service.title}
                description={service.description}
                slug={service.slug}
                imageUrl={service.imageUrl}
                icon={service.icon}
              />
            </InstantTopLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceMainPage;
