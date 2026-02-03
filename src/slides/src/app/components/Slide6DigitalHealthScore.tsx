import { TrendingUp, Clock, Package as PackageIcon, FileText, ArrowRight } from 'lucide-react';

export function Slide6DigitalHealthScore() {
  return (
    <div className="w-full h-full bg-white p-12 flex flex-col">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-5xl font-bold text-[#0033A0] mb-2">Digital Health Score Innovation</h2>
        <div className="h-1 w-32 bg-[#00A86B]"></div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex gap-8">
        {/* Left Side - Score Visualization */}
        <div className="flex-1 flex flex-col">
          {/* Large Score Meter */}
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-2xl p-8 mb-6 border-2 border-[#0033A0]">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Digital Health Score</h3>
            
            {/* Circular Score Display */}
            <div className="flex items-center justify-center mb-8">
              <div className="relative w-64 h-64">
                {/* Outer Circle */}
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="128"
                    cy="128"
                    r="100"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="20"
                  />
                  <circle
                    cx="128"
                    cy="128"
                    r="100"
                    fill="none"
                    stroke="url(#scoreGradient)"
                    strokeWidth="20"
                    strokeDasharray={`${85 * 6.28} ${100 * 6.28}`}
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#00A86B" />
                      <stop offset="100%" stopColor="#00BCD4" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="text-6xl font-bold text-[#0033A0]">85</div>
                  <div className="text-xl text-gray-600">/ 100</div>
                  <div className="text-sm text-[#00A86B] font-semibold mt-2">Excellent</div>
                </div>
              </div>
            </div>

            {/* Score Breakdown */}
            <div className="space-y-3">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-semibold text-gray-700">Payment History (35%)</span>
                  <span className="text-sm font-bold text-[#00A86B]">92/100</span>
                </div>
                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#00A86B] to-green-400" style={{ width: '92%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-semibold text-gray-700">Inventory Turnover (25%)</span>
                  <span className="text-sm font-bold text-[#00A86B]">78/100</span>
                </div>
                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#00A86B] to-green-400" style={{ width: '78%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-semibold text-gray-700">Sales Growth (20%)</span>
                  <span className="text-sm font-bold text-[#00A86B]">85/100</span>
                </div>
                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#00A86B] to-green-400" style={{ width: '85%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-semibold text-gray-700">Invoice Regularity (20%)</span>
                  <span className="text-sm font-bold text-[#00A86B]">88/100</span>
                </div>
                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#00A86B] to-green-400" style={{ width: '88%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Factor Icons */}
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-blue-50 rounded-xl p-4 flex flex-col items-center">
              <Clock className="w-10 h-10 text-[#0033A0] mb-2" />
              <p className="text-xs font-semibold text-center">Payment History</p>
            </div>
            <div className="bg-green-50 rounded-xl p-4 flex flex-col items-center">
              <PackageIcon className="w-10 h-10 text-[#00A86B] mb-2" />
              <p className="text-xs font-semibold text-center">Inventory Turn</p>
            </div>
            <div className="bg-cyan-50 rounded-xl p-4 flex flex-col items-center">
              <TrendingUp className="w-10 h-10 text-[#00BCD4] mb-2" />
              <p className="text-xs font-semibold text-center">Sales Growth</p>
            </div>
            <div className="bg-purple-50 rounded-xl p-4 flex flex-col items-center">
              <FileText className="w-10 h-10 text-purple-600 mb-2" />
              <p className="text-xs font-semibold text-center">Invoice Regular</p>
            </div>
          </div>
        </div>

        {/* Right Side - Before/After & Integration */}
        <div className="flex-1 flex flex-col gap-6">
          {/* Before & After */}
          <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Transformation</h3>
            
            <div className="space-y-4">
              {/* Before */}
              <div className="bg-red-50 border-2 border-red-300 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-xl">
                    ✕
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">BEFORE</h4>
                </div>
                <div className="space-y-2 ml-15">
                  <p className="text-gray-700">❌ No collateral</p>
                  <p className="text-gray-700">❌ No credit history</p>
                  <p className="text-gray-700">❌ <span className="font-bold text-red-700">No loan approval</span></p>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center">
                <div className="bg-[#00A86B] text-white rounded-full p-4">
                  <ArrowRight className="w-8 h-8" />
                </div>
              </div>

              {/* After */}
              <div className="bg-green-50 border-2 border-green-300 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-[#00A86B] text-white rounded-full flex items-center justify-center font-bold text-xl">
                    ✓
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">AFTER</h4>
                </div>
                <div className="space-y-2 ml-15">
                  <p className="text-gray-700">✅ Digital Health Score</p>
                  <p className="text-gray-700">✅ Verified business data</p>
                  <p className="text-gray-700">✅ <span className="font-bold text-[#00A86B]">Bankable & Approved!</span></p>
                </div>
              </div>
            </div>
          </div>

          {/* Integration Flow */}
          <div className="bg-gradient-to-br from-[#0033A0] to-[#00BCD4] rounded-2xl p-8 text-white shadow-xl">
            <h3 className="text-2xl font-bold mb-6 text-center">Integration Flow</h3>
            
            <div className="flex items-center justify-between">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-2 mx-auto">
                  <span className="text-2xl">📱</span>
                </div>
                <p className="text-sm font-semibold">App Data</p>
              </div>
              
              <ArrowRight className="w-8 h-8" />
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-2 mx-auto">
                  <span className="text-2xl">📊</span>
                </div>
                <p className="text-sm font-semibold">Score Engine</p>
              </div>
              
              <ArrowRight className="w-8 h-8" />
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-2 mx-auto">
                  <span className="text-2xl">🏦</span>
                </div>
                <p className="text-sm font-semibold">Bank API</p>
              </div>
              
              <ArrowRight className="w-8 h-8" />
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-2 mx-auto">
                  <span className="text-2xl">✅</span>
                </div>
                <p className="text-sm font-semibold">Loan Approval</p>
              </div>
            </div>
          </div>

          {/* Key Message */}
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-2xl p-6 text-center shadow-xl">
            <p className="text-2xl font-bold">Turning Business Data into Bankable Assets</p>
          </div>
        </div>
      </div>
    </div>
  );
}
