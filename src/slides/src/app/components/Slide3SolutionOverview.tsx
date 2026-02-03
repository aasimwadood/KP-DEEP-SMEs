import { Globe, Smartphone, TrendingUp, Wifi, Languages, Building } from 'lucide-react';

export function Slide3SolutionOverview() {
  const techImage = "https://images.unsplash.com/photo-1614020661483-d2bb855eee1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwdGVjaG5vbG9neSUyMG1vYmlsZSUyMGFwcHxlbnwxfHx8fDE3Njk5NjE3MDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

  return (
    <div className="w-full h-full bg-gradient-to-br from-gray-50 to-blue-50 p-12 flex flex-col">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-5xl font-bold text-[#0033A0] mb-2">The KP-DEEP Solution</h2>
        <div className="h-1 w-32 bg-[#00A86B]"></div>
      </div>

      {/* Dual-Pillar Diagram */}
      <div className="flex-1 flex gap-8 mb-8">
        {/* Web Portal */}
        <div className="flex-1 bg-white rounded-2xl shadow-xl p-8 border-2 border-[#0033A0] relative">
          <div className="absolute -top-4 left-8 bg-[#0033A0] text-white px-6 py-2 rounded-full font-bold">
            PILLAR 1
          </div>
          <div className="flex flex-col items-center h-full">
            <Globe className="w-20 h-20 text-[#0033A0] mb-4" />
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Web Portal</h3>
            <p className="text-xl text-center text-gray-600 mb-6">Grant Management System</p>
            
            <div className="flex-1 w-full space-y-3">
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="font-semibold text-gray-800">✓ Eligibility Checker</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="font-semibold text-gray-800">✓ Vendor Marketplace</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="font-semibold text-gray-800">✓ Admin Dashboard</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="font-semibold text-gray-800">✓ Real-time Analytics</p>
              </div>
            </div>
          </div>
        </div>

        {/* Connection Arrow */}
        <div className="flex flex-col items-center justify-center px-4">
          <div className="text-6xl text-[#00BCD4] font-bold">→</div>
          <div className="bg-[#00BCD4] text-white px-4 py-2 rounded-lg text-center mt-4">
            <p className="font-bold text-sm">Integrated</p>
            <p className="text-xs">Platform</p>
          </div>
        </div>

        {/* Mobile App */}
        <div className="flex-1 bg-white rounded-2xl shadow-xl p-8 border-2 border-[#00A86B] relative">
          <div className="absolute -top-4 left-8 bg-[#00A86B] text-white px-6 py-2 rounded-full font-bold">
            PILLAR 2
          </div>
          <div className="flex flex-col items-center h-full">
            <Smartphone className="w-20 h-20 text-[#00A86B] mb-4" />
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Mobile App</h3>
            <p className="text-xl text-center text-gray-600 mb-6">KP-DEEP Business</p>
            
            <div className="flex-1 w-full space-y-3">
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="font-semibold text-gray-800">✓ Digital Khata</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="font-semibold text-gray-800">✓ Smart Inventory</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="font-semibold text-gray-800">✓ Bankability Hub</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="font-semibold text-gray-800">✓ Digital Health Score</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl p-6 shadow-lg flex items-center gap-4">
          <Wifi className="w-12 h-12 text-[#00BCD4]" />
          <div>
            <p className="font-bold text-lg text-gray-900">Offline-First</p>
            <p className="text-sm text-gray-600">Works without internet</p>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-lg flex items-center gap-4">
          <Languages className="w-12 h-12 text-[#00BCD4]" />
          <div>
            <p className="font-bold text-lg text-gray-900">Voice Support</p>
            <p className="text-sm text-gray-600">Urdu & Pashto</p>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-lg flex items-center gap-4">
          <Building className="w-12 h-12 text-[#00BCD4]" />
          <div>
            <p className="font-bold text-lg text-gray-900">Bank Integration</p>
            <p className="text-sm text-gray-600">Direct loan access</p>
          </div>
        </div>
      </div>

      {/* Tagline */}
      <div className="bg-gradient-to-r from-[#0033A0] to-[#00BCD4] text-white rounded-xl p-6 text-center">
        <p className="text-3xl font-bold">Transforming Data into Collateral</p>
      </div>
    </div>
  );
}
