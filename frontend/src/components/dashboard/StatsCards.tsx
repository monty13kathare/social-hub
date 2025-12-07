// components/dashboard/StatsCards.tsx
import React from 'react';
import { Users, FileText, Users2, TrendingUp, MessageSquare, Eye, ThumbsUp, Share2 } from 'lucide-react';

const statsData = [
  {
    title: 'Total Users',
    value: '45,231',
    change: '+12.5%',
    icon: Users,
    color: 'from-purple-500 to-pink-500',
    trend: 'up',
  },
  {
    title: 'Total Posts',
    value: '12,456',
    change: '+8.2%',
    icon: FileText,
    color: 'from-blue-500 to-cyan-500',
    trend: 'up',
  },
  {
    title: 'Active Communities',
    value: '342',
    change: '+5.3%',
    icon: Users2,
    color: 'from-green-500 to-emerald-500',
    trend: 'up',
  },
  {
    title: 'Engagement Rate',
    value: '68.2%',
    change: '+3.1%',
    icon: TrendingUp,
    color: 'from-orange-500 to-red-500',
    trend: 'up',
  },
];

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {statsData.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white mt-2">{stat.value}</p>
                <div className="flex items-center mt-2">
                  <span className={`text-sm font-medium ${
                    stat.trend === 'up' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                  }`}>
                    {stat.change}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">from last week</span>
                </div>
              </div>
              <div className={`p-3 rounded-lg bg-gradient-to-br ${stat.color}`}>
                <Icon className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}