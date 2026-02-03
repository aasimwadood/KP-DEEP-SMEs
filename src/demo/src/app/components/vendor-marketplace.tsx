import { useState } from 'react';
import { Button } from '@/app/components/ui/button';
import { FilterPanel } from '@/app/components/vendor-marketplace/filter-panel';
import { VendorCard, Vendor } from '@/app/components/vendor-marketplace/vendor-card';
import { ComparisonModal } from '@/app/components/vendor-marketplace/comparison-modal';
import { ArrowLeft, GitCompare } from 'lucide-react';

// Mock vendor data
const vendorsData: Vendor[] = [
  {
    id: '1',
    name: 'BizPro SME Suite',
    logo: '',
    rating: 4.8,
    reviewCount: 234,
    features: ['Inventory', 'Invoicing', 'POS', 'Reporting'],
    originalPrice: 50000,
    subsidizedPrice: 15000,
    includedInGrant: true,
    sector: 'retail',
    languages: ['Urdu', 'English'],
  },
  {
    id: '2',
    name: 'QuickBooks Pakistan',
    logo: '',
    rating: 4.5,
    reviewCount: 512,
    features: ['Accounting', 'Invoicing', 'Reporting'],
    originalPrice: 75000,
    subsidizedPrice: 25000,
    includedInGrant: true,
    sector: 'services',
    languages: ['English', 'Urdu'],
  },
  {
    id: '3',
    name: 'RetailMaster Pro',
    logo: '',
    rating: 4.6,
    reviewCount: 189,
    features: ['Inventory', 'POS', 'Reporting'],
    originalPrice: 60000,
    subsidizedPrice: 20000,
    includedInGrant: true,
    sector: 'retail',
    languages: ['Urdu', 'Pashto', 'English'],
  },
  {
    id: '4',
    name: 'ManufactureEase',
    logo: '',
    rating: 4.7,
    reviewCount: 145,
    features: ['Inventory', 'Reporting', 'Production'],
    originalPrice: 80000,
    subsidizedPrice: 30000,
    includedInGrant: true,
    sector: 'manufacturing',
    languages: ['English', 'Urdu'],
  },
  {
    id: '5',
    name: 'SmartKhata Digital',
    logo: '',
    rating: 4.9,
    reviewCount: 678,
    features: ['Invoicing', 'Customer Management', 'Mobile App'],
    originalPrice: 40000,
    subsidizedPrice: 10000,
    includedInGrant: true,
    sector: 'retail',
    languages: ['Urdu', 'Pashto', 'English'],
  },
  {
    id: '6',
    name: 'TaxMaster Pakistan',
    logo: '',
    rating: 4.4,
    reviewCount: 298,
    features: ['Accounting', 'Tax Compliance', 'Reporting'],
    originalPrice: 55000,
    subsidizedPrice: 18000,
    includedInGrant: false,
    sector: 'services',
    languages: ['English', 'Urdu'],
  },
];

interface VendorMarketplaceProps {
  onBack?: () => void;
}

export function VendorMarketplace({ onBack }: VendorMarketplaceProps) {
  const [filters, setFilters] = useState({
    sectors: [] as string[],
    priceRange: [0, 100000],
    features: [] as string[],
    languages: [] as string[],
  });
  
  const [selectedVendors, setSelectedVendors] = useState<string[]>([]);
  const [showComparison, setShowComparison] = useState(false);

  const handleToggleSelect = (id: string) => {
    if (selectedVendors.includes(id)) {
      setSelectedVendors(selectedVendors.filter((v) => v !== id));
    } else if (selectedVendors.length < 3) {
      setSelectedVendors([...selectedVendors, id]);
    }
  };

  // Filter vendors based on selected filters
  const filteredVendors = vendorsData.filter((vendor) => {
    // Sector filter
    if (filters.sectors.length > 0 && !filters.sectors.includes(vendor.sector)) {
      return false;
    }

    // Price filter
    if (
      vendor.subsidizedPrice < filters.priceRange[0] ||
      vendor.subsidizedPrice > filters.priceRange[1]
    ) {
      return false;
    }

    // Features filter
    if (filters.features.length > 0) {
      const hasAllFeatures = filters.features.some((feature) =>
        vendor.features.some((vf) =>
          vf.toLowerCase().includes(feature.toLowerCase())
        )
      );
      if (!hasAllFeatures) return false;
    }

    // Languages filter
    if (filters.languages.length > 0) {
      const hasLanguage = filters.languages.some((lang) =>
        vendor.languages.some((vl) => vl.toLowerCase() === lang.toLowerCase())
      );
      if (!hasLanguage) return false;
    }

    return true;
  });

  const selectedVendorObjects = vendorsData.filter((v) =>
    selectedVendors.includes(v.id)
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="container mx-auto max-w-7xl px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {onBack && (
                <Button variant="ghost" onClick={onBack}>
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
              )}
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  Software Vendor Marketplace
                </h1>
                <h2 className="text-xl font-bold text-gray-900" dir="rtl" lang="ur">
                  سافٹ ویئر وینڈر مارکیٹ پلیس
                </h2>
              </div>
            </div>
            
            {selectedVendors.length > 0 && (
              <Button
                onClick={() => setShowComparison(true)}
                className="bg-blue-600 hover:bg-blue-700"
                disabled={selectedVendors.length < 2}
              >
                <GitCompare className="w-4 h-4 mr-2" />
                Compare ({selectedVendors.length})
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto max-w-7xl px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Filter Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <FilterPanel filters={filters} onFilterChange={setFilters} />
            </div>
          </div>

          {/* Vendor List */}
          <div className="lg:col-span-3">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm text-gray-600">
                Showing {filteredVendors.length} of {vendorsData.length} vendors
              </p>
              {selectedVendors.length > 0 && (
                <p className="text-sm text-blue-600 font-medium">
                  {selectedVendors.length} selected for comparison
                  {selectedVendors.length < 2 && ' (select at least 2)'}
                </p>
              )}
            </div>

            <div className="space-y-4">
              {filteredVendors.length > 0 ? (
                filteredVendors.map((vendor) => (
                  <VendorCard
                    key={vendor.id}
                    vendor={vendor}
                    isSelected={selectedVendors.includes(vendor.id)}
                    onToggleSelect={handleToggleSelect}
                  />
                ))
              ) : (
                <div className="text-center py-12 bg-white rounded-lg border-2 border-dashed">
                  <p className="text-gray-500">
                    No vendors found matching your filters
                  </p>
                  <Button
                    variant="outline"
                    className="mt-4"
                    onClick={() =>
                      setFilters({
                        sectors: [],
                        priceRange: [0, 100000],
                        features: [],
                        languages: [],
                      })
                    }
                  >
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Comparison Modal */}
      <ComparisonModal
        open={showComparison}
        onClose={() => setShowComparison(false)}
        vendors={selectedVendorObjects}
      />
    </div>
  );
}
