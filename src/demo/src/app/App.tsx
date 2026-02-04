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
import { AdminDashboard } from '@/app/components/admin-dashboard';
import { GrantManagement } from '@/app/components/grant-management';
import { ConsultantPortal } from '@/app/components/consultant-portal';
import { ComplianceInterface } from '@/app/components/compliance-interface';
import { TrainingPlatform } from '@/app/components/training-platform';
import { Home, LayoutDashboard, ShoppingCart, Settings, FileCheck, Users, Shield, GraduationCap } from 'lucide-react';

type Page = 'landing' | 'dashboard' | 'marketplace' | 'admin' | 'grants' | 'consultants' | 'compliance' | 'training';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('landing');

  // Navigation between pages
  const renderPage = () => {
    switch (currentPage) {
      case 'landing':
        return (
          <div className="min-h-screen bg-white">
            <Navigation onNavigate={setCurrentPage} />
            <HeroSection onNavigate={setCurrentPage} />
            <BenefitsSection />
            <EligibilityWidget />
            <SuccessStories />
            <TrustIndicators />
            <Footer onNavigate={setCurrentPage} />
          </div>
        );
      case 'dashboard':
        return <SmeDashboard />;
      case 'marketplace':
        return <VendorMarketplace onBack={() => setCurrentPage('dashboard')} />;
      case 'admin':
        return <AdminDashboard />;
      case 'grants':
        return <GrantManagement />;
      case 'consultants':
        return <ConsultantPortal />;
      case 'compliance':
        return <ComplianceInterface />;
      case 'training':
        return <TrainingPlatform onBack={() => setCurrentPage('landing')} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Page Switcher - For Demo Purposes */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2 max-h-[80vh] overflow-y-auto bg-white rounded-lg shadow-xl p-2">
        <div className="text-xs font-semibold text-gray-500 px-2 py-1">PUBLIC</div>
        <Button
          onClick={() => setCurrentPage('landing')}
          className={`shadow-lg ${
            currentPage === 'landing'
              ? 'bg-blue-600 hover:bg-blue-700'
              : 'bg-white text-gray-700 hover:bg-gray-100 border'
          }`}
          size="sm"
        >
          <Home className="w-4 h-4 mr-2" />
          Landing
        </Button>
        
        <div className="text-xs font-semibold text-gray-500 px-2 py-1 mt-2">SME</div>
        <Button
          onClick={() => setCurrentPage('dashboard')}
          className={`shadow-lg ${
            currentPage === 'dashboard'
              ? 'bg-blue-600 hover:bg-blue-700'
              : 'bg-white text-gray-700 hover:bg-gray-100 border'
          }`}
          size="sm"
        >
          <LayoutDashboard className="w-4 h-4 mr-2" />
          Dashboard
        </Button>
        <Button
          onClick={() => setCurrentPage('marketplace')}
          className={`shadow-lg ${
            currentPage === 'marketplace'
              ? 'bg-blue-600 hover:bg-blue-700'
              : 'bg-white text-gray-700 hover:bg-gray-100 border'
          }`}
          size="sm"
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          Marketplace
        </Button>
        <Button
          onClick={() => setCurrentPage('training')}
          className={`shadow-lg ${
            currentPage === 'training'
              ? 'bg-blue-600 hover:bg-blue-700'
              : 'bg-white text-gray-700 hover:bg-gray-100 border'
          }`}
          size="sm"
        >
          <GraduationCap className="w-4 h-4 mr-2" />
          Training
        </Button>
        
        <div className="text-xs font-semibold text-gray-500 px-2 py-1 mt-2">ADMIN</div>
        <Button
          onClick={() => setCurrentPage('admin')}
          className={`shadow-lg ${
            currentPage === 'admin'
              ? 'bg-blue-600 hover:bg-blue-700'
              : 'bg-white text-gray-700 hover:bg-gray-100 border'
          }`}
          size="sm"
        >
          <Settings className="w-4 h-4 mr-2" />
          Analytics
        </Button>
        <Button
          onClick={() => setCurrentPage('grants')}
          className={`shadow-lg ${
            currentPage === 'grants'
              ? 'bg-blue-600 hover:bg-blue-700'
              : 'bg-white text-gray-700 hover:bg-gray-100 border'
          }`}
          size="sm"
        >
          <FileCheck className="w-4 h-4 mr-2" />
          Grants
        </Button>
        <Button
          onClick={() => setCurrentPage('consultants')}
          className={`shadow-lg ${
            currentPage === 'consultants'
              ? 'bg-blue-600 hover:bg-blue-700'
              : 'bg-white text-gray-700 hover:bg-gray-100 border'
          }`}
          size="sm"
        >
          <Users className="w-4 h-4 mr-2" />
          Consultants
        </Button>
        <Button
          onClick={() => setCurrentPage('compliance')}
          className={`shadow-lg ${
            currentPage === 'compliance'
              ? 'bg-blue-600 hover:bg-blue-700'
              : 'bg-white text-gray-700 hover:bg-gray-100 border'
          }`}
          size="sm"
        >
          <Shield className="w-4 h-4 mr-2" />
          Compliance
        </Button>
      </div>

      {/* Render Current Page */}
      {renderPage()}
    </div>
  );
}