import React from 'react';
import { Card } from '@/components/ui/card';
import { teamMembers } from '@/data/mock';

export const TeamSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sky-500 font-semibold text-sm uppercase tracking-wider mb-3">
            Tim Kami
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-4">
            Bertemu dengan Tim Profesional
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Di balik setiap proyek sukses, ada tim berdedikasi yang bekerja 
            dengan penuh semangat untuk mewujudkan rumah impian Anda.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card
              key={member.id}
              className="group text-center overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0a1628] mb-1">
                  {member.name}
                </h3>
                <p className="text-sky-500 font-medium text-sm">
                  {member.role}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
