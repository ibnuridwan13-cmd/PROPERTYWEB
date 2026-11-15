import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, Heart, Home } from 'lucide-react';
import { contactInfo } from '@/data/mock';

export const FinalCTASection = () => {
  const handleWhatsApp = () => {
    window.open(
      `https://wa.me/${contactInfo.whatsapp}?text=Halo, saya ingin konsultasi mengenai renovasi rumah`,
      '_blank'
    );
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#0a1628] via-[#0f2137] to-[#152c47] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-sky-400/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-20 h-20 bg-sky-500/20 rounded-2xl flex items-center justify-center">
                <Home className="w-10 h-10 text-sky-400" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-rose-500 rounded-full flex items-center justify-center">
                <Heart className="w-4 h-4 text-white fill-white" />
              </div>
            </div>
          </div>

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Anda tidak perlu rumah mewah.
            <br />
            <span className="text-sky-400">Yang penting rumah nyaman untuk keluarga.</span>
          </h2>

          {/* Subheadline */}
          <p className="text-white/70 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Rumah nyaman tanpa ribet. Cocok untuk keluarga. 
            Harga masuk akal. Proses jelas & aman.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleWhatsApp}
              size="lg"
              className="bg-sky-500 hover:bg-sky-400 text-white font-bold px-10 py-7 text-lg rounded-xl shadow-xl shadow-sky-500/30 transition-all duration-300 hover:scale-105"
            >
              <MessageCircle className="w-6 h-6 mr-2" />
              Chat WhatsApp Sekarang
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={handleWhatsApp}
              className="border-white/30 bg-white/5 text-white hover:bg-white hover:text-[#0a1628] font-semibold px-10 py-7 text-lg rounded-xl backdrop-blur-sm transition-all duration-300"
            >
              Konsultasi Gratis
            </Button>
          </div>

          {/* Trust Note */}
          <p className="text-white/50 text-sm mt-8">
            Konsultasi gratis, tanpa kewajiban. Biasanya dibalas dalam 5-10 menit.
          </p>
        </div>
      </div>
    </section>
  );
};
