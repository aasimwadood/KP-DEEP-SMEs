import { Home, FileText, GraduationCap, HelpCircle, User, ChevronRight } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

interface SidebarProps {
  activeItem: string;
  onItemClick: (item: string) => void;
}

const menuItems = [
  { id: 'home', label: 'Home', labelUrdu: 'ہوم', icon: Home },
  { id: 'vouchers', label: 'My Vouchers', labelUrdu: 'میرے واؤچرز', icon: FileText },
  { id: 'training', label: 'Training', labelUrdu: 'تربیت', icon: GraduationCap },
  { id: 'support', label: 'Support', labelUrdu: 'مدد', icon: HelpCircle },
  { id: 'profile', label: 'Profile', labelUrdu: 'پروفائل', icon: User },
];

export function Sidebar({ activeItem, onItemClick }: SidebarProps) {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 h-screen sticky top-0 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b">
        <div className="font-bold text-2xl text-blue-600">KP-DEEP</div>
        <div className="text-xs text-gray-600 mt-1">SME Dashboard</div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.id}>
              <Button
                variant={activeItem === item.id ? 'default' : 'ghost'}
                className={`w-full justify-start ${
                  activeItem === item.id
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => onItemClick(item.id)}
              >
                <item.icon className="mr-3 h-5 w-5" />
                <div className="flex-1 text-left">
                  <div>{item.label}</div>
                  <div className="text-xs opacity-80" dir="rtl">
                    {item.labelUrdu}
                  </div>
                </div>
                {activeItem === item.id && <ChevronRight className="h-4 w-4" />}
              </Button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Help Section */}
      <div className="p-4 border-t bg-blue-50">
        <div className="text-sm font-semibold text-gray-900 mb-2">Need Help?</div>
        <div className="text-xs text-gray-600 mb-3" dir="rtl">
          مدد چاہیے؟
        </div>
        <Button size="sm" variant="outline" className="w-full">
          <HelpCircle className="mr-2 h-4 w-4" />
          Contact Support
        </Button>
      </div>
    </aside>
  );
}
