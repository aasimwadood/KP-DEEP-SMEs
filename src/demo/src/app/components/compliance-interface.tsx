import { Card } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { 
  Shield, AlertTriangle, CheckCircle2, FileText, 
  Lock, Users, Clock, Database, Download 
} from 'lucide-react';
import { Progress } from '@/app/components/ui/progress';
import { Switch } from '@/app/components/ui/switch';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/app/components/ui/tabs';

export function ComplianceInterface() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto max-w-7xl px-6 py-4">
          <h1 className="text-2xl font-bold text-gray-900">Regulatory Sandbox & Compliance</h1>
          <p className="text-sm text-gray-600 mt-1">Data privacy, tax integration, and compliance management</p>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl px-6 py-6 space-y-6">
        {/* Tax Integration Dashboard */}
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <FileText className="w-6 h-6 text-blue-600" />
            <h2 className="text-xl font-semibold text-gray-900">Tax Integration Dashboard</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <Card className="p-4 bg-green-50 border-green-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-700">FBR Connection</span>
                <CheckCircle2 className="w-5 h-5 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">Active</div>
              <div className="text-xs text-gray-600 mt-1">Last sync: 5 min ago</div>
            </Card>

            <Card className="p-4 bg-green-50 border-green-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-700">KPRA Connection</span>
                <CheckCircle2 className="w-5 h-5 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">Active</div>
              <div className="text-xs text-gray-600 mt-1">Last sync: 2 min ago</div>
            </Card>

            <Card className="p-4 bg-orange-50 border-orange-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-700">Invoice Queue</span>
                <Clock className="w-5 h-5 text-orange-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">234</div>
              <div className="text-xs text-gray-600 mt-1">Pending submission</div>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Filing Calendar</h3>
              <div className="space-y-2">
                {[
                  { deadline: 'Feb 15, 2026', type: 'Monthly Sales Tax', status: 'upcoming', days: 11 },
                  { deadline: 'Mar 31, 2026', type: 'Quarterly Income Tax', status: 'upcoming', days: 56 },
                  { deadline: 'Jan 15, 2026', type: 'Monthly Sales Tax', status: 'completed', days: -20 },
                ].map((filing, idx) => (
                  <div key={idx} className={`p-3 rounded-lg border ${filing.status === 'completed' ? 'bg-gray-50' : 'bg-blue-50 border-blue-200'}`}>
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-medium text-gray-900">{filing.type}</div>
                        <div className="text-sm text-gray-600">{filing.deadline}</div>
                      </div>
                      {filing.status === 'completed' ? (
                        <CheckCircle2 className="w-5 h-5 text-green-600" />
                      ) : (
                        <Badge variant="outline">{filing.days} days</Badge>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Filing Statistics</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Automated Filings</span>
                    <span className="font-semibold text-gray-900">1,245</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Manual Filings</span>
                    <span className="font-semibold text-gray-900">220</span>
                  </div>
                  <Progress value={15} className="h-2" />
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Data Privacy & Consent Management */}
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <Lock className="w-6 h-6 text-purple-600" />
            <h2 className="text-xl font-semibold text-gray-900">Data Privacy & Consent Management</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <Card className="p-4 bg-blue-50">
              <div className="text-sm text-gray-700 mb-2">Active Consents</div>
              <div className="text-3xl font-bold text-gray-900">1,420</div>
              <div className="text-xs text-gray-600 mt-1">95% of enrolled SMEs</div>
            </Card>
            <Card className="p-4 bg-yellow-50">
              <div className="text-sm text-gray-700 mb-2">Expiring Soon (30d)</div>
              <div className="text-3xl font-bold text-orange-600">45</div>
              <div className="text-xs text-gray-600 mt-1">Renewal required</div>
            </Card>
            <Card className="p-4 bg-red-50">
              <div className="text-sm text-gray-700 mb-2">Revoked Consents</div>
              <div className="text-3xl font-bold text-red-600">12</div>
              <div className="text-xs text-gray-600 mt-1">This month</div>
            </Card>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold text-gray-900">Consent Tracking</h3>
            {[
              { sme: 'Ahmed Textiles', bank: 'HBL', dataTypes: ['Financial', 'Transactions'], status: 'active', expiry: '180 days' },
              { sme: 'Fatima Crafts', bank: 'UBL', dataTypes: ['Financial', 'Identity'], status: 'expiring', expiry: '25 days' },
              { sme: 'Khan Restaurant', bank: 'MCB', dataTypes: ['Financial'], status: 'active', expiry: '240 days' },
            ].map((consent, idx) => (
              <div key={idx} className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <div className="font-semibold text-gray-900">{consent.sme}</div>
                    <div className="text-sm text-gray-600">Shared with {consent.bank}</div>
                  </div>
                  <Badge variant={consent.status === 'expiring' ? 'destructive' : 'secondary'}>
                    {consent.status === 'expiring' ? `Expires in ${consent.expiry}` : `Valid for ${consent.expiry}`}
                  </Badge>
                </div>
                <div className="flex gap-2 mt-2">
                  {consent.dataTypes.map((type, tidx) => (
                    <Badge key={tidx} variant="outline" className="text-xs">{type}</Badge>
                  ))}
                </div>
                <div className="flex gap-2 mt-3">
                  <Button size="sm" variant="outline">View Audit Trail</Button>
                  <Button size="sm" variant="outline">Revoke Consent</Button>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Regulatory Sandbox Controls */}
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="w-6 h-6 text-green-600" />
            <h2 className="text-xl font-semibold text-gray-900">Regulatory Sandbox Controls</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Sandbox Settings</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <div className="font-medium text-gray-900">24-Month Protection Period</div>
                    <div className="text-sm text-gray-600">Default sandbox duration</div>
                  </div>
                  <Switch checked={true} />
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <div className="font-medium text-gray-900">Auto-renewal Alerts</div>
                    <div className="text-sm text-gray-600">30-day advance notification</div>
                  </div>
                  <Switch checked={true} />
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <div className="font-medium text-gray-900">Data Access Restrictions</div>
                    <div className="text-sm text-gray-600">Enforce whitelist policies</div>
                  </div>
                  <Switch checked={true} />
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Compliance Rules Engine</h3>
              <div className="space-y-3">
                <div className="p-3 border rounded-lg bg-gray-50">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-medium text-gray-900">If invoice &gt; PKR 100k → FBR Report</span>
                  </div>
                  <div className="text-xs text-gray-600">Auto-triggered 1,245 times</div>
                </div>
                <div className="p-3 border rounded-lg bg-gray-50">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-medium text-gray-900">If consent expires → Block data sharing</span>
                  </div>
                  <div className="text-xs text-gray-600">Auto-triggered 8 times</div>
                </div>
                <Button size="sm" variant="outline" className="w-full">
                  Add New Rule
                </Button>
              </div>
            </div>
          </div>
        </Card>

        {/* Compliance Reporting */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Database className="w-6 h-6 text-blue-600" />
              <h2 className="text-xl font-semibold text-gray-900">Compliance Reporting</h2>
            </div>
            <Button>
              <Download className="w-4 h-4 mr-2" />
              Generate Report
            </Button>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            <Card className="p-4 text-center">
              <div className="text-3xl font-bold text-green-600 mb-1">98%</div>
              <div className="text-sm text-gray-600">Compliance Score</div>
            </Card>
            <Card className="p-4 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">1,465</div>
              <div className="text-sm text-gray-600">SMEs in Sandbox</div>
            </Card>
            <Card className="p-4 text-center">
              <div className="text-3xl font-bold text-purple-600 mb-1">Zero</div>
              <div className="text-sm text-gray-600">Data Breaches</div>
            </Card>
            <Card className="p-4 text-center">
              <div className="text-3xl font-bold text-orange-600 mb-1">3</div>
              <div className="text-sm text-gray-600">Active Audits</div>
            </Card>
          </div>
        </Card>
      </div>
    </div>
  );
}
