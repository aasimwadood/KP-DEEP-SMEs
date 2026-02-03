import { useState } from 'react';
import { Button } from '@/app/components/ui/button';
import { Navigation } from '@/app/components/navigation';
import { HeroSection } from '@/app/components/hero-section';
import { BenefitsSection } from '@/app/components/benefits-section';
import { EligibilityWidget } from '@/app/components/eligibility-widget';
import { SuccessStories } from '@/app/components/success-stories';
import { TrustIndicators } from '@/app/components/trust-indicators';
import { Footer } from '@/app/components/footer';
import { SmeDashboard } from '@/app/components/sme-dashboard';
import { VendorMarketplace } from '@/app/components/vendor-marketplace';
import { Home, LayoutDashboard, ShoppingCart } from 'lucide-react';

type Page = 'landing' | 'dashboard' | 'marketplace';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('landing');

  // Navigation between pages
  const renderPage = () => {
    switch (currentPage) {
      case 'landing':
        return (
          <div className="min-h-screen bg-white">
            <Navigation />
            <HeroSection />
            <BenefitsSection />
            <EligibilityWidget />
            <SuccessStories />
            <TrustIndicators />
            <Footer />
          </div>
        );
      case 'dashboard':
        return <SmeDashboard />;
      case 'marketplace':
        return <VendorMarketplace onBack={() => setCurrentPage('dashboard')} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Page Switcher - For Demo Purposes */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2">
        <Button
          onClick={() => setCurrentPage('landing')}
          className={`shadow-lg ${
            currentPage === 'landing'
              ? 'bg-blue-600 hover:bg-blue-700'
              : 'bg-white text-gray-700 hover:bg-gray-100 border'
          }`}
          size="lg"
        >
          <Home className="w-5 h-5 mr-2" />
          Landing
        </Button>
        <Button
          onClick={() => setCurrentPage('dashboard')}
          className={`shadow-lg ${
            currentPage === 'dashboard'
              ? 'bg-blue-600 hover:bg-blue-700'
              : 'bg-white text-gray-700 hover:bg-gray-100 border'
          }`}
          size="lg"
        >
          <LayoutDashboard className="w-5 h-5 mr-2" />
          Dashboard
        </Button>
        <Button
          onClick={() => setCurrentPage('marketplace')}
          className={`shadow-lg ${
            currentPage === 'marketplace'
              ? 'bg-blue-600 hover:bg-blue-700'
              : 'bg-white text-gray-700 hover:bg-gray-100 border'
          }`}
          size="lg"
        >
          <ShoppingCart className="w-5 h-5 mr-2" />
          Marketplace
        </Button>
      </div>

      {/* Render Current Page */}
      {renderPage()}
    </div>
  );
}
