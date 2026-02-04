import { Users, Database, Smartphone, Code, CheckCircle, AlertCircle, Building2, Landmark, TrendingUp, FileText, Network } from 'lucide-react';

export function Slide12TeamStructure() {
  const partners = [
    { name: 'KPITB', role: 'Hosting & Infrastructure', icon: Building2, color: '#0033A0' },
    { name: 'Bank of Khyber', role: 'Banking Integration', icon: Landmark, color: '#00A86B' },
    { name: 'SMEDA', role: 'SME Outreach', icon: TrendingUp, color: '#00BCD4' },
    { name: 'FBR', role: 'Tax Integration', icon: FileText, color: '#0033A0' },
  ];

  return (
    <div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 p-10 flex flex-col overflow-hidden">
      {/* Header */}
      <div className="mb-4">
        <h2 className="text-3xl font-bold text-[#0033A0] mb-2">Project Team & Implementation Structure</h2>
        <div className="h-1 w-32 bg-[#00A86B]"></div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col gap-4 min-h-0">
        {/* Leadership */}
        <div className="bg-white rounded-xl shadow-lg p-5 border-t-4 border-[#0033A0]">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#0033A0] to-[#00BCD4] flex items-center justify-center text-white text-lg font-bold shadow-lg">
              TR
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-800">Tanzeel Ur Rehman</h3>
              <p className="text-sm text-gray-600 font-semibold">Project Supervisor</p>
              <p className="text-xs text-gray-500 mt-1">Leadership & Strategic Oversight</p>
            </div>
          </div>
        </div>

        {/* Core Technical Team */}
        <div className="flex-1 min-h-0">
          <h3 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
            <Users className="w-4 h-4 text-[#0033A0]" />
            CORE TECHNICAL TEAM
          </h3>
          <div className="grid grid-cols-3 gap-4 mb-4">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-[#00A86B] hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00A86B] to-[#00BCD4] flex items-center justify-center text-white font-bold mb-2 mx-auto">
                ML
              </div>
              <h4 className="font-bold text-sm text-gray-800 text-center">Muhammad Luqman</h4>
              <p className="text-xs text-gray-600 text-center mb-2">Backend/API Lead/Frontend</p>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <Code className="w-3 h-3 text-[#0033A0]" />
                  <span>.NET Core</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <Database className="w-3 h-3 text-[#0033A0]" />
                  <span>MySQL</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <Code className="w-3 h-3 text-[#0033A0]" />
                  <span>React.js</span>
                </div>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-[#00BCD4] hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00BCD4] to-[#0033A0] flex items-center justify-center text-white font-bold mb-2 mx-auto">
                AW
              </div>
              <h4 className="font-bold text-sm text-gray-800 text-center">Asim Wadood</h4>
              <p className="text-xs text-gray-600 text-center mb-2">Mobile/Frontend/Backend/API</p>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <Code className="w-3 h-3 text-[#0033A0]" />
                  <span>.NET Core</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <Database className="w-3 h-3 text-[#0033A0]" />
                  <span>MySQL</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <Smartphone className="w-3 h-3 text-[#0033A0]" />
                  <span>React Native</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <Code className="w-3 h-3 text-[#0033A0]" />
                  <span>React.js</span>
                </div>
              </div>
            </div>

            {/* Additional Team Member 3 - Support */}
            <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-[#FF6B35] hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FF6B35] to-orange-600 flex items-center justify-center text-white font-bold mb-2 mx-auto">
                ST
              </div>
              <h4 className="font-bold text-sm text-gray-800 text-center">Support Team</h4>
              <p className="text-xs text-gray-600 text-center mb-2">Training & Field Support</p>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <Users className="w-3 h-3 text-[#0033A0]" />
                  <span>SME Training</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <CheckCircle className="w-3 h-3 text-[#0033A0]" />
                  <span>Quality Assurance</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <AlertCircle className="w-3 h-3 text-[#0033A0]" />
                  <span>User Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Partners Grid */}
        <div>
          <h3 className="text-sm font-semibold text-gray-700 mb-3">KEY IMPLEMENTATION PARTNERS</h3>
          <div className="grid grid-cols-4 gap-3">
            {partners.map((partner, index) => {
              const Icon = partner.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-3 hover:shadow-lg transition-shadow border-t-2"
                  style={{ borderColor: partner.color }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-2 mx-auto"
                    style={{ backgroundColor: `${partner.color}20` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: partner.color }} />
                  </div>
                  <h4 className="font-bold text-xs text-gray-800 text-center mb-1">{partner.name}</h4>
                  <p className="text-xs text-gray-600 text-center">{partner.role}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Success Statement */}
        <div className="bg-gradient-to-r from-[#0033A0] to-[#00BCD4] text-white rounded-xl p-4 text-center shadow-lg">
          <p className="text-lg font-bold">
            A Dedicated Team with Proven Expertise in Government Digital Transformation
          </p>
        </div>
      </div>
    </div>
  );
}
