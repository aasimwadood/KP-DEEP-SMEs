import { AlertCircle, FileText, Package, DollarSign } from 'lucide-react';

export function Slide2ProblemStatement() {
  const problemImage = "https://images.unsplash.com/photo-1693045181676-57199422ee66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXBlciUyMGxlZGdlciUyMGFjY291bnRpbmclMjBtYW51YWx8ZW58MXx8fHwxNzY5OTYxNzA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

  return (
    <div className="w-full h-full bg-white p-12 flex flex-col overflow-hidden">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-5xl font-bold text-[#0033A0] mb-2">The Digital Vacuum</h2>
        <div className="h-1 w-32 bg-[#00A86B]"></div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex gap-8 min-h-0">
        {/* Left Side - Visual Collage */}
        <div className="flex-1 flex flex-col gap-4 min-h-0">
          <div className="flex-1 rounded-xl overflow-hidden shadow-2xl border-4 border-red-500 relative min-h-0">
            <img 
              src={problemImage} 
              alt="Manual paper ledger" 
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 bg-red-600 text-white px-4 py-2 rounded-lg font-bold">
              BEFORE: Manual Operations
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-gray-100 rounded-lg p-6 flex flex-col items-center justify-center border-2 border-red-400">
              <FileText className="w-12 h-12 text-red-600 mb-2" />
              <p className="text-sm text-center font-semibold">Paper Ledgers</p>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 flex flex-col items-center justify-center border-2 border-red-400">
              <Package className="w-12 h-12 text-red-600 mb-2" />
              <p className="text-sm text-center font-semibold">Manual Inventory</p>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 flex flex-col items-center justify-center border-2 border-red-400">
              <DollarSign className="w-12 h-12 text-red-600 mb-2" />
              <p className="text-sm text-center font-semibold">No Bank Access</p>
            </div>
          </div>
        </div>

        {/* Right Side - Problems */}
        <div className="flex-1 flex flex-col justify-center gap-6">
          <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">85% of KP SMEs</h3>
                <p className="text-lg text-gray-700">operate manually with no digital systems</p>
              </div>
            </div>
          </div>

          <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">PKR 50+ Billion</h3>
                <p className="text-lg text-gray-700">credit gap due to lack of collateral</p>
              </div>
            </div>
          </div>

          <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Zero Real-Time Data</h3>
                <p className="text-lg text-gray-700">for government economic planning</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Callout */}
      <div className="mt-6 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl p-6 text-center shadow-xl">
        <p className="text-3xl font-bold">200,000+ SMEs in Digital Darkness</p>
      </div>
    </div>
  );
}