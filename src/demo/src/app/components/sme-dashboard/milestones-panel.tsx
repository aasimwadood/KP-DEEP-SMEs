import { Card } from '@/app/components/ui/card';
import { Calendar, Clock, ExternalLink } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

const milestones = [
  {
    title: 'Upload Business Registration',
    date: 'Feb 8, 2026',
    daysLeft: 5,
    urgent: true,
  },
  {
    title: 'Complete Digital Training',
    date: 'Feb 15, 2026',
    daysLeft: 12,
    urgent: false,
  },
  {
    title: 'First Quarterly Report',
    date: 'Mar 31, 2026',
    daysLeft: 56,
    urgent: false,
  },
];

const quickLinks = [
  { label: 'FBR Portal', labelUrdu: 'ایف بی آر پورٹل', url: '#' },
  { label: 'KPRA Website', labelUrdu: 'کے پی آر اے ویب سائٹ', url: '#' },
  { label: 'Bank Portal', labelUrdu: 'بینک پورٹل', url: '#' },
];

export function MilestonesPanel() {
  return (
    <div className="space-y-4">
      {/* Milestones */}
      <Card className="p-4">
        <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <Calendar className="w-5 h-5 text-blue-600" />
          Upcoming Milestones
        </h3>
        <h3 className="font-semibold text-gray-900 mb-4 text-sm" dir="rtl" lang="ur">
          آنے والے سنگ میل
        </h3>
        
        <div className="space-y-3">
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className={`p-3 rounded-lg border ${
                milestone.urgent
                  ? 'bg-orange-50 border-orange-200'
                  : 'bg-gray-50 border-gray-200'
              }`}
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1">
                  <h4 className="font-medium text-sm text-gray-900">
                    {milestone.title}
                  </h4>
                  <div className="flex items-center gap-2 mt-2 text-xs text-gray-600">
                    <Clock className="w-3 h-3" />
                    <span>{milestone.date}</span>
                  </div>
                </div>
                <div
                  className={`text-xs font-semibold px-2 py-1 rounded ${
                    milestone.urgent
                      ? 'bg-orange-200 text-orange-700'
                      : 'bg-blue-100 text-blue-700'
                  }`}
                >
                  {milestone.daysLeft}d
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
      
      {/* Quick Links */}
      <Card className="p-4">
        <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
        <h3 className="font-semibold text-gray-900 mb-4 text-sm" dir="rtl" lang="ur">
          فوری روابط
        </h3>
        
        <div className="space-y-2">
          {quickLinks.map((link, index) => (
            <Button
              key={index}
              variant="outline"
              className="w-full justify-between"
              asChild
            >
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                <span className="flex flex-col items-start">
                  <span className="text-sm">{link.label}</span>
                  <span className="text-xs text-gray-500" dir="rtl">
                    {link.labelUrdu}
                  </span>
                </span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          ))}
        </div>
      </Card>
    </div>
  );
}
