import { useState } from 'react';
import { Card } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Label } from '@/app/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/app/components/ui/radio-group';
import { CheckCircle2, XCircle } from 'lucide-react';

export function EligibilityWidget() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    location: '',
    employees: '',
    registered: '',
    revenue: '',
  });
  const [result, setResult] = useState<'eligible' | 'ineligible' | null>(null);

  const handleAnswer = (key: string, value: string) => {
    setAnswers({ ...answers, [key]: value });
  };

  const checkEligibility = () => {
    const isEligible =
      answers.location === 'kp' &&
      (answers.employees === '1-50' || answers.employees === '51-250') &&
      answers.registered === 'yes' &&
      (answers.revenue === 'below-10' || answers.revenue === '10-50');

    setResult(isEligible ? 'eligible' : 'ineligible');
  };

  const resetWidget = () => {
    setStep(1);
    setAnswers({ location: '', employees: '', registered: '', revenue: '' });
    setResult(null);
  };

  return (
    <section id="eligibility" className="py-16 px-4 bg-white">
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
            {/* Question 1: Location */}
            <div>
              <Label className="block text-sm font-semibold text-gray-700 mb-2">
                1. Where is your business located? / آپ کا کاروبار کہاں واقع ہے؟
              </Label>
              <RadioGroup
                value={answers.location}
                onValueChange={(value) => handleAnswer('location', value)}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="kp" />
                  <Label className="text-sm font-medium text-gray-900">
                    KP / کیپ
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="other" />
                  <Label className="text-sm font-medium text-gray-900">
                    Other / دیگر
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {/* Question 2: Number of Employees */}
            <div>
              <Label className="block text-sm font-semibold text-gray-700 mb-2">
                2. How many employees do you have? / آپ کے کامگر کتنا ہے؟
              </Label>
              <RadioGroup
                value={answers.employees}
                onValueChange={(value) => handleAnswer('employees', value)}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="1-50" />
                  <Label className="text-sm font-medium text-gray-900">
                    1-50
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="51-250" />
                  <Label className="text-sm font-medium text-gray-900">
                    51-250
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="251-500" />
                  <Label className="text-sm font-medium text-gray-900">
                    251-500
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="501-1000" />
                  <Label className="text-sm font-medium text-gray-900">
                    501-1000
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="1001+" />
                  <Label className="text-sm font-medium text-gray-900">
                    1001+
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {/* Question 3: Registered */}
            <div>
              <Label className="block text-sm font-semibold text-gray-700 mb-2">
                3. Is your business registered? / آپ کا کاروبار رجسٹرڈ ہے؟
              </Label>
              <RadioGroup
                value={answers.registered}
                onValueChange={(value) => handleAnswer('registered', value)}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" />
                  <Label className="text-sm font-medium text-gray-900">
                    Yes / جی ہاں
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" />
                  <Label className="text-sm font-medium text-gray-900">
                    No / نہیں
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {/* Question 4: Annual Revenue */}
            <div>
              <Label className="block text-sm font-semibold text-gray-700 mb-2">
                4. What is your approximate annual revenue? / آپ کا تقریباً سالانہ آمدانی چیت کتنی ہے؟
              </Label>
              <RadioGroup
                value={answers.revenue}
                onValueChange={(value) => handleAnswer('revenue', value)}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="below-10" />
                  <Label className="text-sm font-medium text-gray-900">
                    Below PKR 10M / PKR 10M سے نیچے
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="10-50" />
                  <Label className="text-sm font-medium text-gray-900">
                    PKR 10M - PKR 50M / PKR 10M - PKR 50M
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="50-100" />
                  <Label className="text-sm font-medium text-gray-900">
                    PKR 50M - PKR 100M / PKR 50M - PKR 100M
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="100+" />
                  <Label className="text-sm font-medium text-gray-900">
                    PKR 100M+ / PKR 100M+
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {/* Check Button */}
            <Button
              onClick={checkEligibility}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-6 text-lg"
              disabled={!answers.location || !answers.employees || !answers.registered || !answers.revenue}
            >
              Check Eligibility Now / ابھی اہلیت چیک کریں
            </Button>

            {/* Result */}
            {result && (
              <div
                className={`p-6 rounded-lg ${
                  result === 'eligible' ? 'bg-green-50 border-2 border-green-200' : 'bg-orange-50 border-2 border-orange-200'
                }`}
              >
                <div className="flex items-start gap-3">
                  {result === 'eligible' ? (
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  ) : (
                    <XCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                  )}
                  <div className="flex-1">
                    {result === 'eligible' ? (
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