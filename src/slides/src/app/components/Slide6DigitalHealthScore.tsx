import { TrendingUp, Clock, Package as PackageIcon, FileText, ArrowRight } from 'lucide-react';

export function Slide6DigitalHealthScore() {
  return (
    <div className="w-full h-full bg-white p-10 flex flex-col overflow-hidden">
      {/* Header */}
      <div className="mb-4">
        <h2 className="text-3xl font-bold text-[#0033A0] mb-2">Digital Health Score Innovation</h2>
        <div className="h-1 w-32 bg-[#00A86B]"></div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex gap-6 min-h-0">
        {/* Left Side - Score Visualization */}
        <div className="flex-1 flex flex-col gap-3 min-h-0">
          {/* Large Score Meter */}
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-xl p-4 border-2 border-[#0033A0]">
            <h3 className="text-lg font-bold text-center text-gray-900 mb-3">Digital Health Score</h3>
            
            {/* Circular Score Display */}
            <div className="flex items-center justify-center mb-4">
              <div className="relative w-40 h-40">
                {/* Outer Circle */}
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 160 160">
                  <circle
                    cx="80"
                    cy="80"
                    r="70"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="16"
                  />
                  <circle
                    cx="80"
                    cy="80"
                    r="70"
                    fill="none"
                    stroke="url(#scoreGradient)"
                    strokeWidth="16"
                    strokeDasharray={`${85 * 4.4} ${100 * 4.4}`}
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
                  <div className="text-4xl font-bold text-[#0033A0]">85</div>
                  <div className="text-sm text-gray-600">/ 100</div>
                  <div className="text-xs text-[#00A86B] font-semibold mt-1">Excellent</div>
                </div>
              </div>
            </div>

            {/* Score Breakdown */}
            <div className="space-y-2">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-xs font-semibold text-gray-700">Payment History (35%)</span>
                  <span className="text-xs font-bold text-[#00A86B]">92/100</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#00A86B] to-green-400" style={{ width: '92%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-xs font-semibold text-gray-700">Inventory Turnover (25%)</span>
                  <span className="text-xs font-bold text-[#00A86B]">78/100</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#00A86B] to-green-400" style={{ width: '78%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-xs font-semibold text-gray-700">Sales Growth (20%)</span>
                  <span className="text-xs font-bold text-[#00A86B]">85/100</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#00A86B] to-green-400" style={{ width: '85%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-xs font-semibold text-gray-700">Invoice Regularity (20%)</span>
                  <span className="text-xs font-bold text-[#00A86B]">88/100</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#00A86B] to-green-400" style={{ width: '88%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Factor Icons */}
          <div className="grid grid-cols-4 gap-2">
            <div className="bg-blue-50 rounded-lg p-2 flex flex-col items-center">
              <Clock className="w-8 h-8 text-[#0033A0] mb-1" />
              <p className="text-xs font-semibold text-center">Payment</p>
            </div>
            <div className="bg-green-50 rounded-lg p-2 flex flex-col items-center">
              <PackageIcon className="w-8 h-8 text-[#00A86B] mb-1" />
              <p className="text-xs font-semibold text-center">Inventory</p>
            </div>
            <div className="bg-cyan-50 rounded-lg p-2 flex flex-col items-center">
              <TrendingUp className="w-8 h-8 text-[#00BCD4] mb-1" />
              <p className="text-xs font-semibold text-center">Growth</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-2 flex flex-col items-center">
              <FileText className="w-8 h-8 text-purple-600 mb-1" />
              <p className="text-xs font-semibold text-center">Invoices</p>
            </div>
          </div>
        </div>

        {/* Right Side - Before/After & Integration */}
        <div className="flex-1 flex flex-col gap-3 min-h-0">
          {/* Before & After */}
          <div className="bg-gray-50 rounded-xl p-5 shadow-lg">
            <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">Transformation</h3>
            
            <div className="space-y-3">
              {/* Before */}
              <div className="bg-red-50 border-2 border-red-300 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    ✕
                  </div>
                  <h4 className="text-base font-bold text-gray-900">BEFORE</h4>
                </div>
                <div className="space-y-1 ml-10 text-sm">
                  <p className="text-gray-700">❌ No collateral</p>
                  <p className="text-gray-700">❌ No credit history</p>
                  <p className="text-gray-700">❌ <span className="font-bold text-red-700">No loan approval</span></p>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center">
                <div className="bg-[#00A86B] text-white rounded-full p-2">
                  <ArrowRight className="w-6 h-6" />
                </div>
              </div>

              {/* After */}
              <div className="bg-green-50 border-2 border-green-300 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-[#00A86B] text-white rounded-full flex items-center justify-center font-bold text-sm">
                    ✓
                  </div>
                  <h4 className="text-base font-bold text-gray-900">AFTER</h4>
                </div>
                <div className="space-y-1 ml-10 text-sm">
                  <p className="text-gray-700">✅ Digital Health Score</p>
                  <p className="text-gray-700">✅ Verified business data</p>
                  <p className="text-gray-700">✅ <span className="font-bold text-[#00A86B]">Bankable & Approved!</span></p>
                </div>
              </div>
            </div>
          </div>

          {/* Integration Flow */}
          <div className="bg-gradient-to-br from-[#0033A0] to-[#00BCD4] rounded-xl p-5 text-white shadow-xl">
            <h3 className="text-lg font-bold mb-4 text-center">Integration Flow</h3>
            
            <div className="flex items-center justify-between">
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-1 mx-auto">
                  <span className="text-xl">📱</span>
                </div>
                <p className="text-xs font-semibold">App Data</p>
              </div>
              
              <ArrowRight className="w-6 h-6" />
              
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-1 mx-auto">
                  <span className="text-xl">📊</span>
                </div>
                <p className="text-xs font-semibold">Score</p>
              </div>
              
              <ArrowRight className="w-6 h-6" />
              
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-1 mx-auto">
                  <span className="text-xl">🏦</span>
                </div>
                <p className="text-xs font-semibold">Bank</p>
              </div>
              
              <ArrowRight className="w-6 h-6" />
              
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-1 mx-auto">
                  <span className="text-xl">✅</span>
                </div>
                <p className="text-xs font-semibold">Approval</p>
              </div>
            </div>
          </div>

          {/* Key Message */}
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-xl p-4 text-center shadow-xl">
            <p className="text-lg font-bold">Turning Business Data into Bankable Assets</p>
          </div>
        </div>
      </div>
    </div>
  );
}
