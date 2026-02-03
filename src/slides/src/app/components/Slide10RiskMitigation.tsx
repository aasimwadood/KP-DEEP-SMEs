import { AlertTriangle, Shield, Wifi, GraduationCap, DollarSign, HelpCircle } from 'lucide-react';

export function Slide10RiskMitigation() {
  const risks = [
    {
      risk: 'Tax Fear',
      icon: AlertTriangle,
      color: '#FF6B35',
      mitigation: 'Regulatory Sandbox',
      description: '3-year data protection guarantee - no tax penalties for early adopters',
      impact: 'High',
    },
    {
      risk: 'Connectivity Issues',
      icon: Wifi,
      color: '#0033A0',
      mitigation: 'Offline-First Design',
      description: 'Full app functionality without internet, auto-sync when connected',
      impact: 'Medium',
    },
    {
      risk: 'Digital Literacy',
      icon: GraduationCap,
      color: '#00A86B',
      mitigation: 'Hands-on Consultants',
      description: 'District-level support staff with in-person training & voice UI',
      impact: 'High',
    },
    {
      risk: 'Sustainability',
      icon: DollarSign,
      color: '#00BCD4',
      mitigation: 'Tiered Revenue Model',
      description: 'Progressive subscription fees starting Year 2, bank partnerships',
      impact: 'Medium',
    },
  ];

  return (
    <div className="w-full h-full bg-white p-12 flex flex-col">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-5xl font-bold text-[#0033A0] mb-2">Risk Mitigation Strategy</h2>
        <div className="h-1 w-32 bg-[#00A86B]"></div>
      </div>

      {/* Risk Matrix */}
      <div className="flex-1 flex gap-8">
        {/* Left Side - Risk Cards */}
        <div className="flex-1 grid grid-cols-2 gap-6">
          {risks.map((risk, index) => {
            const Icon = risk.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl border-2 p-6 hover:shadow-2xl transition-shadow"
                style={{ borderColor: risk.color }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center text-white flex-shrink-0"
                    style={{ backgroundColor: risk.color }}
                  >
                    <Icon className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-xl font-bold text-gray-900">{risk.risk}</h3>
                      <span
                        className="text-xs font-bold px-2 py-1 rounded-full text-white"
                        style={{ backgroundColor: risk.impact === 'High' ? '#FF6B35' : '#00BCD4' }}
                      >
                        {risk.impact}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <div
                    className="inline-block px-4 py-2 rounded-lg text-white font-bold mb-3"
                    style={{ backgroundColor: risk.color }}
                  >
                    <Shield className="w-4 h-4 inline mr-2" />
                    {risk.mitigation}
                  </div>
                  <p className="text-gray-700 leading-relaxed">{risk.description}</p>
                </div>

                <div className="flex items-center gap-2 text-sm">
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{ 
                        width: risk.impact === 'High' ? '90%' : '60%',
                        backgroundColor: risk.color 
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Side - Support Module & Summary */}
        <div className="w-96 flex flex-col gap-6">
          {/* Help & Support Module */}
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 shadow-lg border-2 border-blue-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#0033A0] rounded-xl flex items-center justify-center">
                <HelpCircle className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Help & Support</h3>
            </div>

            {/* Support Features */}
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-xl shadow-md border-l-4 border-[#0033A0]">
                <h4 className="font-bold text-gray-900 mb-2">📞 24/7 Helpline</h4>
                <p className="text-sm text-gray-600">Urdu/Pashto support via phone & WhatsApp</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-md border-l-4 border-[#00A86B]">
                <h4 className="font-bold text-gray-900 mb-2">👥 District Consultants</h4>
                <p className="text-sm text-gray-600">In-person training & troubleshooting</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-md border-l-4 border-[#00BCD4]">
                <h4 className="font-bold text-gray-900 mb-2">📚 Video Tutorials</h4>
                <p className="text-sm text-gray-600">Step-by-step guides in local languages</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-md border-l-4 border-purple-600">
                <h4 className="font-bold text-gray-900 mb-2">🏪 Community Forums</h4>
                <p className="text-sm text-gray-600">Peer learning & success stories</p>
              </div>
            </div>
          </div>

          {/* Key Message */}
          <div className="bg-gradient-to-r from-[#00A86B] to-green-600 text-white rounded-2xl p-8 shadow-xl text-center">
            <Shield className="w-16 h-16 mx-auto mb-4" />
            <p className="text-2xl font-bold mb-2">Designed for Real-World Challenges</p>
            <p className="text-sm opacity-90">
              Every risk has been identified and mitigated through extensive pilot research
            </p>
          </div>

          {/* Risk Summary Table */}
          <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-gray-200">
            <h4 className="font-bold text-gray-900 mb-4">Risk Assessment Summary</h4>
            <div className="space-y-2">
              <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                <span className="text-sm text-gray-600">Total Risks Identified:</span>
                <span className="font-bold text-gray-900">12</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                <span className="text-sm text-gray-600">Fully Mitigated:</span>
                <span className="font-bold text-[#00A86B]">10</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                <span className="text-sm text-gray-600">Under Monitoring:</span>
                <span className="font-bold text-[#00BCD4]">2</span>
              </div>
              <div className="flex justify-between items-center pt-2">
                <span className="text-sm font-bold text-gray-900">Success Probability:</span>
                <span className="font-bold text-2xl text-[#00A86B]">92%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
