import { Users, Database, Smartphone, Code, CheckCircle, AlertCircle, Building2, Landmark, TrendingUp, FileText, Network } from 'lucide-react';

export function Slide12TeamStructure() {
  const timeline = [
    { phase: 'Infrastructure Setup', months: '1-2', progress: 100, color: '#0033A0' },
    { phase: 'Core Development', months: '2-3', progress: 75, color: '#00BCD4' },
    { phase: 'Pilot & Testing', months: '4-6', progress: 40, color: '#00A86B' },
    { phase: 'Scale-up Preparation', months: '7-9', progress: 0, color: '#0033A0' },
  ];

  const partners = [
    { name: 'KPITB', role: 'Hosting & Infrastructure', icon: Building2, color: '#0033A0' },
    { name: 'Bank of Khyber', role: 'Banking Integration', icon: Landmark, color: '#00A86B' },
    { name: 'SMEDA', role: 'SME Outreach', icon: TrendingUp, color: '#00BCD4' },
    { name: 'FBR', role: 'Tax Integration', icon: FileText, color: '#0033A0' },
    { name: 'FPCCI-KP', role: 'Vendor Network', icon: Network, color: '#00A86B' },
  ];

  return (
    <div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 p-12 flex flex-col">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-[#0033A0] mb-2">
              Project Team & Implementation Structure
            </h1>
            <p className="text-gray-600 text-lg">KP-DEEP Organizational Hierarchy & Timeline</p>
          </div>
          <div className="text-right text-sm text-gray-500">
            <p className="font-semibold">Government Postgraduate</p>
            <p>College Kohat</p>
          </div>
        </div>
      </div>

      <div className="flex-1 grid grid-cols-12 gap-6">
        {/* Left Column - Team Structure */}
        <div className="col-span-7 space-y-6">
          {/* Leadership */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-[#0033A0]">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0033A0] to-[#00BCD4] flex items-center justify-center text-white text-xl font-bold shadow-lg">
                TR
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800">Tanzeel Ur Rehman</h3>
                <p className="text-sm text-gray-600 font-semibold">Project Supervisor</p>
                <p className="text-xs text-gray-500 mt-1">Leadership & Strategic Oversight</p>
              </div>
              <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-[#00A86B]"></div>
                <div className="w-2 h-2 rounded-full bg-[#00BCD4]"></div>
                <div className="w-2 h-2 rounded-full bg-[#0033A0]"></div>
              </div>
            </div>
            
            {/* Connection Lines Indicator */}
            <div className="mt-4 flex items-center justify-center gap-3 text-xs text-gray-500">
              <div className="flex items-center gap-1">
                <div className="w-8 h-0.5 bg-[#0033A0]"></div>
                <span>Technical</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-8 h-0.5 border-t-2 border-dashed border-[#00A86B]"></div>
                <span>Advisory</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-8 h-0.5 bg-[#00BCD4]"></div>
                <span>Support</span>
              </div>
            </div>
          </div>

          {/* Core Technical Team */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
              <Users className="w-4 h-4 text-[#0033A0]" />
              CORE TECHNICAL TEAM
            </h3>
            <div className="grid grid-cols-3 gap-4">
              {/* Team Member 1 */}
              <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-[#00A86B] hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00A86B] to-[#00BCD4] flex items-center justify-center text-white font-bold mb-3 mx-auto">
                  ML
                </div>
                <h4 className="font-bold text-sm text-gray-800 text-center">Muhammad Luqman</h4>
                <p className="text-xs text-gray-600 text-center mb-3">Backend/API Lead/Frontend</p>
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
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00BCD4] to-[#0033A0] flex items-center justify-center text-white font-bold mb-3 mx-auto">
                  AW
                </div>
                <h4 className="font-bold text-sm text-gray-800 text-center">Asim Wadood</h4>
                <p className="text-xs text-gray-600 text-center mb-2">Mobile/Frontend/Backend/API</p>
                <p className="text-xs font-semibold text-[#00BCD4] text-center mb-3">Full Stack</p>
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

              {/* Team Member 3 */}
              <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-[#0033A0] hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0033A0] to-[#00A86B] flex items-center justify-center text-white font-bold mb-3 mx-auto">
                  QA
                </div>
                <h4 className="font-bold text-sm text-gray-800 text-center">QA Team</h4>
                <p className="text-xs text-gray-600 text-center mb-3">Quality Assurance</p>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <CheckCircle className="w-3 h-3 text-[#00A86B]" />
                    <span>Testing</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <CheckCircle className="w-3 h-3 text-[#00A86B]" />
                    <span>Validation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Implementation Timeline */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-3">IMPLEMENTATION ROADMAP</h3>
            <div className="bg-white rounded-lg shadow-md p-5">
              <div className="space-y-3">
                {timeline.map((item, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold text-gray-700">{item.phase}</span>
                        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                          Months {item.months}
                        </span>
                      </div>
                      <span className="text-xs font-bold" style={{ color: item.color }}>
                        {item.progress}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{ 
                          width: `${item.progress}%`,
                          backgroundColor: item.color
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Partners & Support */}
        <div className="col-span-5 space-y-6">
          {/* Industry Support Ecosystem */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
              <Network className="w-4 h-4 text-[#0033A0]" />
              INDUSTRY SUPPORT ECOSYSTEM
            </h3>
            <div className="relative">
              <div className="space-y-3">
                {partners.map((partner, index) => {
                  const Icon = partner.icon;
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition-all hover:scale-105"
                      style={{ borderLeft: `4px solid ${partner.color}` }}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className="w-10 h-10 rounded-lg flex items-center justify-center"
                          style={{ backgroundColor: `${partner.color}20` }}
                        >
                          <Icon className="w-5 h-5" style={{ color: partner.color }} />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-sm text-gray-800">{partner.name}</h4>
                          <p className="text-xs text-gray-600">{partner.role}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Support Requirements */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-orange-600" />
              CRITICAL SUPPORT REQUIREMENTS
            </h3>
            <div className="space-y-3">
              <div className="bg-gradient-to-r from-orange-50 to-orange-100 border-l-4 border-orange-500 rounded-lg p-4">
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-gray-800">KPITB Technical Liaison</p>
                    <p className="text-xs text-gray-600 mt-1">
                      Dedicated contact for infrastructure setup and server deployment
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-red-50 to-red-100 border-l-4 border-red-500 rounded-lg p-4">
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-gray-800">FBR Sandbox Access</p>
                    <p className="text-xs text-gray-600 mt-1">
                      Testing environment for tax integration pending approval
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-l-4 border-blue-500 rounded-lg p-4">
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-gray-800">Training Venue</p>
                    <p className="text-xs text-gray-600 mt-1">
                      Identification of facilities for SME training sessions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Academic Branding */}
          <div className="bg-gradient-to-r from-[#0033A0] to-[#00BCD4] rounded-lg shadow-lg p-4 text-white">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                </svg>
              </div>
              <div>
                <p className="font-bold text-sm">Academic Partnership</p>
                <p className="text-xs opacity-90">Government Postgraduate College Kohat</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Note */}
      <div className="mt-6 text-center">
        <p className="text-xs text-gray-500">
          This structure ensures coordinated implementation with clear responsibilities and timelines
        </p>
      </div>
    </div>
  );
}