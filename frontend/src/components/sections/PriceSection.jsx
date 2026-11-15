import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, Wallet, Info } from 'lucide-react';
import { contactInfo } from '@/data/mock';

export const PriceSection = () => {
  const handleWhatsApp = () => {
    window.open(
      `https://wa.me/${contactInfo.whatsapp}?text=Halo, saya ingin mengetahui estimasi harga untuk renovasi`,
      '_blank'
    );
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Left - Info */}
              <div className="p-8 md:p-12 bg-gradient-to-br from-[#0a1628] to-[#152c47] text-white">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-sky-500/20 rounded-xl flex items-center justify-center">
                    <Wallet className="w-6 h-6 text-sky-400" />
                  </div>
                  <h3 className="text-2xl font-bold">Estimasi Harga</h3>
                </div>
                
                <p className="text-white/80 mb-6 leading-relaxed">
                  Kami memahami setiap keluarga memiliki budget berbeda. 
                  Karena itu, kami menawarkan berbagai pilihan yang bisa disesuaikan.
                </p>

                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-sky-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-white/90">Mulai dari harga terjangkau</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-sky-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-white/90">Bisa disesuaikan dengan budget</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-sky-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-white/90">Harga transparan setelah konsultasi</span>
                  </li>
                </ul>
              </div>

              {/* Right - CTA */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-start gap-3 mb-6 p-4 bg-sky-50 rounded-xl">
                  <Info className="w-5 h-5 text-sky-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-600">
                    Untuk estimasi yang akurat, tim kami akan melakukan survey 
                    lokasi dan diskusi kebutuhan Anda secara detail.
                  </p>
                </div>

                <h4 className="text-xl font-bold text-[#0a1628] mb-3">
                  Dapatkan Penawaran Terbaik
                </h4>
                <p className="text-gray-600 mb-6">
                  Konsultasi gratis untuk mengetahui estimasi harga sesuai 
                  kebutuhan dan budget Anda.
                </p>

                <Button
                  onClick={handleWhatsApp}
                  size="lg"
                  className="w-full bg-sky-500 hover:bg-sky-600 text-white font-semibold py-6 transition-all duration-300 hover:shadow-lg"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Chat untuk Estimasi Harga
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
