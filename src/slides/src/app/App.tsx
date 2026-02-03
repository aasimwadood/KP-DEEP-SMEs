import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, FileDown, Printer } from 'lucide-react';
import { Slide1TitleSlide } from '@/app/components/Slide1TitleSlide';
import { Slide2ProblemStatement } from '@/app/components/Slide2ProblemStatement';
import { Slide3SolutionOverview } from '@/app/components/Slide3SolutionOverview';
import { Slide4WebPortalDemo } from '@/app/components/Slide4WebPortalDemo';
import { Slide5MobileAppDemo } from '@/app/components/Slide5MobileAppDemo';
import { Slide6DigitalHealthScore } from '@/app/components/Slide6DigitalHealthScore';
import { Slide7ImplementationRoadmap } from '@/app/components/Slide7ImplementationRoadmap';
import { Slide8ImpactMetrics } from '@/app/components/Slide8ImpactMetrics';
import { Slide9BudgetInvestment } from '@/app/components/Slide9BudgetInvestment';
import { Slide10RiskMitigation } from '@/app/components/Slide10RiskMitigation';
import { Slide11NextSteps } from '@/app/components/Slide11NextSteps';
import { Slide12TeamStructure } from '@/app/components/Slide12TeamStructure';

const slides = [
  { id: 1, component: Slide1TitleSlide, title: 'Title' },
  { id: 2, component: Slide2ProblemStatement, title: 'Problem Statement' },
  { id: 3, component: Slide3SolutionOverview, title: 'Solution Overview' },
  { id: 4, component: Slide4WebPortalDemo, title: 'Web Portal Demo' },
  { id: 5, component: Slide5MobileAppDemo, title: 'Mobile App Demo' },
  { id: 6, component: Slide6DigitalHealthScore, title: 'Digital Health Score' },
  { id: 7, component: Slide7ImplementationRoadmap, title: 'Implementation Roadmap' },
  { id: 8, component: Slide8ImpactMetrics, title: 'Impact Metrics' },
  { id: 9, component: Slide9BudgetInvestment, title: 'Budget & Investment' },
  { id: 10, component: Slide10RiskMitigation, title: 'Risk Mitigation' },
  { id: 11, component: Slide12TeamStructure, title: 'Team Structure' },
  { id: 12, component: Slide11NextSteps, title: 'Next Steps' },
];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showDownloadMenu, setShowDownloadMenu] = useState(false);
  const slideRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'Enter') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        previousSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev < slides.length - 1 ? prev + 1 : prev));
  };

  const previousSlide = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const CurrentSlideComponent = slides[currentSlide].component;

  const downloadSlide = () => {
    setShowDownloadMenu(!showDownloadMenu);
  };

  const printSlide = () => {
    window.print();
  };

  return (
    <div className="w-screen h-screen bg-gray-900 flex flex-col overflow-hidden">
      {/* Main Slide Area */}
      <div className="flex-1 relative bg-white overflow-hidden">
        <div className="w-full h-full" ref={slideRef}>
          <CurrentSlideComponent />
        </div>

        {/* Navigation Overlay */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Previous Button - Left Half */}
          {currentSlide > 0 && (
            <button
              onClick={previousSlide}
              className="absolute left-0 top-0 bottom-0 w-24 pointer-events-auto opacity-0 hover:opacity-100 transition-opacity group"
              aria-label="Previous slide"
            >
              <div className="h-full flex items-center justify-start pl-4">
                <div className="bg-black/50 text-white rounded-full p-4 group-hover:bg-black/70 transition-colors">
                  <ChevronLeft className="w-8 h-8" />
                </div>
              </div>
            </button>
          )}

          {/* Next Button - Right Half */}
          {currentSlide < slides.length - 1 && (
            <button
              onClick={nextSlide}
              className="absolute right-0 top-0 bottom-0 w-24 pointer-events-auto opacity-0 hover:opacity-100 transition-opacity group"
              aria-label="Next slide"
            >
              <div className="h-full flex items-center justify-end pr-4">
                <div className="bg-black/50 text-white rounded-full p-4 group-hover:bg-black/70 transition-colors">
                  <ChevronRight className="w-8 h-8" />
                </div>
              </div>
            </button>
          )}
        </div>
      </div>

      {/* Bottom Control Bar */}
      <div className="bg-gray-800 text-white px-6 py-3 flex items-center justify-between">
        {/* Left: Slide Counter */}
        <div className="flex items-center gap-4">
          <span className="text-sm font-semibold">
            Slide {currentSlide + 1} of {slides.length}
          </span>
          <span className="text-xs text-gray-400">{slides[currentSlide].title}</span>
        </div>

        {/* Center: Slide Thumbnails/Dots */}
        <div className="flex items-center gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => goToSlide(index)}
              className={`transition-all ${
                index === currentSlide
                  ? 'w-8 h-2 bg-[#00A86B]'
                  : 'w-2 h-2 bg-gray-600 hover:bg-gray-500'
              } rounded-full`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Right: Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={previousSlide}
            disabled={currentSlide === 0}
            className="p-2 rounded hover:bg-gray-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="p-2 rounded hover:bg-gray-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
          <button
            onClick={downloadSlide}
            className="p-2 rounded hover:bg-gray-700 transition-colors relative"
            aria-label="Download"
          >
            <FileDown className="w-5 h-5" />
          </button>
          {showDownloadMenu && (
            <div className="absolute bottom-14 right-32 bg-gray-700 text-white rounded-lg shadow-xl p-4 z-50 min-w-[300px]">
              <div className="mb-3">
                <h3 className="font-bold mb-2">Download Options</h3>
                <p className="text-xs text-gray-300 mb-3">
                  To download slides, use your browser's built-in tools:
                </p>
              </div>
              <div className="space-y-2 text-sm">
                <div className="bg-gray-800 p-3 rounded">
                  <p className="font-semibold mb-1">📄 Save as PDF:</p>
                  <p className="text-xs text-gray-300">
                    Click the Print button → Select "Save as PDF" → Navigate through all slides
                  </p>
                </div>
                <div className="bg-gray-800 p-3 rounded">
                  <p className="font-semibold mb-1">📸 Screenshot:</p>
                  <p className="text-xs text-gray-300">
                    Windows: <kbd className="bg-gray-600 px-1 rounded">Win + Shift + S</kbd><br />
                    Mac: <kbd className="bg-gray-600 px-1 rounded">Cmd + Shift + 4</kbd>
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowDownloadMenu(false)}
                className="mt-3 w-full bg-[#00A86B] hover:bg-[#008f5c] py-2 rounded text-sm font-semibold"
              >
                Got it!
              </button>
            </div>
          )}
          <button
            onClick={printSlide}
            className="p-2 rounded hover:bg-gray-700 transition-colors"
            aria-label="Print"
          >
            <Printer className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Keyboard Shortcuts Helper */}
      <div className="absolute top-4 right-4 bg-black/70 text-white text-xs px-3 py-2 rounded-lg opacity-0 hover:opacity-100 transition-opacity">
        <p className="mb-1"><kbd className="bg-gray-700 px-2 py-1 rounded">←</kbd> Previous</p>
        <p className="mb-1"><kbd className="bg-gray-700 px-2 py-1 rounded">→</kbd> Next</p>
      </div>
    </div>
  );
}