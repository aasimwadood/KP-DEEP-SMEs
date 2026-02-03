import { Card } from '@/app/components/ui/card';
import { CreditCard, FileText, Package, TrendingUp, Users, Shield } from 'lucide-react';

const benefits = [
  {
    icon: CreditCard,
    title: 'Access to Credit',
    titleUrdu: 'قرضے تک رسائی',
    description: 'Get approved for business loans faster with your digital records and credit score',
    descriptionUrdu: 'اپنے ڈیجیٹل ریکارڈ اور کریڈٹ سکور کے ساتھ تیزی سے قرضے حاصل کریں',
  },
  {
    icon: FileText,
    title: 'Tax Compliance Made Easy',
    titleUrdu: 'ٹیکس کی آسانی',
    description: 'Automatically generate tax-ready invoices and reports for FBR and KPRA',
    descriptionUrdu: 'ایف بی آر اور کے پی آر اے کے لیے خودکار طریقے سے رپورٹس بنائیں',
  },
  {
    icon: Package,
    title: 'Smart Inventory Management',
    titleUrdu: 'ذہین اسٹاک مینجمنٹ',
    description: 'Track stock levels, get low-stock alerts, and manage suppliers efficiently',
    descriptionUrdu: 'اسٹاک کی سطح کو ٹریک کریں، کم اسٹاک الرٹ حاصل کریں',
  },
  {
    icon: TrendingUp,
    title: 'Business Growth Insights',
    titleUrdu: 'کاروباری ترقی کی معلومات',
    description: 'Understand your sales trends, profit margins, and growth opportunities',
    descriptionUrdu: 'اپنی فروخت کے رجحانات، منافع اور ترقی کے مواقع سمجھیں',
  },
  {
    icon: Users,
    title: 'Customer Management',
    titleUrdu: 'گاہک مینجمنٹ',
    description: 'Digital khata for tracking receivables and sending payment reminders',
    descriptionUrdu: 'وصولیوں کو ٹریک کرنے اور ادائیگی کی یاد دہانی بھیجنے کے لیے ڈیجیٹل کھاتہ',
  },
  {
    icon: Shield,
    title: 'Data Security & Privacy',
    titleUrdu: 'ڈیٹا سیکیورٹی اور رازداری',
    description: 'Your business data is encrypted and protected with bank-level security',
    descriptionUrdu: 'آپ کا کاروباری ڈیٹا محفوظ اور بینک جیسی سیکیورٹی سے محفوظ ہے',
  },
];

export function BenefitsSection() {
  return (
    <section className="py-16 px-4 bg-gray-50">
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
