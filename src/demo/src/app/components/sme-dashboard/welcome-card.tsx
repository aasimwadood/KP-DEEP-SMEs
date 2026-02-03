import { Card } from '@/app/components/ui/card';
import { Building2, MapPin } from 'lucide-react';

interface WelcomeCardProps {
  smeName: string;
  businessType: string;
  location: string;
}

export function WelcomeCard({ smeName, businessType, location }: WelcomeCardProps) {
  return (
    <Card className="p-6 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-2">Welcome back, {smeName}!</h1>
          <h2 className="text-xl mb-4" dir="rtl" lang="ur">
            خوش آمدید، {smeName}!
          </h2>
          
          <div className="flex flex-wrap gap-4 text-blue-100">
            <div className="flex items-center gap-2">
              <Building2 className="h-4 w-4" />
              <span className="text-sm">{businessType}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span className="text-sm">{location}</span>
            </div>
          </div>
        </div>
        
        <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
          <Building2 className="w-10 h-10" />
        </div>
      </div>
    </Card>
  );
}
