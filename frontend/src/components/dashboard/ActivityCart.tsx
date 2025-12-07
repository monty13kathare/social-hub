// components/dashboard/charts/ActivityChart.tsx
import React from 'react';
import { TrendingUp } from 'lucide-react';

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
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Platform Activity</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Last 7 days performance</p>
        </div>
        <div className="flex items-center text-green-600 dark:text-green-400">
          <TrendingUp className="h-5 w-5 mr-1" />
          <span className="text-sm font-medium">+12.5%</span>
        </div>
      </div>

      <div className="space-y-4">
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

        {/* Simple Bar Chart Representation */}
        <div className="h-64 flex items-end space-x-2 pt-4">
          {activityData.labels.map((label, dayIndex) => (
            <div key={label} className="flex-1 flex flex-col items-center">
              <div className="flex items-end space-x-1 w-full h-48">
                {activityData.datasets.map((dataset, datasetIndex) => {
                  const maxValue = Math.max(...dataset.data);
                  const height = (dataset.data[dayIndex] / maxValue) * 100;
                  return (
                    <div
                      key={datasetIndex}
                      className={`flex-1 rounded-t ${
                        dataset.color === 'purple' ? 'bg-purple-500/80' :
                        dataset.color === 'blue' ? 'bg-blue-500/80' :
                        'bg-green-500/80'
                      }`}
                      style={{ height: `${height}%` }}
                    />
                  );
                })}
              </div>
              <span className="text-xs text-gray-500 dark:text-gray-400 mt-2">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}