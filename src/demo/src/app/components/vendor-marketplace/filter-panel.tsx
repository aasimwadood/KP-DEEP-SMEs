import { Card } from '@/app/components/ui/card';
import { Label } from '@/app/components/ui/label';
import { Checkbox } from '@/app/components/ui/checkbox';
import { Slider } from '@/app/components/ui/slider';
import { Button } from '@/app/components/ui/button';
import { RotateCcw } from 'lucide-react';

interface FilterPanelProps {
  filters: {
    sectors: string[];
    priceRange: number[];
    features: string[];
    languages: string[];
  };
  onFilterChange: (filters: any) => void;
}

const sectors = [
  { id: 'manufacturing', label: 'Manufacturing', labelUrdu: 'مینوفیکچرنگ' },
  { id: 'retail', label: 'Retail', labelUrdu: 'خوردہ' },
  { id: 'services', label: 'Services', labelUrdu: 'خدمات' },
];

const features = [
  { id: 'inventory', label: 'Inventory Management', labelUrdu: 'انوینٹری مینجمنٹ' },
  { id: 'invoicing', label: 'Invoicing', labelUrdu: 'انوائسنگ' },
  { id: 'pos', label: 'Point of Sale', labelUrdu: 'پوائنٹ آف سیل' },
  { id: 'reporting', label: 'Reporting & Analytics', labelUrdu: 'رپورٹنگ' },
  { id: 'accounting', label: 'Accounting', labelUrdu: 'اکاؤنٹنگ' },
];

const languages = [
  { id: 'urdu', label: 'Urdu', labelUrdu: 'اردو' },
  { id: 'pashto', label: 'Pashto', labelUrdu: 'پشتو' },
  { id: 'english', label: 'English', labelUrdu: 'انگریزی' },
];

export function FilterPanel({ filters, onFilterChange }: FilterPanelProps) {
  const handleSectorToggle = (sectorId: string) => {
    const newSectors = filters.sectors.includes(sectorId)
      ? filters.sectors.filter((s) => s !== sectorId)
      : [...filters.sectors, sectorId];
    onFilterChange({ ...filters, sectors: newSectors });
  };

  const handleFeatureToggle = (featureId: string) => {
    const newFeatures = filters.features.includes(featureId)
      ? filters.features.filter((f) => f !== featureId)
      : [...filters.features, featureId];
    onFilterChange({ ...filters, features: newFeatures });
  };

  const handleLanguageToggle = (languageId: string) => {
    const newLanguages = filters.languages.includes(languageId)
      ? filters.languages.filter((l) => l !== languageId)
      : [...filters.languages, languageId];
    onFilterChange({ ...filters, languages: newLanguages });
  };

  const handleReset = () => {
    onFilterChange({
      sectors: [],
      priceRange: [0, 100000],
      features: [],
      languages: [],
    });
  };

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-semibold text-lg text-gray-900">Filters</h3>
        <Button variant="ghost" size="sm" onClick={handleReset}>
          <RotateCcw className="w-4 h-4 mr-2" />
          Reset
        </Button>
      </div>
      
      <div className="space-y-6">
        {/* Sector Filter */}
        <div>
          <Label className="text-sm font-semibold text-gray-900 mb-3 block">
            Sector
          </Label>
          <div className="space-y-2">
            {sectors.map((sector) => (
              <div key={sector.id} className="flex items-center space-x-2">
                <Checkbox
                  id={sector.id}
                  checked={filters.sectors.includes(sector.id)}
                  onCheckedChange={() => handleSectorToggle(sector.id)}
                />
                <label
                  htmlFor={sector.id}
                  className="text-sm text-gray-700 cursor-pointer flex-1"
                >
                  {sector.label}
                  <span className="text-gray-500 ml-2" dir="rtl">
                    {sector.labelUrdu}
                  </span>
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Price Range Filter */}
        <div className="border-t pt-6">
          <Label className="text-sm font-semibold text-gray-900 mb-3 block">
            Price Range
          </Label>
          <div className="pt-2">
            <Slider
              value={filters.priceRange}
              onValueChange={(value) =>
                onFilterChange({ ...filters, priceRange: value })
              }
              min={0}
              max={100000}
              step={5000}
              className="mb-4"
            />
            <div className="flex justify-between text-sm text-gray-600">
              <span>PKR {filters.priceRange[0].toLocaleString()}</span>
              <span>PKR {filters.priceRange[1].toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* Features Filter */}
        <div className="border-t pt-6">
          <Label className="text-sm font-semibold text-gray-900 mb-3 block">
            Features
          </Label>
          <div className="space-y-2">
            {features.map((feature) => (
              <div key={feature.id} className="flex items-center space-x-2">
                <Checkbox
                  id={feature.id}
                  checked={filters.features.includes(feature.id)}
                  onCheckedChange={() => handleFeatureToggle(feature.id)}
                />
                <label
                  htmlFor={feature.id}
                  className="text-sm text-gray-700 cursor-pointer flex-1"
                >
                  {feature.label}
                  <span className="text-gray-500 ml-2 text-xs" dir="rtl">
                    {feature.labelUrdu}
                  </span>
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Language Support Filter */}
        <div className="border-t pt-6">
          <Label className="text-sm font-semibold text-gray-900 mb-3 block">
            Language Support
          </Label>
          <div className="space-y-2">
            {languages.map((language) => (
              <div key={language.id} className="flex items-center space-x-2">
                <Checkbox
                  id={language.id}
                  checked={filters.languages.includes(language.id)}
                  onCheckedChange={() => handleLanguageToggle(language.id)}
                />
                <label
                  htmlFor={language.id}
                  className="text-sm text-gray-700 cursor-pointer flex-1"
                >
                  {language.label}
                  <span className="text-gray-500 ml-2" dir="rtl">
                    {language.labelUrdu}
                  </span>
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}
