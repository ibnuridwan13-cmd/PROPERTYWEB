import React from 'react';
import { MapPin, Mail, Clock, Phone, Instagram, Facebook } from 'lucide-react';
import { contactInfo } from '@/data/mock';

const TikTokIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
  </svg>
);

export const Footer = () => {
  const handleWhatsApp = () => {
    window.open(`https://wa.me/${contactInfo.whatsapp}?text=Halo, saya tertarik dengan layanan 182 Property`, '_blank');
  };

  return (
    <footer className="bg-[#0a1628] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="font-extrabold text-2xl mb-4">
              <span className="text-sky-400">182</span> PROPERTY
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Solusi Properti & Interior Rumah Nyaman untuk Keluarga Indonesia. 
              Wujudkan rumah impian dengan harga terjangkau.
            </p>
            <div className="flex items-center gap-4">
              <a
                href={contactInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-sky-500 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={contactInfo.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-sky-500 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={contactInfo.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-sky-500 transition-colors"
              >
                <TikTokIcon />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Layanan Kami</h4>
            <ul className="space-y-3">
              {['Dapur', 'Kamar Tidur', 'Ruang Tamu', 'Kamar Mandi', 'Ruang Keluarga', 'Taman'].map((item) => (
                <li key={item}>
                  <a href="#layanan" className="text-gray-400 hover:text-sky-400 transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Hubungi Kami</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-sky-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">{contactInfo.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-sky-400 flex-shrink-0" />
                <a href={`mailto:${contactInfo.email}`} className="text-gray-400 hover:text-sky-400 transition-colors text-sm">
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-sky-400 flex-shrink-0" />
                <button onClick={handleWhatsApp} className="text-gray-400 hover:text-sky-400 transition-colors text-sm">
                  +62 812-3456-7890
                </button>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-sky-400 flex-shrink-0" />
                <span className="text-gray-400 text-sm">{contactInfo.businessHours}</span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Informasi</h4>
            <ul className="space-y-3">
              <li>
                <a href="#faq" className="text-gray-400 hover:text-sky-400 transition-colors text-sm">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-sky-400 transition-colors text-sm">
                  Syarat & Ketentuan
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-sky-400 transition-colors text-sm">
                  Kebijakan Privasi
                </a>
              </li>
              <li>
                <a href="#kontak" className="text-gray-400 hover:text-sky-400 transition-colors text-sm">
                  Kontak
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 182 Property. Hak Cipta Dilindungi.
            </p>
            <p className="text-gray-500 text-xs">
              Perusahaan terdaftar resmi & berizin lengkap
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
