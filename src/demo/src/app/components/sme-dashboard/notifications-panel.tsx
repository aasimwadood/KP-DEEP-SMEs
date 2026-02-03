import { Card } from '@/app/components/ui/card';
import { Bell, MessageSquare, AlertCircle, CheckCircle2 } from 'lucide-react';
import { Badge } from '@/app/components/ui/badge';

const notifications = [
  {
    type: 'alert',
    icon: AlertCircle,
    title: 'Document Required',
    message: 'Please upload your CNIC copy to complete verification',
    time: '2 hours ago',
    unread: true,
    color: 'text-orange-600 bg-orange-50',
  },
  {
    type: 'message',
    icon: MessageSquare,
    title: 'Consultant Message',
    message: 'Your training session is scheduled for tomorrow at 2 PM',
    time: '5 hours ago',
    unread: true,
    color: 'text-blue-600 bg-blue-50',
  },
  {
    type: 'success',
    icon: CheckCircle2,
    title: 'Verification Complete',
    message: 'Your business details have been verified successfully',
    time: '1 day ago',
    unread: false,
    color: 'text-green-600 bg-green-50',
  },
  {
    type: 'info',
    icon: Bell,
    title: 'New Training Available',
    message: 'Advanced Inventory Management course is now open',
    time: '2 days ago',
    unread: false,
    color: 'text-purple-600 bg-purple-50',
  },
];

export function NotificationsPanel() {
  const unreadCount = notifications.filter((n) => n.unread).length;

  return (
    <Card className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-gray-900">Notifications</h3>
        {unreadCount > 0 && (
          <Badge variant="destructive" className="rounded-full">
            {unreadCount}
          </Badge>
        )}
      </div>
      <h3 className="font-semibold text-gray-900 mb-4 text-sm" dir="rtl" lang="ur">
        اطلاعات
      </h3>
      
      <div className="space-y-3">
        {notifications.map((notification, index) => (
          <div
            key={index}
            className={`p-3 rounded-lg border transition-all ${
              notification.unread
                ? 'bg-blue-50/50 border-blue-200'
                : 'bg-gray-50 border-gray-200'
            } hover:shadow-sm cursor-pointer`}
          >
            <div className="flex gap-3">
              <div className={`w-8 h-8 rounded-full ${notification.color} flex items-center justify-center flex-shrink-0`}>
                <notification.icon className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <h4 className="font-medium text-sm text-gray-900 truncate">
                    {notification.title}
                  </h4>
                  {notification.unread && (
                    <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0 mt-1" />
                  )}
                </div>
                <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                  {notification.message}
                </p>
                <span className="text-xs text-gray-400 mt-1 block">
                  {notification.time}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <button className="w-full mt-4 text-sm text-blue-600 hover:text-blue-700 font-medium">
        View All Notifications
      </button>
    </Card>
  );
}
