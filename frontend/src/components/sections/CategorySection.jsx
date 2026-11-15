import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { propertyCategories, contactInfo } from '@/data/mock';

export const CategorySection = () => {
  const handleWhatsApp = (category) => {
    window.open(
      `https://wa.me/${contactInfo.whatsapp}?text=Halo, saya tertarik dengan layanan ${category}`,
      '_blank'
    );
  };

  return (
    <section id="layanan" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sky-500 font-semibold text-sm uppercase tracking-wider mb-3">
            Layanan Kami
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-4">
            Kategori Properti & Interior
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Pilih kategori sesuai kebutuhan Anda. Kami siap membantu mewujudkan 
            setiap ruangan impian keluarga Anda.
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {propertyCategories.map((category, index) => (
            <Card
              key={category.id}
              className="group overflow-hidden border-0 shadow-md card-hover bg-white"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 img-zoom">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-sky-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {category.subtitle}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-bold text-lg text-[#0a1628] mb-2 group-hover:text-sky-500 transition-colors">
                  {category.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {category.description}
                </p>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 text-[#0a1628] border-gray-200 hover:bg-gray-50 text-sm"
                  >
                    Lihat Detail
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                  <Button
                    size="sm"
                    className="bg-sky-500 hover:bg-sky-600 text-white"
                    onClick={() => handleWhatsApp(category.subtitle)}
                  >
                    <MessageCircle className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
