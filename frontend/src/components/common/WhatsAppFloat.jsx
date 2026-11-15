import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { contactInfo } from '@/data/mock';

export const WhatsAppFloat = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show button after scroll
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    // Show tooltip after delay
    const tooltipTimer = setTimeout(() => {
      setShowTooltip(true);
    }, 5000);

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(tooltipTimer);
    };
  }, []);

  const handleClick = () => {
    window.open(
      `https://wa.me/${contactInfo.whatsapp}?text=Halo, saya ingin bertanya mengenai layanan 182 Property`,
      '_blank'
    );
  };

  if (!isVisible) return null;

  return (
    <div className="whatsapp-float">
      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute bottom-full right-0 mb-3 animate-fadeIn">
          <div className="relative bg-white rounded-xl shadow-xl p-4 w-64">
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
            >
              <X className="w-4 h-4" />
            </button>
            <p className="text-[#0a1628] font-semibold text-sm mb-1">
              Ada pertanyaan?
            </p>
            <p className="text-gray-600 text-xs">
              Biasanya dibalas dalam 5-10 menit di jam kerja
            </p>
            {/* Arrow */}
            <div className="absolute -bottom-2 right-8 w-4 h-4 bg-white transform rotate-45" />
          </div>
        </div>
      )}

      {/* Button */}
      <button
        onClick={handleClick}
        className="relative w-16 h-16 bg-[#25D366] hover:bg-[#20BD5A] rounded-full flex items-center justify-center shadow-xl shadow-[#25D366]/30 transition-all duration-300 hover:scale-110"
      >
        <MessageCircle className="w-7 h-7 text-white" />
        
        {/* Pulse Ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
      </button>
    </div>
  );
};
