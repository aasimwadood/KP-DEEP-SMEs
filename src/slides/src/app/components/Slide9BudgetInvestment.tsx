import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import { DollarSign, TrendingUp } from 'lucide-react';

export function Slide9BudgetInvestment() {
  const budgetData = [
    { name: 'Grant Subsidies', value: 528, percentage: 48, color: '#00A86B' },
    { name: 'Implementation Support', value: 297, percentage: 27, color: '#00BCD4' },
    { name: 'Capacity Building', value: 154, percentage: 14, color: '#0033A0' },
    { name: 'Technology Platform', value: 121, percentage: 11, color: '#FF6B35' },
  ];

  const disbursementData = [
    { year: 'Year 1', amount: 450 },
    { year: 'Year 2', amount: 400 },
    { year: 'Year 3', amount: 250 },
  ];

  const COLORS = ['#00A86B', '#00BCD4', '#0033A0', '#FF6B35'];

  return (
    <div className="w-full h-full bg-gradient-to-br from-gray-50 to-blue-50 p-10 flex flex-col overflow-hidden">
      {/* Header */}
      <div className="mb-4">
        <h2 className="text-3xl font-bold text-[#0033A0] mb-2">Budget & Investment Breakdown</h2>
        <div className="h-1 w-32 bg-[#00A86B]"></div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex gap-6 min-h-0">
        {/* Left Side - Pie Chart & Breakdown */}
        <div className="flex-1 flex flex-col min-h-0">
          {/* Total Budget Header */}
          <div className="bg-gradient-to-r from-[#0033A0] to-blue-600 text-white rounded-xl p-5 mb-4 shadow-xl text-center">
            <p className="text-lg mb-1">Total Project Budget</p>
            <p className="text-5xl font-bold">PKR 1,100M</p>
            <p className="text-sm opacity-90 mt-1">Over 3 Years</p>
          </div>

          {/* Pie Chart */}
          <div className="bg-white rounded-xl p-4 shadow-lg flex-1 min-h-0">
            <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">Budget Allocation</h3>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={budgetData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percentage }) => `${percentage}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {budgetData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value) => `PKR ${value}M`}
                  contentStyle={{ 
                    backgroundColor: '#fff', 
                    border: '2px solid #0033A0',
                    borderRadius: '8px',
                    fontSize: '12px'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>

            {/* Legend with amounts */}
            <div className="grid grid-cols-2 gap-2 mt-3">
              {budgetData.map((item) => (
                <div key={item.name} className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                  <div 
                    className="w-3 h-3 rounded-full flex-shrink-0"
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <div className="flex-1">
                    <p className="text-xs font-semibold text-gray-900">{item.name}</p>
                    <p className="text-xs font-bold" style={{ color: item.color }}>
                      PKR {item.value}M ({item.percentage}%)
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side - ROI & Timeline */}
        <div className="w-[45%] flex flex-col gap-4 min-h-0">
          {/* ROI Visualization */}
          <div className="bg-white rounded-xl p-5 shadow-lg border-2 border-[#00A86B]">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-[#00A86B]" />
              Return on Investment
            </h3>
            
            <div className="flex items-center justify-center gap-6 mb-4">
              <div className="text-center">
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-2 border-4 border-red-300">
                  <div className="text-center">
                    <p className="text-xs text-gray-600">Input</p>
                    <p className="text-xl font-bold text-red-600">₨1</p>
                  </div>
                </div>
                <p className="text-xs text-gray-600">Investment</p>
              </div>

              <div className="text-4xl font-bold text-[#00A86B]">→</div>

              <div className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-2 border-4 border-green-300">
                  <div className="text-center">
                    <p className="text-xs text-gray-600">Output</p>
                    <p className="text-xl font-bold text-[#00A86B]">₨4.5</p>
                  </div>
                </div>
                <p className="text-xs text-gray-600">Economic Value</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#00A86B] to-green-500 text-white p-3 rounded-lg text-center">
              <p className="text-base font-bold">4.5x Economic Multiplier Effect</p>
            </div>
          </div>

          {/* Funding Timeline */}
          <div className="bg-white rounded-xl p-4 shadow-lg flex-1 min-h-0">
            <h3 className="text-base font-bold text-gray-900 mb-3 flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-[#0033A0]" />
              3-Year Disbursement Schedule
            </h3>
            <ResponsiveContainer width="100%" height={140}>
              <BarChart data={disbursementData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="year" stroke="#6b7280" style={{ fontSize: '12px' }} />
                <YAxis stroke="#6b7280" style={{ fontSize: '12px' }} />
                <Tooltip 
                  formatter={(value) => `PKR ${value}M`}
                  contentStyle={{ 
                    backgroundColor: '#fff', 
                    border: '2px solid #0033A0',
                    borderRadius: '8px',
                    fontSize: '12px'
                  }}
                />
                <Bar 
                  dataKey="amount" 
                  fill="url(#disbursementGradient)"
                  radius={[8, 8, 0, 0]}
                />
                <defs>
                  <linearGradient id="disbursementGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#0033A0" />
                    <stop offset="100%" stopColor="#00BCD4" />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Sustainability Model */}
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-4 shadow-lg border-2 border-orange-300">
            <h3 className="text-base font-bold text-gray-900 mb-3">Sustainability Model</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <p className="text-xs text-gray-700"><span className="font-bold">Year 1-2:</span> 100% Government Funded</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <p className="text-xs text-gray-700"><span className="font-bold">Year 2-3:</span> Introduce Tiered Pricing</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <p className="text-xs text-gray-700"><span className="font-bold">Year 3+:</span> Full Cost Recovery</p>
              </div>
            </div>
            <div className="mt-3 pt-3 border-t border-orange-200">
              <p className="text-center text-xs font-bold text-orange-700">Transition to subscription by Year 3</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
