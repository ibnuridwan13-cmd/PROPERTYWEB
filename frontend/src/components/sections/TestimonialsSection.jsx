import React from 'react';
import { Card } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '@/data/mock';

export const TestimonialsSection = () => {
  return (
    <section id="testimoni" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sky-500 font-semibold text-sm uppercase tracking-wider mb-3">
            Testimoni
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-4">
            Apa Kata Pelanggan Kami
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Kepuasan pelanggan adalah prioritas utama kami. Lihat apa kata mereka 
            tentang pengalaman bersama 182 Property.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className="group bg-white border border-gray-100 hover:border-sky-200 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 p-6"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <Quote className="w-8 h-8 text-sky-200" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              {/* Review */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                &ldquo;{testimonial.review}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center">
                  <span className="text-sky-600 font-semibold text-sm">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-[#0a1628] text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-500 text-xs">
                    {testimonial.location} • {testimonial.category}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
