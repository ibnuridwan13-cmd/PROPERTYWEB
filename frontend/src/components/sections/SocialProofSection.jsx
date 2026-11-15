import React, { useState, useEffect, useRef } from 'react';
import { Briefcase, Users, Calendar, MapPin } from 'lucide-react';
import { socialProof } from '@/data/mock';

const CounterItem = ({ icon: Icon, value, label, suffix = '+' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = value / steps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="text-center">
      <div className="w-16 h-16 mx-auto bg-white/10 rounded-2xl flex items-center justify-center mb-4">
        <Icon className="w-8 h-8 text-sky-400" />
      </div>
      <div className="text-4xl md:text-5xl font-bold text-white mb-2">
        {count}
        <span className="text-sky-400">{suffix}</span>
      </div>
      <p className="text-white/70 text-sm">{label}</p>
    </div>
  );
};

export const SocialProofSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#0a1628] via-[#0f2137] to-[#152c47] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-sky-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sky-400/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sky-400 font-semibold text-sm uppercase tracking-wider mb-3">
            Pencapaian Kami
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Dipercaya Ratusan Keluarga Indonesia
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <CounterItem
            icon={Briefcase}
            value={socialProof.projectsCompleted}
            label="Proyek Selesai"
          />
          <CounterItem
            icon={Users}
            value={socialProof.happyCustomers}
            label="Pelanggan Puas"
          />
          <CounterItem
            icon={Calendar}
            value={socialProof.yearsExperience}
            label="Tahun Pengalaman"
          />
          <CounterItem
            icon={MapPin}
            value={socialProof.citiesCovered}
            label="Kota Terjangkau"
          />
        </div>
      </div>
    </section>
  );
};
