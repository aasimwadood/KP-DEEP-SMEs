import { useState } from 'react';
import { Card } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/app/components/ui/tabs';
import { Badge } from '@/app/components/ui/badge';
import { Checkbox } from '@/app/components/ui/checkbox';
import { 
  FileText, CheckCircle2, XCircle, Clock, Eye, 
  Download, MessageSquare, AlertTriangle, Filter, Search
} from 'lucide-react';
import { Input } from '@/app/components/ui/input';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/app/components/ui/dialog';
import { Textarea } from '@/app/components/ui/textarea';
import { Progress } from '@/app/components/ui/progress';

interface Application {
  id: string;
  smeName: string;
  businessType: string;
  location: string;
  digitalScore: number;
  appliedDate: string;
  status: 'new' | 'under-review' | 'approved' | 'rejected';
  documents: { name: string; status: 'verified' | 'pending' | 'rejected' }[];
  amount: number;
}

const mockApplications: Application[] = [
  {
    id: 'APP-001',
    smeName: 'Ahmed Textiles',
    businessType: 'Manufacturing',
    location: 'Peshawar',
    digitalScore: 72,
    appliedDate: '2026-02-01',
    status: 'new',
    documents: [
      { name: 'CNIC', status: 'pending' },
      { name: 'Business Registration', status: 'pending' },
      { name: 'Bank Statement', status: 'pending' },
    ],
    amount: 75000,
  },
  {
    id: 'APP-002',
    smeName: 'Fatima Handicrafts',
    businessType: 'Retail',
    location: 'Swat',
    digitalScore: 68,
    appliedDate: '2026-02-02',
    status: 'under-review',
    documents: [
      { name: 'CNIC', status: 'verified' },
      { name: 'Business Registration', status: 'verified' },
      { name: 'Bank Statement', status: 'pending' },
    ],
    amount: 50000,
  },
  {
    id: 'APP-003',
    smeName: 'Khan Restaurant',
    businessType: 'Services',
    location: 'Abbottabad',
    digitalScore: 85,
    appliedDate: '2026-01-28',
    status: 'approved',
    documents: [
      { name: 'CNIC', status: 'verified' },
      { name: 'Business Registration', status: 'verified' },
      { name: 'Bank Statement', status: 'verified' },
    ],
    amount: 60000,
  },
];

export function GrantManagement() {
  const [activeTab, setActiveTab] = useState<string>('new');
  const [selectedApps, setSelectedApps] = useState<string[]>([]);
  const [viewingApp, setViewingApp] = useState<Application | null>(null);
  const [showDecisionModal, setShowDecisionModal] = useState(false);
  const [decision, setDecision] = useState<'approve' | 'reject' | 'request-info' | null>(null);
  const [comment, setComment] = useState('');

  const filteredApplications = mockApplications.filter(
    (app) => app.status === activeTab
  );

  const handleSelectApp = (id: string) => {
    setSelectedApps((prev) =>
      prev.includes(id) ? prev.filter((appId) => appId !== id) : [...prev, id]
    );
  };

  const handleBulkAction = (action: string) => {
    alert(`Bulk ${action} for ${selectedApps.length} applications`);
    setSelectedApps([]);
  };

  const getScoreColor = (score: number) => {
    if (score >= 70) return 'text-green-600 bg-green-50';
    if (score >= 40) return 'text-yellow-600 bg-yellow-50';
    return 'text-red-600 bg-red-50';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Grant Management</h1>
              <p className="text-sm text-gray-600 mt-1">Application Review & Disbursement</p>
            </div>
            
            <div className="flex gap-2">
              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </Button>
              <Button variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl px-6 py-6">
        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-4 mb-6">
          <Card className="p-4">
            <div className="text-sm text-gray-600">New Applications</div>
            <div className="text-2xl font-bold text-gray-900 mt-1">24</div>
          </Card>
          <Card className="p-4">
            <div className="text-sm text-gray-600">Under Review</div>
            <div className="text-2xl font-bold text-blue-600 mt-1">15</div>
          </Card>
          <Card className="p-4">
            <div className="text-sm text-gray-600">Approved</div>
            <div className="text-2xl font-bold text-green-600 mt-1">580</div>
          </Card>
          <Card className="p-4">
            <div className="text-sm text-gray-600">Total Disbursed</div>
            <div className="text-2xl font-bold text-purple-600 mt-1">PKR 1.2B</div>
          </Card>
        </div>

        {/* Tabs */}
        <Card className="p-6">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <div className="flex items-center justify-between mb-6">
              <TabsList>
                <TabsTrigger value="new">New (24)</TabsTrigger>
                <TabsTrigger value="under-review">Under Review (15)</TabsTrigger>
                <TabsTrigger value="approved">Approved (580)</TabsTrigger>
                <TabsTrigger value="rejected">Rejected (32)</TabsTrigger>
              </TabsList>

              {selectedApps.length > 0 && (
                <div className="flex gap-2">
                  <Button size="sm" onClick={() => handleBulkAction('approve')}>
                    Bulk Approve ({selectedApps.length})
                  </Button>
                  <Button size="sm" variant="outline" onClick={() => handleBulkAction('reject')}>
                    Bulk Reject ({selectedApps.length})
                  </Button>
                </div>
              )}
            </div>

            {/* Search */}
            <div className="mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  placeholder="Search by SME name, ID, or location..."
                  className="pl-10"
                />
              </div>
            </div>

            {/* Application List */}
            <div className="space-y-3">
              {filteredApplications.map((app) => (
                <div
                  key={app.id}
                  className="flex items-center gap-4 p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Checkbox
                    checked={selectedApps.includes(app.id)}
                    onCheckedChange={() => handleSelectApp(app.id)}
                  />

                  <div className="flex-1 grid md:grid-cols-6 gap-4 items-center">
                    <div>
                      <div className="font-semibold text-gray-900">{app.smeName}</div>
                      <div className="text-sm text-gray-500">{app.id}</div>
                    </div>

                    <div>
                      <div className="text-sm text-gray-600">{app.businessType}</div>
                      <div className="text-xs text-gray-500">{app.location}</div>
                    </div>

                    <div>
                      <div className="text-sm text-gray-600">Digital Score</div>
                      <div className={`inline-block px-2 py-1 rounded text-sm font-semibold ${getScoreColor(app.digitalScore)}`}>
                        {app.digitalScore}/100
                      </div>
                    </div>

                    <div>
                      <div className="text-sm text-gray-600">Amount</div>
                      <div className="font-semibold text-gray-900">PKR {app.amount.toLocaleString()}</div>
                    </div>

                    <div>
                      <div className="text-sm text-gray-600">Documents</div>
                      <div className="flex gap-1 mt-1">
                        {app.documents.map((doc, idx) => (
                          <div
                            key={idx}
                            className={`w-2 h-2 rounded-full ${
                              doc.status === 'verified'
                                ? 'bg-green-500'
                                : doc.status === 'rejected'
                                ? 'bg-red-500'
                                : 'bg-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => setViewingApp(app)}
                      >
                        <Eye className="w-4 h-4 mr-1" />
                        View
                      </Button>
                      {app.status !== 'approved' && app.status !== 'rejected' && (
                        <Button
                          size="sm"
                          onClick={() => {
                            setViewingApp(app);
                            setShowDecisionModal(true);
                          }}
                        >
                          Review
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Tabs>
        </Card>
      </div>

      {/* Application Detail Modal */}
      {viewingApp && (
        <Dialog open={!!viewingApp} onOpenChange={() => setViewingApp(null)}>
          <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{viewingApp.smeName} - Grant Application</DialogTitle>
              <DialogDescription>Application ID: {viewingApp.id}</DialogDescription>
            </DialogHeader>

            <div className="space-y-4">
              {/* Basic Info */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-semibold text-gray-700">Business Type</label>
                  <p className="text-gray-900">{viewingApp.businessType}</p>
                </div>
                <div>
                  <label className="text-sm font-semibold text-gray-700">Location</label>
                  <p className="text-gray-900">{viewingApp.location}</p>
                </div>
                <div>
                  <label className="text-sm font-semibold text-gray-700">Grant Amount</label>
                  <p className="text-gray-900">PKR {viewingApp.amount.toLocaleString()}</p>
                </div>
                <div>
                  <label className="text-sm font-semibold text-gray-700">Digital Readiness</label>
                  <p className={`inline-block px-2 py-1 rounded font-semibold ${getScoreColor(viewingApp.digitalScore)}`}>
                    {viewingApp.digitalScore}/100
                  </p>
                </div>
              </div>

              {/* Document Verification */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Document Verification</h3>
                <div className="space-y-2">
                  {viewingApp.documents.map((doc, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        {doc.status === 'verified' ? (
                          <CheckCircle2 className="w-5 h-5 text-green-600" />
                        ) : doc.status === 'rejected' ? (
                          <XCircle className="w-5 h-5 text-red-600" />
                        ) : (
                          <Clock className="w-5 h-5 text-gray-400" />
                        )}
                        <span className="font-medium text-gray-900">{doc.name}</span>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">View</Button>
                        {doc.status === 'pending' && (
                          <>
                            <Button size="sm" variant="outline">Verify</Button>
                            <Button size="sm" variant="outline">Reject</Button>
                          </>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Milestone Progress */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Milestone Progress</h3>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Grant Approved</span>
                      <span className="text-green-600">✓ Complete</span>
                    </div>
                    <Progress value={100} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Software Installed</span>
                      <span className="text-blue-600">In Progress</span>
                    </div>
                    <Progress value={60} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>100 Invoices Generated</span>
                      <span className="text-gray-400">Pending</span>
                    </div>
                    <Progress value={0} className="h-2" />
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2">
                <Button className="flex-1 bg-green-600 hover:bg-green-700">
                  <CheckCircle2 className="w-4 h-4 mr-2" />
                  Approve
                </Button>
                <Button variant="outline" className="flex-1">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Request More Info
                </Button>
                <Button variant="outline" className="flex-1 text-red-600 border-red-200 hover:bg-red-50">
                  <XCircle className="w-4 h-4 mr-2" />
                  Reject
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
