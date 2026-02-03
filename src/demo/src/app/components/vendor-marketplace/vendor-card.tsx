import { Card } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { Checkbox } from '@/app/components/ui/checkbox';
import { Star, Check, Play } from 'lucide-react';

export interface Vendor {
  id: string;
  name: string;
  logo: string;
  rating: number;
  reviewCount: number;
  features: string[];
  originalPrice: number;
  subsidizedPrice: number;
  includedInGrant: boolean;
  sector: string;
  languages: string[];
}

interface VendorCardProps {
  vendor: Vendor;
  isSelected: boolean;
  onToggleSelect: (id: string) => void;
}

export function VendorCard({ vendor, isSelected, onToggleSelect }: VendorCardProps) {
  const discount = Math.round(
    ((vendor.originalPrice - vendor.subsidizedPrice) / vendor.originalPrice) * 100
  );

  return (
    <Card className={`p-6 hover:shadow-lg transition-all ${isSelected ? 'ring-2 ring-blue-600' : ''}`}>
      <div className="flex items-start gap-4">
        {/* Checkbox for Comparison */}
        <Checkbox
          checked={isSelected}
          onCheckedChange={() => onToggleSelect(vendor.id)}
          className="mt-1"
        />
        
        {/* Vendor Logo */}
        <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center text-white font-bold text-lg">
            {vendor.name.charAt(0)}
          </div>
        </div>
        
        {/* Content */}
        <div className="flex-1">
          {/* Header */}
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="font-semibold text-lg text-gray-900">{vendor.name}</h3>
              <div className="flex items-center gap-2 mt-1">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium text-gray-700">
                    {vendor.rating}
                  </span>
                </div>
                <span className="text-sm text-gray-500">
                  ({vendor.reviewCount} reviews)
                </span>
              </div>
            </div>
            
            {vendor.includedInGrant && (
              <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                <Check className="w-3 h-3 mr-1" />
                Included in Grant
              </Badge>
            )}
          </div>
          
          {/* Features */}
          <div className="flex flex-wrap gap-2 my-3">
            {vendor.features.map((feature, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {feature}
              </Badge>
            ))}
          </div>
          
          {/* Languages */}
          <div className="flex gap-2 mb-4">
            {vendor.languages.map((lang, index) => (
              <span key={index} className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded">
                {lang}
              </span>
            ))}
          </div>
          
          {/* Pricing */}
          <div className="flex items-end justify-between">
            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-blue-600">
                  PKR {vendor.subsidizedPrice.toLocaleString()}
                </span>
                <span className="text-sm text-gray-400 line-through">
                  PKR {vendor.originalPrice.toLocaleString()}
                </span>
              </div>
              <div className="text-xs text-green-600 font-medium mt-1">
                Save {discount}% with KP-DEEP subsidy
              </div>
            </div>
          </div>
          
          {/* Actions */}
          <div className="flex gap-2 mt-4">
            <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
              Select for Grant
            </Button>
            <Button variant="outline" className="flex-1">
              <Play className="w-4 h-4 mr-2" />
              Request Demo
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}
