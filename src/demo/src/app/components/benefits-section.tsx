import { Card } from '@/app/components/ui/card';
import { ShieldCheck, CreditCard, TrendingUp, HeadphonesIcon } from 'lucide-react';

export function BenefitsSection() {
  const benefits = [
    {
      icon: ShieldCheck,
      title: 'Free Digital Tools',
      titleUrdu: 'مفت ڈیجیٹل ٹولز',
      description: 'Get subsidized accounting, inventory, and POS software worth up to PKR 50,000',
      descriptionUrdu: 'PKR 50,000 تک کی مالیت کے اکاؤنٹنگ، انوینٹری، اور POS سافٹ ویئر حاصل کریں',
    },
    {
      icon: CreditCard,
      title: 'Easy Financing Access',
      titleUrdu: 'آسان فنانسنگ تک رسائی',
      description: 'Digital records make you eligible for bank loans up to PKR 2 million',
      descriptionUrdu: 'ڈیجیٹل ریکارڈ آپ کو PKR 2 ملین تک کے بینک قرضوں کے اہل بناتے ہیں',
    },
    {
      icon: TrendingUp,
      title: 'Business Growth',
      titleUrdu: 'کاروباری ترقی',
      description: 'Digital SMEs see 40% average revenue increase within 12 months',
      descriptionUrdu: 'ڈیجیٹل SMEs 12 ماہ میں اوسطاً 40٪ آمدنی میں اضافہ دیکھتے ہیں',
    },
    {
      icon: HeadphonesIcon,
      title: 'Free Training & Support',
      titleUrdu: 'مفت تربیت اور مدد',
      description: 'Personal consultant and 24/7 helpline in Urdu, Pashto, and English',
      descriptionUrdu: 'اردو، پشتو اور انگریزی میں ذاتی مشیر اور 24/7 ہیلپ لائن',
    },
  ];

  return (
    <section id="benefits" className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Digitize Your Business?
          </h2>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" dir="rtl" lang="ur">
            اپنے کاروبار کو کیوں ڈیجیٹل بنائیں؟
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transform your business operations and unlock new opportunities for growth
          </p>
        </div>
        
        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col items-center text-center space-y-4">
                {/* Icon */}
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <benefit.icon className="w-8 h-8 text-blue-600" />
                </div>
                
                {/* Title */}
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-1">
                    {benefit.title}
                  </h3>
                  <h3 className="font-semibold text-lg text-gray-900 mb-3" dir="rtl" lang="ur">
                    {benefit.titleUrdu}
                  </h3>
                </div>
                
                {/* Description */}
                <div className="space-y-2">
                  <p className="text-sm text-gray-600">
                    {benefit.description}
                  </p>
                  <p className="text-sm text-gray-600" dir="rtl" lang="ur">
                    {benefit.descriptionUrdu}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}