import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/app/components/ui/dialog';
import { Button } from '@/app/components/ui/button';
import { Check, X } from 'lucide-react';
import { Vendor } from './vendor-card';

interface ComparisonModalProps {
  open: boolean;
  onClose: () => void;
  vendors: Vendor[];
}

const allFeatures = [
  'Inventory Management',
  'Invoicing',
  'Point of Sale',
  'Reporting & Analytics',
  'Accounting',
  'Multi-User Access',
  'Mobile App',
  'Cloud Backup',
  'Tax Compliance',
  'Customer Management',
];

export function ComparisonModal({ open, onClose, vendors }: ComparisonModalProps) {
  if (vendors.length === 0) return null;

  const hasFeature = (vendor: Vendor, feature: string) => {
    return vendor.features.some(
      (f) => f.toLowerCase().includes(feature.toLowerCase().split(' ')[0])
    );
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Compare Software Solutions</DialogTitle>
          <DialogDescription>
            Side-by-side comparison of selected vendors
          </DialogDescription>
        </DialogHeader>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left p-4 font-semibold text-gray-900">
                  Features
                </th>
                {vendors.map((vendor) => (
                  <th key={vendor.id} className="p-4 text-center">
                    <div className="font-semibold text-gray-900">{vendor.name}</div>
                    <div className="text-sm text-gray-600 mt-1">
                      PKR {vendor.subsidizedPrice.toLocaleString()}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* Rating */}
              <tr className="border-b bg-gray-50">
                <td className="p-4 font-medium text-gray-700">Rating</td>
                {vendors.map((vendor) => (
                  <td key={vendor.id} className="p-4 text-center">
                    <div className="flex items-center justify-center gap-1">
                      <span className="font-semibold">{vendor.rating}</span>
                      <span className="text-gray-500">/ 5</span>
                    </div>
                  </td>
                ))}
              </tr>

              {/* Price */}
              <tr className="border-b">
                <td className="p-4 font-medium text-gray-700">Original Price</td>
                {vendors.map((vendor) => (
                  <td key={vendor.id} className="p-4 text-center text-gray-500 line-through">
                    PKR {vendor.originalPrice.toLocaleString()}
                  </td>
                ))}
              </tr>

              {/* Grant Included */}
              <tr className="border-b bg-gray-50">
                <td className="p-4 font-medium text-gray-700">Included in Grant</td>
                {vendors.map((vendor) => (
                  <td key={vendor.id} className="p-4 text-center">
                    {vendor.includedInGrant ? (
                      <Check className="w-5 h-5 text-green-600 mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-gray-400 mx-auto" />
                    )}
                  </td>
                ))}
              </tr>

              {/* Features */}
              {allFeatures.map((feature, index) => (
                <tr
                  key={feature}
                  className={index % 2 === 0 ? 'border-b' : 'border-b bg-gray-50'}
                >
                  <td className="p-4 font-medium text-gray-700">{feature}</td>
                  {vendors.map((vendor) => (
                    <td key={vendor.id} className="p-4 text-center">
                      {hasFeature(vendor, feature) ? (
                        <Check className="w-5 h-5 text-green-600 mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-gray-400 mx-auto" />
                      )}
                    </td>
                  ))}
                </tr>
              ))}

              {/* Language Support */}
              <tr className="border-b bg-gray-50">
                <td className="p-4 font-medium text-gray-700">Languages</td>
                {vendors.map((vendor) => (
                  <td key={vendor.id} className="p-4 text-center text-sm">
                    {vendor.languages.join(', ')}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700">
            Select & Continue
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
