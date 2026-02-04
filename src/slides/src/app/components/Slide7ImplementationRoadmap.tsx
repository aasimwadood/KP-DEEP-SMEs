import { Code, Rocket, TrendingUp, CheckCircle } from 'lucide-react';

export function Slide7ImplementationRoadmap() {
  const phases = [
    {
      phase: 1,
      name: 'Platform Development',
      months: 'Months 1-9',
      color: '#0033A0',
      tasks: ['Web Portal Build', 'Mobile App Dev', 'Testing & QA'],
      icon: Code,
    },
    {
      phase: 2,
      name: 'Pilot Launch',
      months: 'Months 10-18',
      color: '#00A86B',
      tasks: ['300 SMEs Onboarded', 'Feedback Collection', 'System Refinement'],
      icon: Rocket,
    },
    {
      phase: 3,
      name: 'Provincial Scale-up',
      months: 'Months 19-30',
      color: '#00BCD4',
      tasks: ['Bank Integration Live', '1,500 Target Achieved', 'District Expansion'],
      icon: TrendingUp,
    },
    {
      phase: 4,
      name: 'Sustainability',
      months: 'Months 31-36',
      color: '#FF6B35',
      tasks: ['Revenue Model Active', 'Full Self-Sufficiency', 'National Template'],
      icon: CheckCircle,
    },
  ];

  return (
    <div className="w-full h-full bg-gradient-to-br from-gray-50 to-blue-50 p-12 flex flex-col overflow-hidden">
      {/* Header */}
      <div className="mb-6 z-10">
        <h2 className="text-4xl font-bold text-[#0033A0] mb-2">12-Month Implementation Roadmap</h2>
        <div className="h-1 w-32 bg-[#00A86B]"></div>
      </div>

      {/* Timeline - Horizontal */}
      <div className="flex-1 flex flex-col min-h-0 relative z-10">
        {/* Gantt-style Timeline */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="mb-6">
            <div className="flex justify-between text-sm font-semibold text-gray-600 mb-2">
              <span>Year 1</span>
              <span>Year 2</span>
              <span>Year 3</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full relative">
              <div className="absolute left-0 h-full bg-[#0033A0] rounded-l-full" style={{ width: '25%' }}></div>
              <div className="absolute left-[25%] h-full bg-[#00A86B]" style={{ width: '25%' }}></div>
              <div className="absolute left-[50%] h-full bg-[#00BCD4]" style={{ width: '33%' }}></div>
              <div className="absolute left-[83%] h-full bg-[#FF6B35] rounded-r-full" style={{ width: '17%' }}></div>
            </div>
          </div>

          {/* Phase Cards */}
          <div className="grid grid-cols-4 gap-6">
            {phases.map((phase) => {
              const Icon = phase.icon;
              return (
                <div
                  key={phase.phase}
                  className="bg-white border-2 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                  style={{ borderColor: phase.color }}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-4 text-white"
                    style={{ backgroundColor: phase.color }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <div
                    className="text-sm font-bold mb-1 px-3 py-1 rounded-full inline-block text-white"
                    style={{ backgroundColor: phase.color }}
                  >
                    PHASE {phase.phase}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 mt-3">{phase.name}</h3>
                  <p className="text-sm text-gray-600 mb-4 font-semibold">{phase.months}</p>
                  <ul className="space-y-2">
                    {phase.tasks.map((task, idx) => (
                      <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                        <span className="text-[#00A86B] font-bold">✓</span>
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* Milestone Markers */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-[#0033A0] to-blue-600 text-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-3xl">
                🎯
              </div>
              <div>
                <p className="text-3xl font-bold">300</p>
                <p className="text-sm opacity-90">SMEs in Pilot</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#00A86B] to-green-600 text-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-3xl">
                🏦
              </div>
              <div>
                <p className="text-3xl font-bold">Live</p>
                <p className="text-sm opacity-90">Bank Integration</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#00BCD4] to-cyan-600 text-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-3xl">
                🚀
              </div>
              <div>
                <p className="text-3xl font-bold">1,500</p>
                <p className="text-sm opacity-90">Target Achieved</p>
              </div>
            </div>
          </div>
        </div>

        {/* Infrastructure Note */}
        <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-[#0033A0]">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-2xl">🏢</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">KPITB Hosting Setup</h3>
              <p className="text-gray-700">
                Secure, government-controlled infrastructure hosted at Khyber Pakhtunkhwa Information Technology Board (KPITB) 
                data centers with 99.9% uptime guarantee, ensuring data sovereignty and compliance with provincial regulations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}