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
    <div className="w-full h-full bg-white p-10 flex flex-col overflow-hidden">
      {/* Header */}
      <div className="mb-4">
        <h2 className="text-3xl font-bold text-[#0033A0] mb-2">Risk Mitigation & Safeguards</h2>
        <div className="h-1 w-32 bg-[#00A86B]"></div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col gap-4 min-h-0">
        {/* Risk Cards Grid */}
        <div className="flex-1 grid grid-cols-2 gap-4 min-h-0">
          {risks.map((risk, index) => {
            const Icon = risk.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg border-2 p-4 hover:shadow-xl transition-shadow"
                style={{ borderColor: risk.color }}
              >
                <div className="flex items-start gap-3 mb-3">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center text-white flex-shrink-0"
                    style={{ backgroundColor: risk.color }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-lg font-bold text-gray-900">{risk.risk}</h3>
                      <span
                        className="text-xs font-bold px-2 py-1 rounded-full text-white"
                        style={{ backgroundColor: risk.impact === 'High' ? '#FF6B35' : '#00BCD4' }}
                      >
                        {risk.impact}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <div
                    className="inline-block px-3 py-1 rounded-lg text-white font-bold mb-2 text-sm"
                    style={{ backgroundColor: risk.color }}
                  >
                    <Shield className="w-3 h-3 inline mr-1" />
                    {risk.mitigation}
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">{risk.description}</p>
                </div>

                <div className="flex items-center gap-2">
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

        {/* Bottom Section - Key Safeguards */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 border-2 border-[#0033A0]">
            <h4 className="font-bold text-[#0033A0] mb-2 text-sm">Data Privacy</h4>
            <p className="text-xs text-gray-700">End-to-end encryption + local-first storage</p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 border-2 border-[#00A86B]">
            <h4 className="font-bold text-[#00A86B] mb-2 text-sm">Phased Rollout</h4>
            <p className="text-xs text-gray-700">Start with 3 pilot districts before scaling</p>
          </div>
          <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-xl p-4 border-2 border-[#00BCD4]">
            <h4 className="font-bold text-[#00BCD4] mb-2 text-sm">Quality Assurance</h4>
            <p className="text-xs text-gray-700">Monthly audits & user feedback loops</p>
          </div>
        </div>

        {/* Governance Statement */}
        <div className="bg-gradient-to-r from-[#0033A0] to-blue-600 text-white rounded-xl p-4 text-center shadow-lg">
          <p className="text-lg font-bold">Independent Steering Committee with KPITB, Finance Department, and Industry Representatives</p>
        </div>
      </div>
    </div>
  );
}
