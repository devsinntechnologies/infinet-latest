import React from "react";
import { notFound } from "next/navigation";
import servicesData from "@/src/components/data/services.json";

interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  points: string[];
}

interface Props {
  params: {
    id: string;
  };
}

const ServiceDetailPage = ({ params }: Props) => {
  const service: Service | undefined = servicesData.services.find(
    (item) => item.id === params.id
  );

  if (!service) return notFound();

  return (
    <div className="w-full text-white">
      {/* Hero Section */}
      <div className="h-[50vh] flex items-center justify-center bg-gradient-to-r from-blue-900 to-purple-900 px-4 text-center">
        <div>
          <h2 className="text-4xl sm:text-5xl font-bold drop-shadow-md mb-4">
            {service.subtitle}
          </h2>
          <h1 className="text-5xl sm:text-6xl font-extrabold text-primary drop-shadow-xl">
            {service.title}
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <p className="text-lg sm:text-xl text-center text-black mb-10">
          {service.description}
        </p>

        <div className="grid grid-cols-1 p-6 rounded-lg border-primary  border-2 shadow-md hover:shadow-lg  gap-6">
          {service.points.map((point, idx) => (
            <div
              key={idx}
              className="bg-white/10 backdrop-blur-lg  transition"
            >
              <h3 className="text-lg font-medium text-black">
              ✅ {point}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;
