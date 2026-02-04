import { useState } from 'react';
import { Card } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { Input } from '@/app/components/ui/input';
import { Users, MapPin, Star, Award, TrendingUp, Calendar, Search } from 'lucide-react';

const consultants = [
  {
    id: '1',
    name: 'Ahmed Khan',
    photo: '',
    district: 'Peshawar',
    specialization: ['Manufacturing', 'Retail'],
    certLevel: 'Senior',
    activeAssignments: 12,
    totalCompleted: 45,
    satisfaction: 4.9,
    availability: 'Available',
  },
  {
    id: '2',
    name: 'Fatima Ali',
    photo: '',
    district: 'Swat',
    specialization: ['Retail', 'Services'],
    certLevel: 'Expert',
    activeAssignments: 8,
    totalCompleted: 62,
    satisfaction: 4.8,
    availability: 'Busy',
  },
  {
    id: '3',
    name: 'Imran Shah',
    photo: '',
    district: 'Abbottabad',
    specialization: ['Services'],
    certLevel: 'Senior',
    activeAssignments: 10,
    totalCompleted: 38,
    satisfaction: 4.7,
    availability: 'Available',
  },
];

export function ConsultantPortal() {
  const [filter, setFilter] = useState('all');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto max-w-7xl px-6 py-4">
          <h1 className="text-2xl font-bold text-gray-900">Digital Implementation Consultants</h1>
          <p className="text-sm text-gray-600 mt-1">Manage consultant assignments and performance</p>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl px-6 py-6">
        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-4 mb-6">
          <Card className="p-4">
            <div className="flex items-center gap-3">
              <Users className="w-8 h-8 text-blue-600" />
              <div>
                <div className="text-2xl font-bold text-gray-900">45</div>
                <div className="text-sm text-gray-600">Active Consultants</div>
              </div>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-3">
              <TrendingUp className="w-8 h-8 text-green-600" />
              <div>
                <div className="text-2xl font-bold text-gray-900">87%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-3">
              <Star className="w-8 h-8 text-yellow-600" />
              <div>
                <div className="text-2xl font-bold text-gray-900">4.8</div>
                <div className="text-sm text-gray-600">Avg Rating</div>
              </div>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-3">
              <Calendar className="w-8 h-8 text-purple-600" />
              <div>
                <div className="text-2xl font-bold text-gray-900">320</div>
                <div className="text-sm text-gray-600">Active Assignments</div>
              </div>
            </div>
          </Card>
        </div>

        {/* Search and Filters */}
        <Card className="p-6 mb-6">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input placeholder="Search consultants by name, district, or specialization..." className="pl-10" />
            </div>
            <Button variant="outline">By District</Button>
            <Button variant="outline">By Specialization</Button>
            <Button variant="outline">By Performance</Button>
          </div>
        </Card>

        {/* Consultant Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {consultants.map((consultant) => (
            <Card key={consultant.id} className="p-6 hover:shadow-lg transition-shadow">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-bold text-lg">
                    {consultant.name.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{consultant.name}</h3>
                    <Badge variant="outline" className="mt-1">{consultant.certLevel}</Badge>
                  </div>
                </div>
                <div className={`px-2 py-1 rounded text-xs font-semibold ${
                  consultant.availability === 'Available' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
                }`}>
                  {consultant.availability}
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                <MapPin className="w-4 h-4" />
                <span>{consultant.district}</span>
              </div>

              {/* Specialization */}
              <div className="flex flex-wrap gap-2 mb-4">
                {consultant.specialization.map((spec, idx) => (
                  <Badge key={idx} variant="secondary" className="text-xs">{spec}</Badge>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 mb-4 pt-4 border-t">
                <div className="text-center">
                  <div className="text-lg font-bold text-gray-900">{consultant.activeAssignments}</div>
                  <div className="text-xs text-gray-600">Active</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-gray-900">{consultant.totalCompleted}</div>
                  <div className="text-xs text-gray-600">Completed</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-lg font-bold text-gray-900">{consultant.satisfaction}</span>
                  </div>
                  <div className="text-xs text-gray-600">Rating</div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <Button size="sm" className="flex-1">View Profile</Button>
                <Button size="sm" variant="outline" className="flex-1">Assign SME</Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Assignment Board */}
        <Card className="p-6 mt-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Assignment Board</h2>
          <p className="text-gray-600 mb-4">Drag and drop consultants to SMEs for assignment</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 min-h-[200px]">
              <h3 className="font-semibold text-gray-700 mb-3">Available Consultants</h3>
              <div className="space-y-2">
                {consultants.filter(c => c.availability === 'Available').map(c => (
                  <div key={c.id} className="p-3 bg-white border rounded-lg cursor-move hover:shadow-md transition-shadow">
                    <div className="font-medium text-gray-900">{c.name}</div>
                    <div className="text-xs text-gray-600">{c.district} • {c.activeAssignments} active</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="border-2 border-dashed border-blue-300 rounded-lg p-4 min-h-[200px] bg-blue-50">
              <h3 className="font-semibold text-gray-700 mb-3">Unassigned SMEs (12)</h3>
              <div className="text-sm text-gray-600">Drop consultants here to assign</div>
            </div>
          </div>
        </Card>

        {/* Performance Dashboard */}
        <Card className="p-6 mt-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Performance Dashboard</h2>
          <div className="space-y-4">
            {consultants.map((consultant, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <div className="w-32 font-medium text-gray-900">{consultant.name}</div>
                <div className="flex-1">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Success Rate</span>
                    <span className="font-semibold text-gray-900">
                      {Math.round((consultant.totalCompleted / (consultant.totalCompleted + 5)) * 100)}%
                    </span>
                  </div>
                  <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-green-500 to-green-600"
                      style={{ width: `${Math.round((consultant.totalCompleted / (consultant.totalCompleted + 5)) * 100)}%` }}
                    />
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold text-gray-900">{consultant.satisfaction}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
