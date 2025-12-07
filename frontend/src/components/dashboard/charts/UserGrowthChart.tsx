// components/dashboard/charts/UserGrowthChart.tsx
import React, { useState } from 'react';
import { TrendingUp, Users, Target, Download, Calendar } from 'lucide-react';

const growthData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  newUsers: [1200, 1900, 1700, 2500, 2200, 3000, 3500, 3200, 3800, 4200, 4500, 5000],
  activeUsers: [8000, 8500, 9000, 9500, 10000, 11000, 12000, 12500, 13000, 13500, 14000, 15000],
};

export default function UserGrowthChart() {
  const [timeRange, setTimeRange] = useState('year');

  const maxUsers = Math.max(...growthData.activeUsers);
  const totalGrowth = ((growthData.activeUsers[growthData.activeUsers.length - 1] - growthData.activeUsers[0]) / growthData.activeUsers[0]) * 100;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">User Growth</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Monthly user acquisition & retention</p>
        </div>
        <div className="flex items-center space-x-2 mt-4 sm:mt-0">
          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              <div className="h-3 w-3 rounded-full bg-purple-500 mr-2" />
              <span className="text-sm text-gray-600 dark:text-gray-400">New Users</span>
            </div>
            <div className="flex items-center">
              <div className="h-3 w-3 rounded-full bg-blue-500 mr-2" />
              <span className="text-sm text-gray-600 dark:text-gray-400">Active Users</span>
            </div>
          </div>
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="px-3 py-2 text-sm bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-300 dark:border-gray-600"
          >
            <option value="quarter">Last Quarter</option>
            <option value="year">Last Year</option>
            <option value="all">All Time</option>
          </select>
        </div>
      </div>

      <div className="space-y-6">
        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Total Users</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {growthData.activeUsers[growthData.activeUsers.length - 1].toLocaleString()}
                </p>
              </div>
              <Users className="h-8 w-8 text-purple-600 dark:text-purple-400" />
            </div>
            <div className="flex items-center text-green-600 dark:text-green-400 mt-2">
              <TrendingUp className="h-4 w-4 mr-1" />
              <span className="text-sm font-medium">+{totalGrowth.toFixed(1)}% this year</span>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">New Users (Last 30d)</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {growthData.newUsers.slice(-1)[0].toLocaleString()}
                </p>
              </div>
              <Target className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="flex items-center text-green-600 dark:text-green-400 mt-2">
              <TrendingUp className="h-4 w-4 mr-1" />
              <span className="text-sm font-medium">+{(Math.random() * 20 + 10).toFixed(1)}% from last month</span>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Retention Rate</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">78.5%</p>
              </div>
              <TrendingUp className="h-8 w-8 text-green-600 dark:text-green-400" />
            </div>
            <div className="flex items-center text-green-600 dark:text-green-400 mt-2">
              <TrendingUp className="h-4 w-4 mr-1" />
              <span className="text-sm font-medium">+2.3% from last month</span>
            </div>
          </div>
        </div>

        {/* Chart */}
        <div className="relative">
          {/* Y-axis Labels */}
          <div className="absolute left-0 top-0 bottom-0 w-12 flex flex-col justify-between text-xs text-gray-500 dark:text-gray-400">
            {[0, 5000, 10000, 15000].map((value) => (
              <div key={value} className="text-right pr-2">
                {value.toLocaleString()}
              </div>
            ))}
          </div>

          {/* Chart Area */}
          <div className="ml-12">
            {/* Active Users Line */}
            <div className="relative h-48">
              {growthData.activeUsers.map((value, index) => {
                const left = `${(index / (growthData.activeUsers.length - 1)) * 100}%`;
                const height = `${(value / maxUsers) * 100}%`;
                return (
                  <div
                    key={`active-${index}`}
                    className="absolute bottom-0 w-1.5"
                    style={{ left, height }}
                  >
                    <div className="w-1.5 h-full bg-gradient-to-t from-blue-500 to-blue-400 rounded-t" />
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-xs text-gray-500 dark:text-gray-400">
                      {growthData.labels[index]}
                    </div>
                  </div>
                );
              })}
              
              {/* New Users Bars */}
              <div className="absolute bottom-0 left-0 right-0 h-32 flex items-end space-x-1 px-1">
                {growthData.newUsers.map((value, index) => {
                  const height = `${(value / Math.max(...growthData.newUsers)) * 100}%`;
                  return (
                    <div
                      key={`new-${index}`}
                      className="flex-1"
                      title={`New: ${value.toLocaleString()}`}
                    >
                      <div
                        className="w-full bg-gradient-to-t from-purple-500 to-pink-400 rounded-t hover:opacity-90 transition-opacity"
                        style={{ height }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Monthly Breakdown */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="text-left py-2 text-gray-600 dark:text-gray-400">Month</th>
                <th className="text-right py-2 text-gray-600 dark:text-gray-400">New Users</th>
                <th className="text-right py-2 text-gray-600 dark:text-gray-400">Growth</th>
                <th className="text-right py-2 text-gray-600 dark:text-gray-400">Active Users</th>
              </tr>
            </thead>
            <tbody>
              {growthData.labels.map((month, index) => {
                const growth = index > 0 
                  ? ((growthData.activeUsers[index] - growthData.activeUsers[index - 1]) / growthData.activeUsers[index - 1]) * 100
                  : 0;
                return (
                  <tr key={month} className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900/50">
                    <td className="py-2 text-gray-700 dark:text-gray-300">{month}</td>
                    <td className="py-2 text-right text-gray-900 dark:text-white">{growthData.newUsers[index].toLocaleString()}</td>
                    <td className="py-2 text-right">
                      <span className={`font-medium ${growth >= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                        {index > 0 ? `${growth >= 0 ? '+' : ''}${growth.toFixed(1)}%` : '—'}
                      </span>
                    </td>
                    <td className="py-2 text-right text-gray-900 dark:text-white">{growthData.activeUsers[index].toLocaleString()}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}