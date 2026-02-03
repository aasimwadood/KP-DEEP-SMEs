import { Card } from '@/app/components/ui/card';
import { Shield, Lock, Award, Building2 } from 'lucide-react';

export function TrustIndicators() {
  return (
    <section className="py-12 px-4 bg-white border-t">
      <div className="container mx-auto max-w-6xl">
        {/* Government Partners */}
        <div className="mb-8">
          <h3 className="text-center text-sm font-semibold text-gray-600 mb-6 uppercase tracking-wide">
            Powered by Government of Khyber Pakhtunkhwa
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {/* Government Logo Placeholder */}
            <div className="flex items-center gap-3 px-6 py-3 bg-gray-50 rounded-lg">
              <Building2 className="w-10 h-10 text-blue-600" />
              <div>
                <div className="font-bold text-gray-900">Government of KP</div>
                <div className="text-xs text-gray-600">Official Partner</div>
              </div>
            </div>

            {/* KPRA Placeholder */}
            <div className="flex items-center gap-3 px-6 py-3 bg-gray-50 rounded-lg">
              <Award className="w-10 h-10 text-green-600" />
              <div>
                <div className="font-bold text-gray-900">KPRA</div>
                <div className="text-xs text-gray-600">Tax Authority</div>
              </div>
            </div>
          </div>
        </div>

        {/* Banking Partners */}
        <div className="mb-8">
          <h3 className="text-center text-sm font-semibold text-gray-600 mb-6 uppercase tracking-wide">
            Banking Partners
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {/* Bank of Khyber */}
            <div className="flex items-center gap-3 px-6 py-3 bg-gray-50 rounded-lg">
              <Building2 className="w-10 h-10 text-blue-700" />
              <div>
                <div className="font-bold text-gray-900">Bank of Khyber</div>
                <div className="text-xs text-gray-600">Lending Partner</div>
              </div>
            </div>

            {/* Additional Banks */}
            <div className="flex items-center gap-3 px-6 py-3 bg-gray-50 rounded-lg">
              <Building2 className="w-10 h-10 text-green-700" />
              <div>
                <div className="font-bold text-gray-900">Partner Banks</div>
                <div className="text-xs text-gray-600">Financial Services</div>
              </div>
            </div>
          </div>
        </div>

        {/* Security Badges */}
        <div className="border-t pt-8">
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <Card className="p-4 text-center hover:shadow-md transition-shadow">
              <Shield className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="font-semibold text-sm text-gray-900 mb-1">
                Bank-Level Security
              </div>
              <div className="text-xs text-gray-600">
                256-bit SSL Encryption
              </div>
            </Card>

            <Card className="p-4 text-center hover:shadow-md transition-shadow">
              <Lock className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <div className="font-semibold text-sm text-gray-900 mb-1">
                Data Privacy
              </div>
              <div className="text-xs text-gray-600">
                GDPR Compliant
              </div>
            </Card>

            <Card className="p-4 text-center hover:shadow-md transition-shadow">
              <Award className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <div className="font-semibold text-sm text-gray-900 mb-1">
                Verified Platform
              </div>
              <div className="text-xs text-gray-600">
                Government Approved
              </div>
            </Card>

            <Card className="p-4 text-center hover:shadow-md transition-shadow">
              <Building2 className="w-8 h-8 text-orange-600 mx-auto mb-2" />
              <div className="font-semibold text-sm text-gray-900 mb-1">
                FBR Integrated
              </div>
              <div className="text-xs text-gray-600">
                Tax Compliant
              </div>
            </Card>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-500 max-w-3xl mx-auto">
            KP-DEEP is an initiative by the Government of Khyber Pakhtunkhwa to digitally transform SMEs. 
            All data is encrypted and stored securely. We do not share your information without consent.
          </p>
          <p className="text-xs text-gray-500 max-w-3xl mx-auto mt-2" dir="rtl" lang="ur">
            کے پی ڈیپ حکومت خیبر پختونخوا کا ایک اقدام ہے۔ تمام ڈیٹا محفوظ ہے اور ہم آپ کی معلومات کو اجازت کے بغیر شیئر نہیں کرتے۔
          </p>
        </div>
      </div>
    </section>
  );
}
