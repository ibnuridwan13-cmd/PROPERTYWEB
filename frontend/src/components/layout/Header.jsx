import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Phone, X } from 'lucide-react';
import { contactInfo } from '@/data/mock';

const navLinks = [
  { name: 'Beranda', href: '#beranda' },
  { name: 'Layanan', href: '#layanan' },
  { name: 'Cara Kerja', href: '#cara-kerja' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Testimoni', href: '#testimoni' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Kontak', href: '#kontak' },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${contactInfo.whatsapp}?text=Halo, saya tertarik dengan layanan 182 Property`, '_blank');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#beranda" className="flex items-center gap-2">
            <div className={`font-extrabold text-2xl tracking-tight transition-colors duration-300 ${
              isScrolled ? 'text-[#0a1628]' : 'text-white'
            }`}>
              <span className="text-sky-500">182</span> PROPERTY
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-300 hover:text-sky-500 ${
                  isScrolled ? 'text-[#0a1628]' : 'text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Button
              onClick={handleWhatsApp}
              className="bg-sky-500 hover:bg-sky-600 text-white font-semibold px-6 transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/25"
            >
              <Phone className="w-4 h-4 mr-2" />
              Konsultasi Gratis
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                className={isScrolled ? 'text-[#0a1628]' : 'text-white'}
              >
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-white">
              <div className="flex flex-col h-full py-6">
                <div className="flex items-center justify-between mb-8">
                  <div className="font-extrabold text-xl text-[#0a1628]">
                    <span className="text-sky-500">182</span> PROPERTY
                  </div>
                </div>
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-[#0a1628] font-medium py-2 hover:text-sky-500 transition-colors"
                    >
                      {link.name}
                    </a>
                  ))}
                </nav>
                <div className="mt-auto">
                  <Button
                    onClick={handleWhatsApp}
                    className="w-full bg-sky-500 hover:bg-sky-600 text-white font-semibold"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Konsultasi Gratis
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
