import { CheckSquare, Calendar, Target, Users, Mail, Phone } from 'lucide-react';

export function Slide11NextSteps() {
  const backgroundImage = "https://images.unsplash.com/photo-1707904387265-59c7da3ab120?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWtpc3RhbiUyMGxhbmRzY2FwZSUyMG1vdW50YWluc3xlbnwxfHx8fDE3Njk5NjE3MDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

  return (
    <div className="w-full h-full bg-gradient-to-br from-[#0033A0] to-blue-900 p-10 flex flex-col relative overflow-hidden">
      {/* Background Image - z-0 */}
      <div 
        className="absolute inset-0 opacity-20 z-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>

      {/* Content - z-10 */}
      <div className="relative z-10 flex-1 flex flex-col min-h-0">
        {/* Header */}
        <div className="mb-4">
          <h2 className="text-3xl font-bold text-white mb-2">Next Steps & Call to Action</h2>
          <div className="h-1 w-32 bg-[#00A86B]"></div>
        </div>

        {/* Main Content Grid */}
        <div className="flex-1 grid grid-cols-2 gap-5 mb-4 min-h-0">
          {/* Our Request */}
          <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#0033A0] rounded-lg flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Our Request</h3>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border-l-4 border-[#0033A0]">
                <CheckSquare className="w-5 h-5 text-[#0033A0] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-base text-gray-900 mb-1">ADP Inclusion Approval</h4>
                  <p className="text-xs text-gray-600">
                    Formal inclusion in Annual Development Program for FY 2026-27
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border-l-4 border-[#00A86B]">
                <CheckSquare className="w-5 h-5 text-[#00A86B] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-base text-gray-900 mb-1">Initial Funding Release</h4>
                  <p className="text-xs text-gray-600">
                    PKR 450M for Phase 1 (Platform Development & Pilot)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-cyan-50 rounded-lg border-l-4 border-[#00BCD4]">
                <CheckSquare className="w-5 h-5 text-[#00BCD4] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-base text-gray-900 mb-1">Steering Committee Formation</h4>
                  <p className="text-xs text-gray-600">
                    Cross-departmental oversight with KPITB, Finance, and Industries
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline & Next 90 Days */}
          <div className="space-y-4">
            {/* Target Start */}
            <div className="bg-gradient-to-r from-[#00A86B] to-green-600 text-white rounded-xl p-5 shadow-2xl">
              <div className="flex items-center gap-3 mb-3">
                <Calendar className="w-10 h-10" />
                <div>
                  <p className="text-sm opacity-90">Target Start Date</p>
                  <p className="text-3xl font-bold">July 2026</p>
                </div>
              </div>
              <div className="pt-3 border-t border-white/30">
                <p className="text-xs">Aligned with FY 2026-27 budget cycle</p>
              </div>
            </div>

            {/* Next 90 Days */}
            <div className="bg-white/95 backdrop-blur-sm rounded-xl p-5 shadow-2xl">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Next 90 Days Action Items</h3>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 p-2 bg-orange-50 rounded-lg">
                  <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0">
                    1
                  </div>
                  <p className="text-xs font-semibold text-gray-800">
                    Finalize technical specifications & platform architecture
                  </p>
                </div>

                <div className="flex items-center gap-2 p-2 bg-orange-50 rounded-lg">
                  <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0">
                    2
                  </div>
                  <p className="text-xs font-semibold text-gray-800">
                    Vendor empanelment & procurement process initiation
                  </p>
                </div>

                <div className="flex items-center gap-2 p-2 bg-orange-50 rounded-lg">
                  <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0">
                    3
                  </div>
                  <p className="text-xs font-semibold text-gray-800">
                    Pilot cluster selection in 3 priority districts
                  </p>
                </div>

                <div className="flex items-center gap-2 p-2 bg-orange-50 rounded-lg">
                  <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0">
                    4
                  </div>
                  <p className="text-xs font-semibold text-gray-800">
                    Establish partnerships with banks & financial institutions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Q&A Section */}
        <div className="grid grid-cols-2 gap-5 mb-4">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-xl p-5 text-center shadow-xl">
            <p className="text-2xl font-bold mb-1">Questions & Discussion</p>
            <p className="text-sm opacity-90">We welcome your feedback and queries</p>
          </div>

          <div className="bg-white/95 backdrop-blur-sm rounded-xl p-5 shadow-xl">
            <h4 className="font-bold text-gray-900 mb-3 text-sm">Contact Information</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#0033A0]" />
                <p className="text-xs text-gray-700">kp-deep@kpitb.gov.pk</p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#00A86B]" />
                <p className="text-xs text-gray-700">+92-91-123-4567</p>
              </div>
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-[#00BCD4]" />
                <p className="text-xs text-gray-700">Project Management Unit, KPITB</p>
              </div>
            </div>
          </div>
        </div>

        {/* Vision Statement - AT BOTTOM */}
        <div className="bg-white/95 backdrop-blur-sm rounded-xl p-5 shadow-2xl">
          <div className="text-center">
            <h3 className="text-xl font-bold text-[#0033A0] mb-2">Our Vision for Khyber Pakhtunkhwa</h3>
            <p className="text-base text-gray-700 leading-relaxed max-w-4xl mx-auto">
              By 2029, every SME in KP will have access to digital tools, formal credit, and growth opportunities—
              transforming our province into Pakistan's leading digital economy hub and creating 
              <span className="font-bold text-[#00A86B]"> 50,000+ new jobs</span> in the process.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
