import { Smartphone, Globe, TrendingUp } from 'lucide-react';

export function Slide1TitleSlide() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-[#0033A0] via-[#0044BB] to-[#00BCD4] text-white flex flex-col items-center justify-center p-12 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-64 h-64 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 border-2 border-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border-2 border-white rounded-full"></div>
      </div>

      {/* Hero Visual Icons */}
      <div className="flex gap-8 mb-8 z-10">
        <div className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl">
          <Globe className="w-16 h-16" />
        </div>
        <div className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl">
          <Smartphone className="w-16 h-16" />
        </div>
        <div className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl">
          <TrendingUp className="w-16 h-16" />
        </div>
      </div>

      {/* Main Title */}
      <h1 className="text-5xl font-bold text-center mb-6 z-10 max-w-5xl leading-tight">
        Khyber Pakhtunkhwa Digital Enterprise Enablement Program
      </h1>
      <div className="text-6xl font-bold mb-8 z-10 tracking-wider">
        (KP-DEEP)
      </div>

      {/* Subtitle */}
      <p className="text-2xl text-center mb-16 z-10 text-white/90 max-w-3xl">
        A Holistic Digital Transformation Platform for SMEs
      </p>

      {/* Footer */}
      <div className="absolute bottom-8 left-12 right-12 flex justify-between items-end z-10">
        <div className="text-left">
          <p className="text-lg opacity-90">Presented to</p>
          <p className="text-xl font-semibold">Government of Khyber Pakhtunkhwa</p>
          <p className="text-lg opacity-90">February 2026</p>
        </div>
        <div className="text-right">
          <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg">
            <p className="text-sm opacity-90">Government Seal</p>
            <p className="text-2xl font-bold">KP</p>
          </div>
        </div>
      </div>
    </div>
  );
}
