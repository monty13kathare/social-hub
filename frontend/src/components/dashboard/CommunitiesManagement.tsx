// pages/dashboard/CommunitiesManagement.tsx
import React, { useState } from 'react';
import DashboardLayout from '../../components/dashboard/DashboardLayout';
import { Search, Filter, Users, Lock, Globe, TrendingUp, MoreVertical, Plus } from 'lucide-react';

interface Community {
  id: number;
  name: string;
  description: string;
  type: 'public' | 'private';
  members: number;
  posts: number;
  growth: number;
  status: 'active' | 'restricted' | 'pending';
  created: string;
  icon: string;
}

export default function CommunitiesManagement() {
  const [searchQuery, setSearchQuery] = useState('');
  const [communityType, setCommunityType] = useState('all');
  const [sortBy, setSortBy] = useState('members');

  const communities: Community[] = [
    {
      id: 1,
      name: 'React Developers',
      description: 'Discuss React.js and related technologies',
      type: 'public',
      members: 5234,
      posts: 12456,
      growth: 12.5,
      status: 'active',
      created: '2023-01-15',
      icon: '⚛️',
    },
    {
      id: 2,
      name: 'Web3 Enthusiasts',
      description: 'Blockchain, Crypto, and Web3 discussions',
      type: 'private',
      members: 3842,
      posts: 8923,
      growth: 25.3,
      status: 'active',
      created: '2023-02-20',
      icon: '🔗',
    },
    // Add more communities...
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'restricted': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'pending': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getTypeColor = (type: string) => {
    return type === 'public' 
      ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
      : 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Communities Management</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Manage and monitor all communities on the platform
            </p>
          </div>
          <button className="mt-4 sm:mt-0 flex items-center space-x-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors">
            <Plus className="h-5 w-5" />
            <span>Create Community</span>
          </button>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">Total Communities</p>
                <p className="text-2xl font-bold mt-2">342</p>
              </div>
              <Users className="h-8 w-8 opacity-80" />
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">Active Members</p>
                <p className="text-2xl font-bold mt-2">45.2K</p>
              </div>
              <TrendingUp className="h-8 w-8 opacity-80" />
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">Public Communities</p>
                <p className="text-2xl font-bold mt-2">278</p>
              </div>
              <Globe className="h-8 w-8 opacity-80" />
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-xl p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">Avg. Growth</p>
                <p className="text-2xl font-bold mt-2">+8.5%</p>
              </div>
              <TrendingUp className="h-8 w-8 opacity-80" />
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search communities..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            <div className="flex items-center space-x-4">
              <select
                value={communityType}
                onChange={(e) => setCommunityType(e.target.value)}
                className="px-3 py-2 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-300 dark:border-gray-600"
              >
                <option value="all">All Types</option>
                <option value="public">Public</option>
                <option value="private">Private</option>
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-300 dark:border-gray-600"
              >
                <option value="members">Most Members</option>
                <option value="growth">Fastest Growing</option>
                <option value="recent">Recently Created</option>
              </select>

              <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
                <Filter className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              </button>
            </div>
          </div>
        </div>

        {/* Communities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {communities.map((community) => (
            <div
              key={community.id}
              className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-xl">
                    {community.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">{community.name}</h3>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getTypeColor(community.type)}`}>
                        {community.type === 'public' ? 'Public' : 'Private'}
                      </span>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(community.status)}`}>
                        {community.status.charAt(0).toUpperCase() + community.status.slice(1)}
                      </span>
                    </div>
                  </div>
                </div>
                <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                  <MoreVertical className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                </button>
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                {community.description}
              </p>

              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="text-center p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{community.members.toLocaleString()}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Members</p>
                </div>
                <div className="text-center p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{community.posts.toLocaleString()}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Posts</p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center text-green-600 dark:text-green-400">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  <span className="text-sm font-medium">+{community.growth}%</span>
                </div>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 text-sm bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors">
                    Manage
                  </button>
                  <button className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg transition-colors">
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Growth Chart Section */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Community Growth Trends</h3>
          <div className="h-64 flex items-end space-x-2">
            {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'].map((month, index) => (
              <div key={month} className="flex-1 flex flex-col items-center">
                <div className="w-full flex items-end space-x-1 h-48">
                  <div
                    className="flex-1 bg-gradient-to-t from-purple-500 to-pink-500 rounded-t"
                    style={{ height: `${30 + Math.random() * 70}%` }}
                  />
                  <div
                    className="flex-1 bg-gradient-to-t from-blue-500 to-cyan-500 rounded-t"
                    style={{ height: `${20 + Math.random() * 60}%` }}
                  />
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400 mt-2">{month}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center space-x-6 mt-6">
            <div className="flex items-center">
              <div className="h-3 w-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mr-2" />
              <span className="text-sm text-gray-600 dark:text-gray-400">New Communities</span>
            </div>
            <div className="flex items-center">
              <div className="h-3 w-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 mr-2" />
              <span className="text-sm text-gray-600 dark:text-gray-400">Member Growth</span>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}