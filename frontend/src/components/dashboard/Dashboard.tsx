// pages/Dashboard.tsx
import React from 'react';
import DashboardLayout from './DashboardLayout';
import StatsCards from './StatsCards';
import ActivityChart from './ActivityCart';
import UserGrowthChart from './charts/UserGrowthChart';
import TopUsersTable from './TopUsersTable';
import PlatformHealth from './PlatformHealth';
import RecentPosts from './RecentPosts';
import CommunityGrowth from './CommunityGrowth';


export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard Overview</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Monitor your platform's performance and activity
            </p>
          </div>
          <div className="mt-4 sm:mt-0">
            <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
              <span className="h-2 w-2 rounded-full bg-green-500"></span>
              <span>Updated 5 minutes ago</span>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <StatsCards />

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ActivityChart />
          <UserGrowthChart />
        </div>

        {/* Tables Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <TopUsersTable />
          </div>
          <div>
            <PlatformHealth />
          </div>
        </div>

        {/* Bottom Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <RecentPosts />
          <CommunityGrowth />
        </div>
      </div>
    </DashboardLayout>
  );
}