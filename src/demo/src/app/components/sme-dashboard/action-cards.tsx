import { Card } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Upload, Calendar, GraduationCap, ArrowRight } from 'lucide-react';

const actions = [
  {
    icon: Upload,
    title: 'Upload Required Documents',
    titleUrdu: 'مطلوبہ دستاویزات اپ لوڈ کریں',
    description: 'Complete your verification by uploading pending documents',
    descriptionUrdu: 'زیر التواء دستاویزات اپ لوڈ کرکے اپنی تصدیق مکمل کریں',
    action: 'Upload Now',
    actionUrdu: 'ابھی اپ لوڈ کریں',
    status: 'Pending',
    statusColor: 'bg-orange-100 text-orange-700',
  },
  {
    icon: Calendar,
    title: 'Schedule Consultant Visit',
    titleUrdu: 'کنسلٹنٹ کا دورہ طے کریں',
    description: 'Book a free consultation to set up your digital tools',
    descriptionUrdu: 'اپنے ڈیجیٹل ٹولز کو ترتیب دینے کے لیے مفت مشاورت بک کریں',
    action: 'Schedule',
    actionUrdu: 'شیڈول کریں',
    status: 'Available',
    statusColor: 'bg-green-100 text-green-700',
  },
  {
    icon: GraduationCap,
    title: 'Join Training Session',
    titleUrdu: 'تربیتی سیشن میں شامل ہوں',
    description: 'Learn how to maximize your software benefits',
    descriptionUrdu: 'جانیں کہ اپنے سافٹ ویئر کے فوائد کو کیسے زیادہ سے زیادہ کریں',
    action: 'View Sessions',
    actionUrdu: 'سیشن دیکھیں',
    status: 'New',
    statusColor: 'bg-blue-100 text-blue-700',
  },
];

export function ActionCards() {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      {actions.map((action, index) => (
        <Card key={index} className="p-6 hover:shadow-lg transition-shadow group">
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className={`w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors`}>
                <action.icon className="w-6 h-6 text-blue-600" />
              </div>
              <span className={`text-xs font-semibold px-2 py-1 rounded ${action.statusColor}`}>
                {action.status}
              </span>
            </div>
            
            {/* Content */}
            <div className="flex-1">
              <h4 className="font-semibold text-gray-900 mb-1">{action.title}</h4>
              <h4 className="font-semibold text-gray-900 mb-2 text-sm" dir="rtl">
                {action.titleUrdu}
              </h4>
              <p className="text-sm text-gray-600 mb-2">{action.description}</p>
              <p className="text-xs text-gray-500" dir="rtl">
                {action.descriptionUrdu}
              </p>
            </div>
            
            {/* Action Button */}
            <Button className="w-full mt-4 group-hover:bg-blue-700 transition-colors">
              {action.action}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <div className="text-center text-xs text-gray-500 mt-2" dir="rtl">
              {action.actionUrdu}
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
