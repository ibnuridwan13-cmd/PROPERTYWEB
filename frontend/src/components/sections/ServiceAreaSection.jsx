import React from 'react';
import { MapPin } from 'lucide-react';
import { serviceAreas } from '@/data/mock';

export const ServiceAreaSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-sky-500 font-semibold text-sm uppercase tracking-wider mb-3">
            Jangkauan Layanan
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-4">
            Area Layanan Kami
          </h2>
          <p className="text-gray-600">
            Melayani seluruh wilayah Jabodetabek dengan tim profesional
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-sky-50 to-white rounded-3xl p-8 md:p-12 border border-sky-100">
            <div className="flex flex-wrap justify-center gap-3">
              {serviceAreas.map((area, index) => (
                <div
                  key={area}
                  className="inline-flex items-center gap-2 bg-white px-5 py-3 rounded-full shadow-sm border border-gray-100 hover:border-sky-300 hover:shadow-md transition-all duration-300"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <MapPin className="w-4 h-4 text-sky-500" />
                  <span className="text-[#0a1628] font-medium text-sm">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
