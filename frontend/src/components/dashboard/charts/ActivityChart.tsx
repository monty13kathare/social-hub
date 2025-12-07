// components/dashboard/charts/ActivityChart.tsx
import React from 'react';
import { TrendingUp, Calendar, Download } from 'lucide-react';

const activityData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'Posts',
      data: [120, 190, 300, 500, 200, 300, 450],
      color: 'purple',
    },
    {
      label: 'Comments',
      data: [200, 300, 400, 300, 200, 400, 300],
      color: 'blue',
    },
    {
      label: 'Likes',
      data: [800, 1200, 1500, 1800, 1000, 1600, 2000],
      color: 'green',
    },
  ],
};

export default function ActivityChart() {
  const maxValue = Math.max(
    ...activityData.datasets.flatMap(dataset => dataset.data)
  );

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Platform Activity</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Last 7 days performance</p>
        </div>
        <div className="flex items-center space-x-2 mt-4 sm:mt-0">
          <div className="flex items-center text-green-600 dark:text-green-400">
            <TrendingUp className="h-5 w-5 mr-1" />
            <span className="text-sm font-medium">+12.5% this week</span>
          </div>
          <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
            <Calendar className="h-5 w-5 text-gray-600 dark:text-gray-300" />
          </button>
          <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
            <Download className="h-5 w-5 text-gray-600 dark:text-gray-300" />
          </button>
        </div>
      </div>

      <div className="space-y-6">
        {/* Chart Legend */}
        <div className="flex flex-wrap gap-4">
          {activityData.datasets.map((dataset, index) => (
            <div key={index} className="flex items-center">
              <div
                className={`h-3 w-3 rounded-full mr-2 ${
                  dataset.color === 'purple' ? 'bg-purple-500' :
                  dataset.color === 'blue' ? 'bg-blue-500' :
                  'bg-green-500'
                }`}
              />
              <span className="text-sm text-gray-600 dark:text-gray-400">{dataset.label}</span>
            </div>
          ))}
        </div>

        {/* Chart Container */}
        <div className="relative">
          {/* Y-axis Labels */}
          <div className="absolute left-0 top-0 bottom-0 w-10 flex flex-col justify-between text-xs text-gray-500 dark:text-gray-400">
            {[0, 500, 1000, 1500, 2000].map((value) => (
              <div key={value} className="text-right pr-2">
                {value.toLocaleString()}
              </div>
            ))}
          </div>

          {/* Chart Bars */}
          <div className="ml-10 h-64 flex items-end space-x-2 pt-6">
            {activityData.labels.map((label, dayIndex) => (
              <div key={label} className="flex-1 flex flex-col items-center">
                <div className="flex items-end space-x-1 w-full h-48">
                  {activityData.datasets.map((dataset, datasetIndex) => {
                    const height = (dataset.data[dayIndex] / maxValue) * 100;
                    return (
                      <div
                        key={datasetIndex}
                        className={`flex-1 rounded-t-lg transition-all hover:opacity-90 ${
                          dataset.color === 'purple' ? 'bg-purple-500/80 hover:bg-purple-500' :
                          dataset.color === 'blue' ? 'bg-blue-500/80 hover:bg-blue-500' :
                          'bg-green-500/80 hover:bg-green-500'
                        }`}
                        style={{ height: `${height}%` }}
                        title={`${dataset.label}: ${dataset.data[dayIndex].toLocaleString()}`}
                      />
                    );
                  })}
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400 mt-2">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
          {activityData.datasets.map((dataset, index) => {
            const total = dataset.data.reduce((sum, val) => sum + val, 0);
            const avg = Math.round(total / dataset.data.length);
            return (
              <div key={index} className="text-center p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-400">{dataset.label} Average</p>
                <p className="text-xl font-bold text-gray-900 dark:text-white mt-1">{avg.toLocaleString()}</p>
                <div className={`text-xs font-medium mt-1 ${
                  dataset.color === 'purple' ? 'text-purple-600 dark:text-purple-400' :
                  dataset.color === 'blue' ? 'text-blue-600 dark:text-blue-400' :
                  'text-green-600 dark:text-green-400'
                }`}>
                  +{(Math.random() * 15 + 5).toFixed(1)}% from last week
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}