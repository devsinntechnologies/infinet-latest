// @ts-nocheck
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

export async function generateStaticParams() {
  return servicesData.services.map((service) => ({
    id: service.id,
  }));
}

export default async function ServiceDetailPage({
  params
}) {
  let slug = await params.id;
  
  const service = servicesData.services.find((item) => item.id === slug);

  if (!service) return notFound();

  return (
    <div className="w-full min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[50vh] w-full overflow-hidden flex items-center justify-center bg-gradient-to-r from-blue-900 to-purple-900 px-4 text-center">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-purple-900 z-0" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-white drop-shadow-md mb-4">
            {service.subtitle}
          </h2>
          <h1 className="text-5xl sm:text-6xl font-extrabold text-primary drop-shadow-xl">
            {service.title}
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <p className="text-lg sm:text-xl text-center text-gray-700 mb-12 leading-relaxed">
          {service.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {service.points.map((point, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg
                      className="h-4 w-4 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-900">
                    {point}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}