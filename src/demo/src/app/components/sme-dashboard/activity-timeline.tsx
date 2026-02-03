import { Card } from '@/app/components/ui/card';
import { FileText, CheckCircle2, Upload, MessageSquare } from 'lucide-react';

const activities = [
  {
    icon: CheckCircle2,
    title: 'Verification Completed',
    description: 'Your business details have been verified',
    time: '2 hours ago',
    color: 'text-green-600 bg-green-50',
  },
  {
    icon: Upload,
    title: 'Documents Uploaded',
    description: 'CNIC and business registration submitted',
    time: '1 day ago',
    color: 'text-blue-600 bg-blue-50',
  },
  {
    icon: MessageSquare,
    title: 'Consultant Assigned',
    description: 'Ahmed Khan will guide your implementation',
    time: '2 days ago',
    color: 'text-purple-600 bg-purple-50',
  },
  {
    icon: FileText,
    title: 'Application Approved',
    description: 'Your grant application has been approved',
    time: '5 days ago',
    color: 'text-orange-600 bg-orange-50',
  },
];

export function ActivityTimeline() {
  return (
    <Card className="p-6">
      <h3 className="font-semibold text-lg text-gray-900 mb-4">Recent Activity</h3>
      <h3 className="font-semibold text-lg text-gray-900 mb-6" dir="rtl" lang="ur">
        حالیہ سرگرمی
      </h3>
      
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="flex gap-4">
            {/* Timeline Line */}
            <div className="flex flex-col items-center">
              <div className={`w-10 h-10 rounded-full ${activity.color} flex items-center justify-center`}>
                <activity.icon className="w-5 h-5" />
              </div>
              {index < activities.length - 1 && (
                <div className="w-0.5 h-full bg-gray-200 mt-2" />
              )}
            </div>
            
            {/* Content */}
            <div className="flex-1 pb-6">
              <h4 className="font-medium text-gray-900">{activity.title}</h4>
              <p className="text-sm text-gray-600 mt-1">{activity.description}</p>
              <span className="text-xs text-gray-400 mt-2 block">{activity.time}</span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
