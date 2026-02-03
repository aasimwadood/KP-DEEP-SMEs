import { CheckCircle, ShoppingCart, Star, BarChart3, Users, DollarSign } from 'lucide-react';

export function Slide4WebPortalDemo() {
  const dashboardImage = "https://images.unsplash.com/photo-1748609160056-7b95f30041f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkYXNoYm9hcmQlMjBhbmFseXRpY3N8ZW58MXx8fHwxNzY5ODk5NDA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

  return (
    <div className="w-full h-full bg-white p-12 flex flex-col">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-5xl font-bold text-[#0033A0] mb-2">Web Portal: Public Landing Page</h2>
        <div className="h-1 w-32 bg-[#00A86B]"></div>
      </div>

      {/* Main Portal Screenshot */}
      <div className="flex-1 flex gap-8">
        <div className="flex-1 flex flex-col">
          <div className="flex-1 rounded-xl overflow-hidden shadow-2xl border-4 border-[#0033A0] relative">
            {/* Mock Portal Interface */}
            <div className="w-full h-full bg-gradient-to-br from-blue-50 to-white p-8">
              {/* Top Bar */}
              <div className="bg-[#0033A0] text-white p-4 rounded-lg mb-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center font-bold">
                    KP
                  </div>
                  <span className="text-xl font-bold">KP-DEEP Portal</span>
                </div>
                <div className="flex gap-4">
                  <button className="px-4 py-2 bg-white/20 rounded">Apply Now</button>
                  <button className="px-4 py-2 bg-white/20 rounded">Login</button>
                </div>
              </div>

              {/* Hero Section */}
              <div className="bg-white rounded-lg p-6 mb-4 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Welcome to KP-DEEP</h3>
                <p className="text-gray-600 mb-4">Transform your business with digital tools and government grants</p>
                <div className="flex gap-4">
                  <button className="px-6 py-3 bg-[#00A86B] text-white rounded-lg font-semibold">
                    Check Eligibility
                  </button>
                  <button className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg font-semibold">
                    Browse Marketplace
                  </button>
                </div>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <CheckCircle className="w-8 h-8 text-[#0033A0] mb-2" />
                  <p className="font-semibold text-sm">Eligibility Checker</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <ShoppingCart className="w-8 h-8 text-[#00A86B] mb-2" />
                  <p className="font-semibold text-sm">Vendor Marketplace</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <Star className="w-8 h-8 text-yellow-600 mb-2" />
                  <p className="font-semibold text-sm">Success Stories</p>
                </div>
              </div>
            </div>

            {/* Annotations */}
            <div className="absolute top-20 -right-8 bg-[#00BCD4] text-white px-4 py-2 rounded-lg shadow-lg">
              <div className="text-xs font-bold">→ Easy Access</div>
            </div>
            <div className="absolute top-64 -right-8 bg-[#00A86B] text-white px-4 py-2 rounded-lg shadow-lg">
              <div className="text-xs font-bold">→ Quick Actions</div>
            </div>
          </div>

          {/* Key Statistic */}
          <div className="bg-gradient-to-r from-[#00A86B] to-green-600 text-white rounded-xl p-6 mt-4 text-center shadow-xl">
            <p className="text-3xl font-bold">Streamlines grant disbursement by 70%</p>
          </div>
        </div>

        {/* Admin Dashboard Preview */}
        <div className="w-96 flex flex-col">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Admin Dashboard</h3>
          <div className="flex-1 rounded-xl overflow-hidden shadow-xl border-2 border-gray-300 bg-gray-900 relative">
            <img 
              src={dashboardImage} 
              alt="Admin Dashboard" 
              className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#0033A0]/80 to-transparent p-6">
              <div className="text-white space-y-4">
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <Users className="w-6 h-6" />
                    <span className="font-bold">Active SMEs</span>
                  </div>
                  <p className="text-3xl font-bold">1,247</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <DollarSign className="w-6 h-6" />
                    <span className="font-bold">Grants Disbursed</span>
                  </div>
                  <p className="text-2xl font-bold">PKR 142M</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <BarChart3 className="w-6 h-6" />
                    <span className="font-bold">Success Rate</span>
                  </div>
                  <p className="text-3xl font-bold">94%</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#0033A0] text-white rounded-lg p-4 mt-4 text-center">
            <p className="font-bold">Government's Command & Control Center</p>
          </div>
        </div>
      </div>
    </div>
  );
}
