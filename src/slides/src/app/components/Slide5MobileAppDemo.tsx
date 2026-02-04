import { BookOpen, Package, TrendingUp, Wifi, Mic, Bell } from 'lucide-react';

export function Slide5MobileAppDemo() {
  const mobileImage = "https://images.unsplash.com/photo-1599202889720-cd3c0833efa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBwaG9uZSUyMG1vY2t1cCUyMGJ1c2luZXNzfGVufDF8fHx8MTc2OTk2MTcwNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

  return (
    <div className="w-full h-full bg-gradient-to-br from-blue-50 to-white p-12 flex flex-col overflow-hidden">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-4xl font-bold text-[#0033A0] mb-2">KP-DEEP Business Mobile App</h2>
        <div className="h-1 w-32 bg-[#00A86B]"></div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex gap-8 min-h-0">
        {/* Phone Mockup */}
        <div className="flex items-center justify-center">
          <div className="relative">
            {/* Phone Frame */}
            <div className="w-72 h-[540px] bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl border-8 border-gray-800">
              <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden">
                {/* Status Bar */}
                <div className="bg-[#0033A0] text-white px-6 py-3 flex justify-between items-center">
                  <span className="text-sm font-semibold">9:41</span>
                  <span className="text-sm font-bold">KP-DEEP Business</span>
                  <span className="text-sm">100%</span>
                </div>
                
                {/* App Dashboard */}
                <div className="p-6 bg-gradient-to-br from-blue-50 to-white h-full">
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">Dashboard</h3>
                    <p className="text-sm text-gray-600">Welcome back, Ahmed</p>
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="bg-blue-100 p-4 rounded-xl">
                      <p className="text-xs text-gray-600 mb-1">Today's Sales</p>
                      <p className="text-2xl font-bold text-[#0033A0]">PKR 45K</p>
                    </div>
                    <div className="bg-green-100 p-4 rounded-xl">
                      <p className="text-xs text-gray-600 mb-1">Health Score</p>
                      <p className="text-2xl font-bold text-[#00A86B]">85/100</p>
                    </div>
                  </div>

                  {/* Menu Items */}
                  <div className="space-y-3">
                    <div className="bg-white p-4 rounded-xl shadow-md flex items-center gap-3 border-2 border-blue-200">
                      <BookOpen className="w-8 h-8 text-[#0033A0]" />
                      <div>
                        <p className="font-bold text-gray-900">Digital Khata</p>
                        <p className="text-xs text-gray-600">12 entries today</p>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-md flex items-center gap-3">
                      <Package className="w-8 h-8 text-[#00A86B]" />
                      <div>
                        <p className="font-bold text-gray-900">Inventory</p>
                        <p className="text-xs text-gray-600">234 items in stock</p>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-md flex items-center gap-3">
                      <TrendingUp className="w-8 h-8 text-[#00BCD4]" />
                      <div>
                        <p className="font-bold text-gray-900">Bankability Hub</p>
                        <p className="text-xs text-gray-600">Ready to apply</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Notch */}
            <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-40 h-7 bg-gray-900 rounded-b-2xl"></div>
          </div>
        </div>

        {/* Key Screens & Features */}
        <div className="flex-1 flex flex-col">
          {/* Three Key Screens */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Features</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-blue-200">
                <BookOpen className="w-12 h-12 text-[#0033A0] mb-3" />
                <h4 className="font-bold text-lg mb-2">Digital Khata</h4>
                <p className="text-sm text-gray-600">Replace paper ledgers with smart digital records</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-green-200">
                <Package className="w-12 h-12 text-[#00A86B] mb-3" />
                <h4 className="font-bold text-lg mb-2">Smart Inventory</h4>
                <p className="text-sm text-gray-600">Barcode scanning & auto-alerts</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-cyan-200">
                <TrendingUp className="w-12 h-12 text-[#00BCD4] mb-3" />
                <h4 className="font-bold text-lg mb-2">Bankability Hub</h4>
                <p className="text-sm text-gray-600">Build credit score & apply for loans</p>
              </div>
            </div>
          </div>

          {/* Feature Callouts */}
          <div className="space-y-4 mb-6">
            <div className="bg-gradient-to-r from-[#0033A0] to-blue-600 text-white p-6 rounded-xl shadow-lg flex items-center gap-4">
              <Wifi className="w-10 h-10" />
              <div>
                <p className="font-bold text-lg">Works Offline - Syncs When Connected</p>
                <p className="text-sm opacity-90">No internet? No problem!</p>
              </div>
            </div>
            <div className="bg-gradient-to-r from-[#00A86B] to-green-600 text-white p-6 rounded-xl shadow-lg flex items-center gap-4">
              <Mic className="w-10 h-10" />
              <div>
                <p className="font-bold text-lg">Voice Commands in Urdu/Pashto</p>
                <p className="text-sm opacity-90">Speak naturally in your language</p>
              </div>
            </div>
            <div className="bg-gradient-to-r from-[#00BCD4] to-cyan-600 text-white p-6 rounded-xl shadow-lg flex items-center gap-4">
              <Bell className="w-10 h-10" />
              <div>
                <p className="font-bold text-lg">One-Tap Payment Reminders</p>
                <p className="text-sm opacity-90">Never miss a receivable</p>
              </div>
            </div>
          </div>

          {/* User Quote */}
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-xl">
            <p className="text-lg italic text-gray-800 mb-2">
              "Like having a digital accountant in my pocket"
            </p>
            <p className="text-sm font-semibold text-gray-600">— Pilot Program Participant</p>
          </div>
        </div>
      </div>
    </div>
  );
}