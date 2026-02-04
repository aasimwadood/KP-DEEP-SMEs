import { Button } from '@/app/components/ui/button';
import { PlayCircle } from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (page: string) => void;
}

export function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Urdu Headline */}
            <h1 className="text-4xl md:text-5xl font-bold leading-tight" dir="rtl" lang="ur">
              اپنے کاروبار کو ڈیجیٹل بنائیں، ترقی حاصل کریں
            </h1>
            
            {/* English Headline */}
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Digitize Your Business, Unlock Growth
            </h1>
            
            {/* Description */}
            <p className="text-lg text-blue-100 max-w-xl">
              Join thousands of SMEs in Khyber Pakhtunkhwa accessing digital tools, financial services, and government support to grow their businesses.
            </p>
            
            <p className="text-lg text-blue-100 max-w-xl" dir="rtl" lang="ur">
              خیبر پختونخوا میں ہزاروں چھوٹے اور درمیانے کاروباروں میں شامل ہوں اور ڈیجیٹل ٹولز، مالیاتی خدمات اور حکومتی مدد حاصل کریں
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8"
                onClick={() => {
                  const element = document.getElementById('eligibility');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Check Your Eligibility
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white/10 font-semibold px-8"
                onClick={() => onNavigate('training')}
              >
                <PlayCircle className="mr-2 h-5 w-5" />
                Watch Demo Video
              </Button>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1709109769928-74940d9ecbe5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWtpc3RhbmklMjBzbWFsbCUyMGJ1c2luZXNzJTIwb3duZXIlMjBzaG9wfGVufDF8fHx8MTc3MDA4ODg2MHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="SME Business Owner"
                className="w-full h-[400px] object-cover"
              />
              {/* Overlay Stats */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold">5,000+</div>
                    <div className="text-xs text-gray-300">SMEs Digitized</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">PKR 2B+</div>
                    <div className="text-xs text-gray-300">Loans Disbursed</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">40%</div>
                    <div className="text-xs text-gray-300">Avg. Growth</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}