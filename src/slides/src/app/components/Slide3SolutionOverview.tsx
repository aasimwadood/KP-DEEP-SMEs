import { Globe, Smartphone, TrendingUp, Wifi, Languages, Building } from 'lucide-react';

export function Slide3SolutionOverview() {
  const techImage = "https://images.unsplash.com/photo-1614020661483-d2bb855eee1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwdGVjaG5vbG9neSUyMG1vYmlsZSUyMGFwcHxlbnwxfHx8fDE3Njk5NjE3MDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

  return (
    <div className="w-full h-full bg-gradient-to-br from-gray-50 to-blue-50 p-12 flex flex-col overflow-hidden">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-5xl font-bold text-[#0033A0] mb-2">The KP-DEEP Solution</h2>
        <div className="h-1 w-32 bg-[#00A86B]"></div>
      </div>

      {/* Dual-Pillar Diagram */}
      <div className="flex-1 flex gap-8 mb-6 min-h-0">
        {/* Web Portal */}
        <div className="flex-1 bg-white rounded-2xl shadow-xl p-6 border-2 border-[#0033A0] relative min-h-0">
          <div className="absolute -top-4 left-8 bg-[#0033A0] text-white px-6 py-2 rounded-full font-bold z-10">
            PILLAR 1
          </div>
          <div className="flex flex-col items-center h-full">
            <Globe className="w-16 h-16 text-[#0033A0] mb-3" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Web Portal</h3>
            <p className="text-lg text-center text-gray-600 mb-4">Grant Management System</p>
            
            <div className="flex-1 w-full space-y-2 min-h-0">
              <div className="bg-blue-50 p-3 rounded-lg">
                <p className="font-semibold text-gray-800 text-sm">✓ Eligibility Checker</p>
              </div>
              <div className="bg-blue-50 p-3 rounded-lg">
                <p className="font-semibold text-gray-800 text-sm">✓ Vendor Marketplace</p>
              </div>
              <div className="bg-blue-50 p-3 rounded-lg">
                <p className="font-semibold text-gray-800 text-sm">✓ Admin Dashboard</p>
              </div>
              <div className="bg-blue-50 p-3 rounded-lg">
                <p className="font-semibold text-gray-800 text-sm">✓ Real-time Analytics</p>
              </div>
            </div>
          </div>
        </div>

        {/* Connection Arrow */}
        <div className="flex flex-col items-center justify-center px-4">
          <div className="text-5xl text-[#00BCD4] font-bold">→</div>
          <div className="bg-[#00BCD4] text-white px-3 py-2 rounded-lg text-center mt-3">
            <p className="font-bold text-xs">Integrated</p>
            <p className="text-xs">Platform</p>
          </div>
        </div>

        {/* Mobile App */}
        <div className="flex-1 bg-white rounded-2xl shadow-xl p-6 border-2 border-[#00A86B] relative min-h-0">
          <div className="absolute -top-4 left-8 bg-[#00A86B] text-white px-6 py-2 rounded-full font-bold z-10">
            PILLAR 2
          </div>
          <div className="flex flex-col items-center h-full">
            <Smartphone className="w-16 h-16 text-[#00A86B] mb-3" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Mobile App</h3>
            <p className="text-lg text-center text-gray-600 mb-4">KP-DEEP Business</p>
            
            <div className="flex-1 w-full space-y-2 min-h-0">
              <div className="bg-green-50 p-3 rounded-lg">
                <p className="font-semibold text-gray-800 text-sm">✓ Digital Khata</p>
              </div>
              <div className="bg-green-50 p-3 rounded-lg">
                <p className="font-semibold text-gray-800 text-sm">✓ Smart Inventory</p>
              </div>
              <div className="bg-green-50 p-3 rounded-lg">
                <p className="font-semibold text-gray-800 text-sm">✓ Bankability Hub</p>
              </div>
              <div className="bg-green-50 p-3 rounded-lg">
                <p className="font-semibold text-gray-800 text-sm">✓ Digital Health Score</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="bg-white rounded-xl p-4 shadow-lg flex items-center gap-3">
          <Wifi className="w-10 h-10 text-[#00BCD4]" />
          <div>
            <p className="font-bold text-base text-gray-900">Offline-First</p>
            <p className="text-xs text-gray-600">Works without internet</p>
          </div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-lg flex items-center gap-3">
          <Languages className="w-10 h-10 text-[#00BCD4]" />
          <div>
            <p className="font-bold text-base text-gray-900">Voice Support</p>
            <p className="text-xs text-gray-600">Urdu & Pashto</p>
          </div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-lg flex items-center gap-3">
          <Building className="w-10 h-10 text-[#00BCD4]" />
          <div>
            <p className="font-bold text-base text-gray-900">Bank Integration</p>
            <p className="text-xs text-gray-600">Direct loan access</p>
          </div>
        </div>
      </div>

      {/* Tagline */}
      <div className="bg-gradient-to-r from-[#0033A0] to-[#00BCD4] text-white rounded-xl p-5 text-center">
        <p className="text-2xl font-bold">Transforming Data into Collateral</p>
      </div>
    </div>
  );
}