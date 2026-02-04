import { Users, DollarSign, Package, Clock, TrendingUp } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export function Slide8ImpactMetrics() {
  const adoptionData = [
    { month: 'M3', smes: 100 },
    { month: 'M6', smes: 250 },
    { month: 'M9', smes: 450 },
    { month: 'M12', smes: 700 },
    { month: 'M15', smes: 950 },
    { month: 'M18', smes: 1200 },
    { month: 'M24', smes: 1500 },
  ];

  const creditData = [
    { year: 'Y1', amount: 50 },
    { year: 'Y2', amount: 180 },
    { year: 'Y3', amount: 450 },
  ];

  return (
    <div className="w-full h-full bg-white p-10 flex flex-col overflow-hidden">
      {/* Header */}
      <div className="mb-4">
        <h2 className="text-3xl font-bold text-[#0033A0] mb-2">Projected Impact & Success Metrics</h2>
        <div className="h-1 w-32 bg-[#00A86B]"></div>
      </div>

      {/* Content */}
      <div className="flex-1 flex gap-6 min-h-0">
        {/* Left Side - Key Metrics Grid */}
        <div className="flex-1 flex flex-col gap-4 min-h-0">
          <div className="grid grid-cols-2 gap-4">
            {/* Metric 1 */}
            <div className="bg-gradient-to-br from-[#0033A0] to-blue-600 text-white rounded-xl p-4 shadow-xl">
              <div className="flex items-start justify-between mb-2">
                <Users className="w-10 h-10" />
                <div className="bg-white/20 px-2 py-1 rounded-full text-xs font-bold">
                  TARGET
                </div>
              </div>
              <p className="text-4xl font-bold mb-1">1,500+</p>
              <p className="text-base opacity-90">SMEs Digitized</p>
              <div className="mt-2 pt-2 border-t border-white/20">
                <p className="text-xs">Across 10 districts in KP</p>
              </div>
            </div>

            {/* Metric 2 */}
            <div className="bg-gradient-to-br from-[#00A86B] to-green-600 text-white rounded-xl p-4 shadow-xl">
              <div className="flex items-start justify-between mb-2">
                <DollarSign className="w-10 h-10" />
                <div className="bg-white/20 px-2 py-1 rounded-full text-xs font-bold">
                  LOANS
                </div>
              </div>
              <p className="text-4xl font-bold mb-1">300+</p>
              <p className="text-base opacity-90">Loan Applications</p>
              <div className="mt-2 pt-2 border-t border-white/20">
                <p className="text-xs">Facilitated through platform</p>
              </div>
            </div>

            {/* Metric 3 */}
            <div className="bg-gradient-to-br from-[#00BCD4] to-cyan-600 text-white rounded-xl p-4 shadow-xl">
              <div className="flex items-start justify-between mb-2">
                <Package className="w-10 h-10" />
                <div className="bg-white/20 px-2 py-1 rounded-full text-xs font-bold">
                  EFFICIENCY
                </div>
              </div>
              <p className="text-4xl font-bold mb-1">25%</p>
              <p className="text-base opacity-90">Inventory Leakage ↓</p>
              <div className="mt-2 pt-2 border-t border-white/20">
                <p className="text-xs">Reduction in waste & theft</p>
              </div>
            </div>

            {/* Metric 4 */}
            <div className="bg-gradient-to-br from-purple-600 to-purple-700 text-white rounded-xl p-4 shadow-xl">
              <div className="flex items-start justify-between mb-2">
                <Clock className="w-10 h-10" />
                <div className="bg-white/20 px-2 py-1 rounded-full text-xs font-bold">
                  TIME SAVED
                </div>
              </div>
              <p className="text-4xl font-bold mb-1">30%</p>
              <p className="text-base opacity-90">Admin Time ↓</p>
              <div className="mt-2 pt-2 border-t border-white/20">
                <p className="text-xs">Government efficiency gain</p>
              </div>
            </div>
          </div>

          {/* Economic Impact Callout */}
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-xl p-5 shadow-xl flex items-center gap-4">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-3xl flex-shrink-0">
              💰
            </div>
            <div>
              <p className="text-xl font-bold mb-1">PKR 450M Additional Annual Tax Revenue</p>
              <p className="text-xs opacity-90">From formalized business operations and increased economic activity</p>
            </div>
          </div>
        </div>

        {/* Right Side - Charts */}
        <div className="w-[45%] flex flex-col gap-4 min-h-0">
          {/* Digital Adoption Curve */}
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-4 shadow-lg border-2 border-blue-200">
            <h3 className="text-base font-bold text-gray-900 mb-3 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-[#0033A0]" />
              Digital Adoption Curve
            </h3>
            <ResponsiveContainer width="100%" height={150}>
              <LineChart data={adoptionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" stroke="#6b7280" style={{ fontSize: '12px' }} />
                <YAxis stroke="#6b7280" style={{ fontSize: '12px' }} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#fff', 
                    border: '2px solid #0033A0',
                    borderRadius: '8px',
                    fontSize: '12px'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="smes" 
                  stroke="#0033A0" 
                  strokeWidth={3}
                  dot={{ fill: '#0033A0', r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
            <p className="text-xs text-gray-600 mt-2 text-center">
              Progressive growth to 1,500 SMEs over 24 months
            </p>
          </div>

          {/* Credit Mobilization */}
          <div className="bg-gradient-to-br from-green-50 to-white rounded-xl p-4 shadow-lg border-2 border-green-200">
            <h3 className="text-base font-bold text-gray-900 mb-3 flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-[#00A86B]" />
              Credit Mobilization (PKR Millions)
            </h3>
            <ResponsiveContainer width="100%" height={150}>
              <BarChart data={creditData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="year" stroke="#6b7280" style={{ fontSize: '12px' }} />
                <YAxis stroke="#6b7280" style={{ fontSize: '12px' }} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#fff', 
                    border: '2px solid #00A86B',
                    borderRadius: '8px',
                    fontSize: '12px'
                  }}
                />
                <Bar 
                  dataKey="amount" 
                  fill="url(#creditGradient)"
                  radius={[8, 8, 0, 0]}
                />
                <defs>
                  <linearGradient id="creditGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#00A86B" />
                    <stop offset="100%" stopColor="#00BCD4" />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
            <p className="text-xs text-gray-600 mt-2 text-center">
              Expected credit facilitation through digital scores
            </p>
          </div>

          {/* Additional Metrics */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-blue-100 rounded-lg p-3 border-2 border-blue-300">
              <p className="text-2xl font-bold text-[#0033A0]">94%</p>
              <p className="text-xs text-gray-700 font-semibold">User Satisfaction</p>
            </div>
            <div className="bg-green-100 rounded-lg p-3 border-2 border-green-300">
              <p className="text-2xl font-bold text-[#00A86B]">82%</p>
              <p className="text-xs text-gray-700 font-semibold">Loan Approval Rate</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
