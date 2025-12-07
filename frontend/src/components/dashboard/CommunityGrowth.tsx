// components/dashboard/CommunityGrowth.tsx
import React from 'react';
import { TrendingUp, Users2, Globe, Lock, Plus, ChevronRight } from 'lucide-react';

interface Community {
  id: number;
  name: string;
  icon: string;
  type: 'public' | 'private';
  members: number;
  growth: number;
  newMembers: number;
  activity: number;
}

const communities: Community[] = [
  {
    id: 1,
    name: 'React Developers',
    icon: '⚛️',
    type: 'public',
    members: 5234,
    growth: 12.5,
    newMembers: 342,
    activity: 85,
  },
  {
    id: 2,
    name: 'Web3 Enthusiasts',
    icon: '🔗',
    type: 'private',
    members: 3842,
    growth: 25.3,
    newMembers: 256,
    activity: 92,
  },
  {
    id: 3,
    name: 'UI/UX Designers',
    icon: '🎨',
    type: 'public',
    members: 7123,
    growth: 8.7,
    newMembers: 189,
    activity: 78,
  },
  {
    id: 4,
    name: 'Startup Founders',
    icon: '🚀',
    type: 'private',
    members: 2415,
    growth: 18.2,
    newMembers: 123,
    activity: 65,
  },
];

export default function CommunityGrowth() {
  const totalMembers = communities.reduce((sum, community) => sum + community.members, 0);
  const avgGrowth = communities.reduce((sum, community) => sum + community.growth, 0) / communities.length;
  const totalNewMembers = communities.reduce((sum, community) => sum + community.newMembers, 0);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Users2 className="h-6 w-6 text-purple-600 dark:text-purple-400 mr-3" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Community Growth</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Top communities by growth</p>
            </div>
          </div>
          <button className="flex items-center space-x-1 text-sm text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300">
            <span>View All</span>
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 border-b border-gray-200 dark:border-gray-700">
        <div className="text-center p-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg">
          <p className="text-2xl font-bold text-gray-900 dark:text-white">{totalMembers.toLocaleString()}</p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Total Members</p>
        </div>
        <div className="text-center p-4 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg">
          <p className="text-2xl font-bold text-gray-900 dark:text-white">+{avgGrowth.toFixed(1)}%</p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Avg. Growth</p>
        </div>
        <div className="text-center p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg">
          <p className="text-2xl font-bold text-gray-900 dark:text-white">+{totalNewMembers.toLocaleString()}</p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">New Members (30d)</p>
        </div>
      </div>

      {/* Communities List */}
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        {communities.map((community) => (
          <div key={community.id} className="p-6 hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors">
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-xl">
                  {community.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white">{community.name}</h4>
                    {community.type === 'public' ? (
                      <Globe className="h-3 w-3 text-blue-500" />
                    ) : (
                      <Lock className="h-3 w-3 text-purple-500" />
                    )}
                    <span className={`px-2 py-0.5 text-xs rounded-full ${
                      community.type === 'public' 
                        ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' 
                        : 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
                    }`}>
                      {community.type}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-3">
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Members</p>
                      <p className="text-lg font-bold text-gray-900 dark:text-white">{community.members.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Growth</p>
                      <div className="flex items-center">
                        <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                        <p className="text-lg font-bold text-green-600 dark:text-green-400">+{community.growth}%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-xs text-gray-500 dark:text-gray-400">Activity</div>
                <div className="flex items-center justify-end">
                  <div className="w-24 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${
                        community.activity > 80 ? 'bg-green-500' :
                        community.activity > 60 ? 'bg-yellow-500' :
                        'bg-red-500'
                      }`}
                      style={{ width: `${community.activity}%` }}
                    />
                  </div>
                  <span className="ml-2 text-sm font-medium text-gray-900 dark:text-white">{community.activity}%</span>
                </div>
              </div>
            </div>

            {/* Members Progress */}
            <div className="mt-4">
              <div className="flex items-center justify-between text-xs text-gray-600 dark:text-gray-400 mb-1">
                <span>New members this month: {community.newMembers.toLocaleString()}</span>
                <span>+{community.growth}% growth</span>
              </div>
              <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                  style={{ width: `${(community.newMembers / 500) * 100}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="p-6 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
          <div className="text-sm text-gray-600 dark:text-gray-400">
            {communities.length} communities • {communities.filter(c => c.type === 'public').length} public • {communities.filter(c => c.type === 'private').length} private
          </div>
          <div className="flex items-center space-x-2">
            <button className="flex items-center space-x-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors">
              <Plus className="h-4 w-4" />
              <span>Add Community</span>
            </button>
            <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-300 rounded-lg transition-colors">
              Manage All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}