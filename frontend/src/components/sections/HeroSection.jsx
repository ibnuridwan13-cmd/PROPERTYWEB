import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, ChevronRight, CheckCircle2 } from 'lucide-react';
import { heroSlides, contactInfo } from '@/data/mock';

export const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleWhatsApp = () => {
    window.open(
      `https://wa.me/${contactInfo.whatsapp}?text=Halo, saya tertarik untuk konsultasi gratis mengenai layanan 182 Property`,
      '_blank'
    );
  };

  return (
    <section id="beranda" className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Background Slides */}
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`hero-slide ${
            index === currentSlide ? 'active' : ''
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/70 via-[#0a1628]/50 to-[#0a1628]/80" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="animate-fadeInUp inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-sky-400 rounded-full animate-pulse" />
              <span className="text-white/90 text-sm font-medium">
                Melayani Seluruh Jabodetabek
              </span>
            </div>

            {/* Headline */}
            <h1 className="animate-fadeInUp delay-100 text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Properti & Interior{' '}
              <span className="text-sky-400">Nyaman</span> untuk Keluarga Indonesia
            </h1>

            {/* Subheadline */}
            <p className="animate-fadeInUp delay-200 text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
              Solusi dapur, kamar, ruang tamu, hingga taman dengan harga masuk akal. 
              Wujudkan rumah impian bersama tim profesional kami.
            </p>

            {/* CTA Buttons */}
            <div className="animate-fadeInUp delay-300 flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                onClick={handleWhatsApp}
                size="lg"
                className="bg-sky-500 hover:bg-sky-600 text-white font-semibold px-8 py-6 text-lg transition-all duration-300 hover:shadow-xl hover:shadow-sky-500/30"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Konsultasi Gratis via WhatsApp
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 bg-white/5 text-white hover:bg-white hover:text-[#0a1628] font-semibold px-8 py-6 text-lg backdrop-blur-sm transition-all duration-300"
                onClick={() => document.getElementById('layanan')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Lihat Kategori Properti
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="animate-fadeInUp delay-400 flex flex-wrap gap-6 text-white/70 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400" />
                <span>Gratis, tanpa kewajiban</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400" />
                <span>Respon cepat di jam kerja</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400" />
                <span>Data aman & tidak disebarkan</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-12 h-1.5 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-sky-400 w-16'
                : 'bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 z-10 hidden lg:block">
        <div className="flex flex-col items-center gap-2 text-white/60 animate-float">
          <span className="text-xs font-medium tracking-wider uppercase">Scroll</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-1.5 bg-white/60 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};
