import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { toast } from 'sonner';
import { Send, Loader2 } from 'lucide-react';
import { propertyCategories, contactInfo } from '@/data/mock';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

export const LeadCaptureSection = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    category: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.whatsapp || !formData.category) {
      toast.error('Mohon lengkapi semua data');
      return;
    }

    setIsLoading(true);
    
    try {
      // Submit lead to backend
      await axios.post(`${API}/leads`, {
        name: formData.name,
        whatsapp: formData.whatsapp,
        category: formData.category,
      });
      
      // Redirect to WhatsApp
      const message = `Halo, saya ${formData.name}. Saya tertarik dengan layanan ${formData.category}. Mohon informasi lebih lanjut.`;
      window.open(
        `https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(message)}`,
        '_blank'
      );
      
      toast.success('Terima kasih! Data Anda telah tersimpan.');
      setFormData({ name: '', whatsapp: '', category: '' });
    } catch (error) {
      console.error('Error submitting lead:', error);
      // Still redirect to WhatsApp even if API fails
      const message = `Halo, saya ${formData.name}. Saya tertarik dengan layanan ${formData.category}. Mohon informasi lebih lanjut.`;
      window.open(
        `https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(message)}`,
        '_blank'
      );
      toast.success('Anda akan diarahkan ke WhatsApp');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="kontak" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto">
          <div className="bg-gradient-to-br from-sky-50 to-white rounded-3xl p-8 md:p-10 border border-sky-100 shadow-xl">
            {/* Header */}
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0a1628] mb-3">
                Minta Callback Gratis
              </h2>
              <p className="text-gray-600">
                Isi form di bawah dan tim kami akan menghubungi Anda via WhatsApp
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-[#0a1628] font-medium">
                  Nama Lengkap
                </Label>
                <Input
                  id="name"
                  placeholder="Masukkan nama Anda"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="py-5 bg-white border-gray-200 focus:border-sky-400 focus:ring-sky-400"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="whatsapp" className="text-[#0a1628] font-medium">
                  Nomor WhatsApp
                </Label>
                <Input
                  id="whatsapp"
                  type="tel"
                  placeholder="08xxxxxxxxxx"
                  value={formData.whatsapp}
                  onChange={(e) =>
                    setFormData({ ...formData, whatsapp: e.target.value })
                  }
                  className="py-5 bg-white border-gray-200 focus:border-sky-400 focus:ring-sky-400"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="category" className="text-[#0a1628] font-medium">
                  Kategori Properti
                </Label>
                <Select
                  value={formData.category}
                  onValueChange={(value) =>
                    setFormData({ ...formData, category: value })
                  }
                >
                  <SelectTrigger className="py-5 bg-white border-gray-200 focus:border-sky-400 focus:ring-sky-400">
                    <SelectValue placeholder="Pilih kategori" />
                  </SelectTrigger>
                  <SelectContent>
                    {propertyCategories.map((cat) => (
                      <SelectItem key={cat.id} value={cat.subtitle}>
                        {cat.subtitle}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-sky-500 hover:bg-sky-600 text-white font-semibold py-6 text-lg transition-all duration-300 hover:shadow-lg"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Mengirim...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Kirim & Chat WhatsApp
                  </>
                )}
              </Button>
            </form>

            {/* Trust Note */}
            <p className="text-center text-gray-500 text-xs mt-6">
              Data Anda aman dan tidak akan disebarluaskan
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
