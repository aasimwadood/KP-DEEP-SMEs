import { useState } from 'react';
import { Card } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/app/components/ui/select';
import { Slider } from '@/app/components/ui/slider';
import { CheckCircle2, AlertCircle } from 'lucide-react';

const businessTypes = [
  { value: 'manufacturing', label: 'Manufacturing / مینوفیکچرنگ' },
  { value: 'retail', label: 'Retail / خوردہ' },
  { value: 'services', label: 'Services / خدمات' },
];

const kpDistricts = [
  { value: 'peshawar', label: 'Peshawar / پشاور' },
  { value: 'mardan', label: 'Mardan / مردان' },
  { value: 'abbottabad', label: 'Abbottabad / ایبٹ آباد' },
  { value: 'swat', label: 'Swat / سوات' },
  { value: 'dera-ismail-khan', label: 'Dera Ismail Khan / ڈیرہ اسماعیل خان' },
  { value: 'kohat', label: 'Kohat / کوہاٹ' },
  { value: 'bannu', label: 'Bannu / بنوں' },
  { value: 'other', label: 'Other District / دیگر اضلاع' },
];

export function EligibilityWidget() {
  const [businessType, setBusinessType] = useState<string>('');
  const [location, setLocation] = useState<string>('');
  const [turnover, setTurnover] = useState<number[]>([500000]);
  const [showResult, setShowResult] = useState(false);

  const handleCheckEligibility = () => {
    setShowResult(true);
  };

  const isEligible = businessType && location && turnover[0] >= 100000;

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        <Card className="p-8 shadow-xl border-2 border-blue-100">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Check Your Eligibility
            </h2>
            <h2 className="text-3xl font-bold text-gray-900 mb-4" dir="rtl" lang="ur">
              اپنی اہلیت چیک کریں
            </h2>
            <p className="text-gray-600">
              Answer 3 quick questions to see if you qualify for the KP-DEEP program
            </p>
          </div>

          {/* Questions */}
          <div className="space-y-6">
            {/* Question 1: Business Type */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                1. What type of business do you operate? / آپ کس قسم کا کاروبار چلاتے ہیں؟
              </label>
              <Select value={businessType} onValueChange={setBusinessType}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select business type / کاروبار کی قسم منتخب کریں" />
                </SelectTrigger>
                <SelectContent>
                  {businessTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Question 2: Location */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                2. Where is your business located? / آپ کا کاروبار کہاں واقع ہے؟
              </label>
              <Select value={location} onValueChange={setLocation}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select district / ضلع منتخب کریں" />
                </SelectTrigger>
                <SelectContent>
                  {kpDistricts.map((district) => (
                    <SelectItem key={district.value} value={district.value}>
                      {district.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Question 3: Annual Turnover */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                3. What is your approximate annual turnover? / آپ کا تقریباً سالانہ کاروبار کتنا ہے؟
              </label>
              <div className="pt-4 pb-2">
                <Slider
                  value={turnover}
                  onValueChange={setTurnover}
                  min={0}
                  max={10000000}
                  step={100000}
                  className="w-full"
                />
                <div className="flex justify-between mt-3">
                  <span className="text-sm text-gray-600">PKR 0</span>
                  <span className="text-lg font-semibold text-blue-600">
                    PKR {turnover[0].toLocaleString()}
                  </span>
                  <span className="text-sm text-gray-600">PKR 10M+</span>
                </div>
              </div>
            </div>

            {/* Check Button */}
            <Button 
              onClick={handleCheckEligibility}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-6 text-lg"
              disabled={!businessType || !location}
            >
              Check Eligibility Now / ابھی اہلیت چیک کریں
            </Button>

            {/* Result */}
            {showResult && (
              <div
                className={`p-6 rounded-lg ${
                  isEligible ? 'bg-green-50 border-2 border-green-200' : 'bg-orange-50 border-2 border-orange-200'
                }`}
              >
                <div className="flex items-start gap-3">
                  {isEligible ? (
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  ) : (
                    <AlertCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                  )}
                  <div className="flex-1">
                    {isEligible ? (
                      <>
                        <h3 className="font-bold text-green-900 text-lg mb-2">
                          Congratulations! You're Eligible
                        </h3>
                        <h3 className="font-bold text-green-900 text-lg mb-3" dir="rtl" lang="ur">
                          مبارک ہو! آپ اہل ہیں
                        </h3>
                        <p className="text-green-800 mb-2">
                          Based on your responses, you qualify for the KP-DEEP digital transformation grant. 
                          You can receive up to PKR 100,000 in software subsidies and training support.
                        </p>
                        <p className="text-green-800 mb-4" dir="rtl" lang="ur">
                          آپ کے جوابات کی بنیاد پر، آپ کے پی ڈیپ ڈیجیٹل تبدیلی گرانٹ کے لیے اہل ہیں۔
                        </p>
                        <Button className="bg-green-600 hover:bg-green-700 text-white">
                          Apply Now / ابھی درخواست دیں
                        </Button>
                      </>
                    ) : (
                      <>
                        <h3 className="font-bold text-orange-900 text-lg mb-2">
                          Almost There!
                        </h3>
                        <p className="text-orange-800">
                          Your business may still qualify with additional documentation. Please contact our support team for assistance.
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </Card>
      </div>
    </section>
  );
}
