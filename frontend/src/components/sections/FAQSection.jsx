import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { faqData } from '@/data/mock';

export const FAQSection = () => {
  return (
    <section id="faq" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sky-500 font-semibold text-sm uppercase tracking-wider mb-3">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-4">
            Pertanyaan yang Sering Ditanyakan
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Temukan jawaban untuk pertanyaan umum tentang layanan kami.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden px-6 data-[state=open]:shadow-md data-[state=open]:border-sky-200 transition-all duration-300"
              >
                <AccordionTrigger className="text-left font-semibold text-[#0a1628] hover:text-sky-500 hover:no-underline py-5 text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
