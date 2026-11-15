import React from 'react';
import { MessageCircle, Palette, ClipboardCheck, Home } from 'lucide-react';
import { howItWorks } from '@/data/mock';

const iconMap = {
  MessageCircle,
  Palette,
  ClipboardCheck,
  Home,
};

export const HowItWorksSection = () => {
  return (
    <section id="cara-kerja" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sky-500 font-semibold text-sm uppercase tracking-wider mb-3">
            Proses Mudah
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-4">
            Cara Kerja Kami
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Proses simpel tanpa ribet. Dari konsultasi hingga serah terima, 
            semua kami handle dengan profesional.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-sky-200 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => {
              const Icon = iconMap[step.icon];
              return (
                <div
                  key={step.step}
                  className="relative text-center group"
                >
                  {/* Step Number */}
                  <div className="relative z-10 mb-6">
                    <div className="w-20 h-20 mx-auto bg-white border-2 border-sky-100 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:border-sky-300 transition-all duration-300 group-hover:-translate-y-2">
                      <Icon className="w-8 h-8 text-sky-500" />
                    </div>
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
                      {step.step}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-[#0a1628] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>

                  {/* Arrow for desktop */}
                  {index < howItWorks.length - 1 && (
                    <div className="hidden lg:block absolute top-20 -right-4 text-sky-300">
                      <svg
                        className="w-8 h-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
