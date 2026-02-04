import { useState } from 'react';
import { Card } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/app/components/ui/tabs';
import { 
  Users, TrendingUp, DollarSign, AlertTriangle, 
  MapPin, Activity, CheckCircle2, XCircle 
} from 'lucide-react';
import {
  BarChart, Bar, LineChart, Line, PieChart, Pie,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell
} from 'recharts';

export function AdminDashboard() {
  const [viewLevel, setViewLevel] = useState<'provincial' | 'district' | 'cluster'>('provincial');

  // Mock data
  const enrollmentData = [
    { month: 'Jan', enrolled: 120 },
    { month: 'Feb', enrolled: 180 },
    { month: 'Mar', enrolled: 240 },
    { month: 'Apr', enrolled: 310 },
    { month: 'May', enrolled: 420 },
    { month: 'Jun', enrolled: 580 },
  ];

  const sectorData = [
    { name: 'Manufacturing', value: 450, color: '#3b82f6' },
    { name: 'Retail', value: 680, color: '#10b981' },
    { name: 'Services', value: 370, color: '#f59e0b' },
  ];

  const districtData = [
    { district: 'Peshawar', smes: 520, active: 480 },
    { district: 'Swat', smes: 310, active: 290 },
    { district: 'Abbottabad', smes: 280, active: 250 },
    { district: 'D.I. Khan', smes: 180, active: 160 },
    { district: 'Mardan', smes: 210, active: 190 },
  ];

  const healthScoreDistribution = [
    { range: '0-20', count: 45 },
    { range: '21-40', count: 120 },
    { range: '41-60', count: 380 },
    { range: '61-80', count: 620 },
    { range: '81-100', count: 335 },
  ];

  const loanFunnel = [
    { stage: 'Applied', count: 1200 },
    { stage: 'Reviewed', count: 950 },
    { stage: 'Approved', count: 720 },
    { stage: 'Disbursed', count: 580 },
  ];

  const realtimeAlerts = [
    { type: 'success', message: '15 new SMEs registered today', time: '5 min ago' },
    { type: 'warning', message: 'API sync delay detected - FBR Integration', time: '12 min ago' },
    { type: 'alert', message: 'Duplicate application detected - CNIC 12345-67890-1', time: '18 min ago' },
    { type: 'info', message: 'Milestone achieved: 1,500 SMEs enrolled!', time: '1 hour ago' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Admin Analytics Dashboard</h1>
              <p className="text-sm text-gray-600 mt-1">KP-DEEP Provincial Monitoring</p>
            </div>
            
            {/* View Level Selector */}
            <Tabs value={viewLevel} onValueChange={(v) => setViewLevel(v as any)}>
              <TabsList>
                <TabsTrigger value="provincial">Provincial</TabsTrigger>
                <TabsTrigger value="district">District</TabsTrigger>
                <TabsTrigger value="cluster">Cluster</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl px-6 py-6 space-y-6">
        {/* Executive Summary Panel */}
        <div className="grid md:grid-cols-4 gap-4">
          <Card className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-2">Total SMEs Enrolled</p>
                <p className="text-3xl font-bold text-gray-900">1,500</p>
                <div className="mt-3">
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-600" style={{ width: '100%' }} />
                  </div>
                  <p className="text-xs text-green-600 mt-1">Target achieved! 🎉</p>
                </div>
              </div>
              <Users className="w-10 h-10 text-blue-600" />
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-2">Active Users</p>
                <p className="text-3xl font-bold text-gray-900">87%</p>
                <p className="text-sm text-green-600 mt-2">1,305 / 1,500</p>
              </div>
              <Activity className="w-10 h-10 text-green-600" />
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-2">Loans Facilitated</p>
                <p className="text-3xl font-bold text-gray-900">PKR 1.2B</p>
                <p className="text-sm text-blue-600 mt-2">580 disbursed</p>
              </div>
              <DollarSign className="w-10 h-10 text-purple-600" />
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-2">Tax Revenue Impact</p>
                <p className="text-3xl font-bold text-gray-900">PKR 85M</p>
                <p className="text-sm text-orange-600 mt-2">Est. increase</p>
              </div>
              <TrendingUp className="w-10 h-10 text-orange-600" />
            </div>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column - 2 spans */}
          <div className="lg:col-span-2 space-y-6">
            {/* Enrollment Trend */}
            <Card className="p-6">
              <h3 className="font-semibold text-lg text-gray-900 mb-4">SME Enrollment Trend</h3>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={enrollmentData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="enrolled" stroke="#3b82f6" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </Card>

            {/* Geospatial Heat Map */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-lg text-gray-900">District-wise Distribution</h3>
                <MapPin className="w-5 h-5 text-gray-500" />
              </div>
              <div className="space-y-3">
                {districtData.map((district, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-32 text-sm font-medium text-gray-700">{district.district}</div>
                    <div className="flex-1">
                      <div className="w-full h-8 bg-gray-200 rounded-lg overflow-hidden relative">
                        <div
                          className="h-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center px-3 text-white text-sm font-medium"
                          style={{ width: `${(district.smes / 520) * 100}%` }}
                        >
                          {district.smes} SMEs
                        </div>
                      </div>
                    </div>
                    <div className="text-sm text-gray-600">
                      {Math.round((district.active / district.smes) * 100)}% active
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Performance Metrics */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Digital Health Score Distribution */}
              <Card className="p-6">
                <h3 className="font-semibold text-lg text-gray-900 mb-4">Digital Health Score</h3>
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={healthScoreDistribution}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="range" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="count" fill="#3b82f6" />
                  </BarChart>
                </ResponsiveContainer>
              </Card>

              {/* Sector Distribution */}
              <Card className="p-6">
                <h3 className="font-semibold text-lg text-gray-900 mb-4">Sector Breakdown</h3>
                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie
                      data={sectorData}
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label
                    >
                      {sectorData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
                <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                  {sectorData.map((sector, index) => (
                    <div key={index}>
                      <div className="flex items-center justify-center gap-1">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: sector.color }} />
                        <span className="text-xs text-gray-600">{sector.name}</span>
                      </div>
                      <div className="text-sm font-semibold text-gray-900">{sector.value}</div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Loan Application Funnel */}
            <Card className="p-6">
              <h3 className="font-semibold text-lg text-gray-900 mb-4">Loan Application Funnel</h3>
              <div className="space-y-3">
                {loanFunnel.map((stage, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">{stage.stage}</span>
                      <span className="text-sm font-semibold text-gray-900">{stage.count}</span>
                    </div>
                    <div className="w-full h-6 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-end pr-2 text-white text-xs"
                        style={{ width: `${(stage.count / 1200) * 100}%` }}
                      >
                        {Math.round((stage.count / 1200) * 100)}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Right Column - Real-time Alerts */}
          <div className="space-y-6">
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <AlertTriangle className="w-5 h-5 text-orange-600" />
                <h3 className="font-semibold text-lg text-gray-900">Real-time Alerts</h3>
              </div>
              
              <div className="space-y-3">
                {realtimeAlerts.map((alert, index) => {
                  const getAlertStyle = () => {
                    switch (alert.type) {
                      case 'success': return 'bg-green-50 border-green-200';
                      case 'warning': return 'bg-yellow-50 border-yellow-200';
                      case 'alert': return 'bg-red-50 border-red-200';
                      default: return 'bg-blue-50 border-blue-200';
                    }
                  };

                  const getIcon = () => {
                    switch (alert.type) {
                      case 'success': return <CheckCircle2 className="w-4 h-4 text-green-600" />;
                      case 'warning': return <AlertTriangle className="w-4 h-4 text-yellow-600" />;
                      case 'alert': return <XCircle className="w-4 h-4 text-red-600" />;
                      default: return <Activity className="w-4 h-4 text-blue-600" />;
                    }
                  };

                  return (
                    <div key={index} className={`p-3 rounded-lg border ${getAlertStyle()}`}>
                      <div className="flex gap-2">
                        {getIcon()}
                        <div className="flex-1">
                          <p className="text-sm text-gray-900">{alert.message}</p>
                          <p className="text-xs text-gray-500 mt-1">{alert.time}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <Button variant="outline" className="w-full mt-4">
                View All Alerts
              </Button>
            </Card>

            {/* System Health Monitor */}
            <Card className="p-6">
              <h3 className="font-semibold text-lg text-gray-900 mb-4">System Health</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">API Uptime</span>
                  <span className="text-sm font-semibold text-green-600">99.8%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">Sync Status</span>
                  <span className="text-sm font-semibold text-green-600">Active</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">Pending Tickets</span>
                  <span className="text-sm font-semibold text-orange-600">12</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">Fraud Alerts</span>
                  <span className="text-sm font-semibold text-red-600">3</span>
                </div>
              </div>
            </Card>

            {/* Consultant Performance Leaderboard */}
            <Card className="p-6">
              <h3 className="font-semibold text-lg text-gray-900 mb-4">Top Consultants</h3>
              <div className="space-y-3">
                {[
                  { name: 'Ahmed Khan', smes: 45, rating: 4.9 },
                  { name: 'Fatima Ali', smes: 42, rating: 4.8 },
                  { name: 'Imran Shah', smes: 38, rating: 4.7 },
                  { name: 'Ayesha Bibi', smes: 35, rating: 4.9 },
                ].map((consultant, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold text-sm">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-sm text-gray-900">{consultant.name}</div>
                      <div className="text-xs text-gray-600">{consultant.smes} SMEs onboarded</div>
                    </div>
                    <div className="text-sm font-semibold text-gray-900">★ {consultant.rating}</div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
