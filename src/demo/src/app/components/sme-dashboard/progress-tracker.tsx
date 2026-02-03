import { Card } from '@/app/components/ui/card';
import { CheckCircle2, Circle, Clock } from 'lucide-react';

interface ProgressTrackerProps {
  currentStep: number;
}

const steps = [
  { id: 1, label: 'Application', labelUrdu: 'درخواست', status: 'complete' },
  { id: 2, label: 'Verification', labelUrdu: 'تصدیق', status: 'complete' },
  { id: 3, label: 'Implementation', labelUrdu: 'عمل درآمد', status: 'current' },
  { id: 4, label: 'Active', labelUrdu: 'فعال', status: 'pending' },
];

export function ProgressTracker({ currentStep }: ProgressTrackerProps) {
  return (
    <Card className="p-6">
      <h3 className="font-semibold text-lg text-gray-900 mb-4">Grant Progress</h3>
      <h3 className="font-semibold text-lg text-gray-900 mb-6" dir="rtl" lang="ur">
        گرانٹ کی پیشرفت
      </h3>
      
      <div className="relative">
        {/* Progress Line */}
        <div className="absolute top-5 left-0 right-0 h-1 bg-gray-200">
          <div
            className="h-full bg-blue-600 transition-all duration-500"
            style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
          />
        </div>
        
        {/* Steps */}
        <div className="relative flex justify-between">
          {steps.map((step, index) => {
            const isComplete = index + 1 < currentStep;
            const isCurrent = index + 1 === currentStep;
            
            return (
              <div key={step.id} className="flex flex-col items-center">
                {/* Icon */}
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all ${
                    isComplete
                      ? 'bg-blue-600 border-blue-600 text-white'
                      : isCurrent
                      ? 'bg-white border-blue-600 text-blue-600'
                      : 'bg-white border-gray-300 text-gray-400'
                  }`}
                >
                  {isComplete ? (
                    <CheckCircle2 className="w-6 h-6" />
                  ) : isCurrent ? (
                    <Clock className="w-6 h-6" />
                  ) : (
                    <Circle className="w-6 h-6" />
                  )}
                </div>
                
                {/* Label */}
                <div className="mt-3 text-center">
                  <div
                    className={`text-sm font-medium ${
                      isComplete || isCurrent ? 'text-gray-900' : 'text-gray-400'
                    }`}
                  >
                    {step.label}
                  </div>
                  <div
                    className={`text-xs ${
                      isComplete || isCurrent ? 'text-gray-600' : 'text-gray-400'
                    }`}
                    dir="rtl"
                  >
                    {step.labelUrdu}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Card>
  );
}
