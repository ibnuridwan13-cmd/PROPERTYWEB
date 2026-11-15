import React from 'react';
import { Building2, ShieldCheck, Receipt, Users } from 'lucide-react';
import { trustBadges } from '@/data/mock';

const iconMap = {
  Building2,
  ShieldCheck,
  Receipt,
  Users,
};

export const TrustSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-sky-500 font-semibold text-sm uppercase tracking-wider mb-3">
            Kenapa Kami?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-4">
            Legal, Garansi & Kepercayaan
          </h2>
          <p className="text-gray-600">
            Kami berkomitmen memberikan pelayanan terbaik dengan jaminan legalitas dan kualitas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustBadges.map((badge, index) => {
            const Icon = iconMap[badge.icon];
            return (
              <div
                key={badge.title}
                className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-transparent hover:border-sky-100"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-sky-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-sky-100 transition-colors">
                  <Icon className="w-7 h-7 text-sky-500" />
                </div>
                <h3 className="text-lg font-bold text-[#0a1628] mb-2">
                  {badge.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {badge.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
