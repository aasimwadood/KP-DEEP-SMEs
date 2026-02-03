import { Card } from '@/app/components/ui/card';
import { TrendingUp, FileText, DollarSign, Activity } from 'lucide-react';

interface QuickStatsProps {
  digitalHealthScore: number;
  invoicesThisMonth: number;
  pendingReceivables: number;
}

export function QuickStats({
  digitalHealthScore,
  invoicesThisMonth,
  pendingReceivables,
}: QuickStatsProps) {
  const getScoreColor = (score: number) => {
    if (score >= 71) return 'text-green-600 bg-green-50';
    if (score >= 41) return 'text-yellow-600 bg-yellow-50';
    return 'text-red-600 bg-red-50';
  };

  const stats = [
    {
      icon: Activity,
      label: 'Digital Health Score',
      labelUrdu: 'ڈیجیٹل ہیلتھ سکور',
      value: digitalHealthScore,
      suffix: '/100',
      colorClass: getScoreColor(digitalHealthScore),
    },
    {
      icon: FileText,
      label: 'Invoices This Month',
      labelUrdu: 'اس ماہ کی انوائسز',
      value: invoicesThisMonth,
      suffix: '',
      colorClass: 'text-blue-600 bg-blue-50',
    },
    {
      icon: DollarSign,
      label: 'Pending Receivables',
      labelUrdu: 'بقایا وصولیاں',
      value: `PKR ${pendingReceivables.toLocaleString()}`,
      suffix: '',
      colorClass: 'text-purple-600 bg-purple-50',
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-4">
      {stats.map((stat, index) => (
        <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="text-sm text-gray-600 mb-1">{stat.label}</div>
              <div className="text-xs text-gray-500 mb-3" dir="rtl">
                {stat.labelUrdu}
              </div>
              <div className="text-3xl font-bold text-gray-900">
                {stat.value}
                {stat.suffix && (
                  <span className="text-lg text-gray-500">{stat.suffix}</span>
                )}
              </div>
            </div>
            <div className={`w-12 h-12 rounded-lg ${stat.colorClass} flex items-center justify-center`}>
              <stat.icon className="w-6 h-6" />
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
