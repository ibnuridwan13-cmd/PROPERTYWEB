import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MessageCircle, Clock, Sparkles } from 'lucide-react';
import { promoData as defaultPromo, contactInfo } from '@/data/mock';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

export const PromoSection = () => {
  const [promoData, setPromoData] = useState(defaultPromo);

  useEffect(() => {
    const fetchPromo = async () => {
      try {
        const response = await axios.get(`${API}/promo`);
        if (response.data) {
          setPromoData({
            title: response.data.title,
            subtitle: response.data.subtitle,
            description: response.data.description,
            validUntil: response.data.valid_until,
            badge: response.data.badge,
          });
        }
      } catch (error) {
        // Use default promo data on error
        console.log('Using default promo data');
      }
    };
    fetchPromo();
  }, []);

  const handleWhatsApp = () => {
    window.open(
      `https://wa.me/${contactInfo.whatsapp}?text=Halo, saya tertarik dengan promo spesial yang sedang berlangsung`,
      '_blank'
    );
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#0a1628] to-[#152c47]">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-sky-400/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative z-10 p-8 md:p-12 lg:p-16">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 mb-4">
                  <Badge className="bg-sky-500/20 text-sky-300 border-0 px-4 py-1 animate-pulse-glow">
                    <Sparkles className="w-3 h-3 mr-1" />
                    {promoData.badge}
                  </Badge>
                </div>
                
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                  {promoData.title}
                </h2>
                
                <p className="text-xl md:text-2xl text-sky-300 font-semibold mb-4">
                  {promoData.subtitle}
                </p>
                
                <p className="text-white/70 mb-6 max-w-xl">
                  {promoData.description}
                </p>
                
                <div className="flex items-center justify-center lg:justify-start gap-2 text-white/60 text-sm">
                  <Clock className="w-4 h-4" />
                  <span>Berlaku hingga {promoData.validUntil}</span>
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col items-center gap-4">
                <Button
                  onClick={handleWhatsApp}
                  size="lg"
                  className="bg-sky-500 hover:bg-sky-400 text-white font-bold px-10 py-7 text-lg rounded-xl shadow-xl shadow-sky-500/30 transition-all duration-300 hover:scale-105"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Klaim Promo Sekarang
                </Button>
                <p className="text-white/50 text-xs text-center">
                  Slot pengerjaan terbatas
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
