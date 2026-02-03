import { useState } from 'react';
import { Sidebar } from '@/app/components/sme-dashboard/sidebar';
import { WelcomeCard } from '@/app/components/sme-dashboard/welcome-card';
import { ProgressTracker } from '@/app/components/sme-dashboard/progress-tracker';
import { QuickStats } from '@/app/components/sme-dashboard/quick-stats';
import { ActionCards } from '@/app/components/sme-dashboard/action-cards';
import { NotificationsPanel } from '@/app/components/sme-dashboard/notifications-panel';
import { MilestonesPanel } from '@/app/components/sme-dashboard/milestones-panel';
import { ActivityTimeline } from '@/app/components/sme-dashboard/activity-timeline';

export function SmeDashboard() {
  const [activeItem, setActiveItem] = useState('home');

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Left Sidebar */}
      <Sidebar activeItem={activeItem} onItemClick={setActiveItem} />
      
      {/* Main Content Area */}
      <main className="flex-1 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Main Content - 3 columns */}
            <div className="lg:col-span-3 space-y-6">
              {/* Welcome Card */}
              <WelcomeCard
                smeName="Ahmed Khan"
                businessType="Textile Manufacturing"
                location="Peshawar, KP"
              />
              
              {/* Progress Tracker */}
              <ProgressTracker currentStep={3} />
              
              {/* Quick Stats */}
              <QuickStats
                digitalHealthScore={72}
                invoicesThisMonth={45}
                pendingReceivables={125000}
              />
              
              {/* Action Cards */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Action Required
                </h2>
                <h2 className="text-xl font-semibold text-gray-900 mb-4" dir="rtl" lang="ur">
                  ایکشن درکار ہے
                </h2>
                <ActionCards />
              </div>
              
              {/* Activity Timeline */}
              <ActivityTimeline />
            </div>
            
            {/* Right Sidebar - 1 column */}
            <div className="lg:col-span-1 space-y-6">
              <NotificationsPanel />
              <MilestonesPanel />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
