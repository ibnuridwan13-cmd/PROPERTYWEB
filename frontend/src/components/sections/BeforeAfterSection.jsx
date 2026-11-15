import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, ArrowLeftRight } from 'lucide-react';
import { beforeAfter } from '@/data/mock';

const BeforeAfterSlider = ({ before, after, category }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [containerWidth, setContainerWidth] = useState(800);
  const containerRef = useRef(null);
  const isDragging = useRef(false);

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.min(Math.max(percentage, 0), 100));
  };

  const handleTouchMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.min(Math.max(percentage, 0), 100));
  };

  useEffect(() => {
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mousemove', handleMouseMove);
    
    // Update container width
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    
    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', updateWidth);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden cursor-ew-resize shadow-2xl"
      onTouchMove={handleTouchMove}
    >
      {/* After Image (Background) */}
      <img
        src={after}
        alt="After"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Before Image (Overlay) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <img
          src={before}
          alt="Before"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ width: `${containerWidth}px` }}
        />
      </div>

      {/* Slider Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-10"
        style={{ left: `${sliderPosition}%` }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
          <ArrowLeftRight className="w-5 h-5 text-[#0a1628]" />
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 bg-[#0a1628]/80 text-white px-3 py-1 rounded-full text-sm font-medium">
        Sebelum
      </div>
      <div className="absolute top-4 right-4 bg-sky-500/90 text-white px-3 py-1 rounded-full text-sm font-medium">
        Sesudah
      </div>

      {/* Category Badge */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm text-[#0a1628] px-4 py-2 rounded-full text-sm font-semibold">
        {category}
      </div>
    </div>
  );
};

export const BeforeAfterSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? beforeAfter.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === beforeAfter.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="portfolio" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sky-500 font-semibold text-sm uppercase tracking-wider mb-3">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-4">
            Transformasi Before - After
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Lihat hasil nyata dari proyek renovasi kami. Geser slider untuk melihat 
            perbandingan sebelum dan sesudah.
          </p>
        </div>

        {/* Slider */}
        <div className="max-w-3xl mx-auto">
          <BeforeAfterSlider
            before={beforeAfter[currentIndex].before}
            after={beforeAfter[currentIndex].after}
            category={beforeAfter[currentIndex].category}
          />

          {/* Navigation */}
          {beforeAfter.length > 1 && (
            <div className="flex items-center justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={handlePrev}
                className="rounded-full border-gray-200 hover:bg-sky-50 hover:border-sky-300"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <div className="flex gap-2">
                {beforeAfter.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      index === currentIndex
                        ? 'bg-sky-500 w-6'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
              <Button
                variant="outline"
                size="icon"
                onClick={handleNext}
                className="rounded-full border-gray-200 hover:bg-sky-50 hover:border-sky-300"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
