// components/dashboard/TopUsersTable.tsx
import React from 'react';
import { TrendingUp, TrendingDown, Award, Users, MessageSquare, ThumbsUp, MoreVertical } from 'lucide-react';

interface TopUser {
  id: number;
  name: string;
  username: string;
  avatar: string;
  posts: number;
  likes: number;
  comments: number;
  engagement: number;
  rank: number;
  change: number;
}

const topUsers: TopUser[] = [
  {
    id: 1,
    name: 'Alex Johnson',
    username: '@alexj',
    avatar: 'https://i.pravatar.cc/150?img=1',
    posts: 142,
    likes: 12450,
    comments: 3420,
    engagement: 92.5,
    rank: 1,
    change: 2,
  },
  {
    id: 2,
    name: 'Sarah Miller',
    username: '@sarahm',
    avatar: 'https://i.pravatar.cc/150?img=2',
    posts: 89,
    likes: 8920,
    comments: 2345,
    engagement: 88.3,
    rank: 2,
    change: 1,
  },
  {
    id: 3,
    name: 'Mike Chen',
    username: '@mikec',
    avatar: 'https://i.pravatar.cc/150?img=3',
    posts: 156,
    likes: 10560,
    comments: 4123,
    engagement: 85.7,
    rank: 3,
    change: -1,
  },
  {
    id: 4,
    name: 'Emma Davis',
    username: '@emmad',
    avatar: 'https://i.pravatar.cc/150?img=4',
    posts: 67,
    likes: 7560,
    comments: 1987,
    engagement: 82.4,
    rank: 4,
    change: 3,
  },
  {
    id: 5,
    name: 'James Wilson',
    username: '@jamesw',
    avatar: 'https://i.pravatar.cc/150?img=5',
    posts: 98,
    likes: 8340,
    comments: 2567,
    engagement: 79.8,
    rank: 5,
    change: 0,
  },
];

export default function TopUsersTable() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Award className="h-6 w-6 text-yellow-500 mr-3" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Top Users</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Most engaged users this month</p>
            </div>
          </div>
          <button className="text-sm text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300">
            View All →
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 dark:bg-gray-900">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Rank
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                User
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Posts
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Engagement
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Trend
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {topUsers.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${
                      user.rank === 1 ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                      user.rank === 2 ? 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200' :
                      user.rank === 3 ? 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200' :
                      'bg-gray-50 text-gray-600 dark:bg-gray-800 dark:text-gray-400'
                    }`}>
                      #{user.rank}
                    </span>
                    <span className={`ml-3 text-sm font-medium ${
                      user.change > 0 ? 'text-green-600 dark:text-green-400' :
                      user.change < 0 ? 'text-red-600 dark:text-red-400' :
                      'text-gray-500 dark:text-gray-400'
                    }`}>
                      {user.change > 0 ? '+' : ''}{user.change}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="h-10 w-10 rounded-full border-2 border-purple-500"
                    />
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900 dark:text-white">
                        {user.name}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {user.username}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900 dark:text-white">{user.posts}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 flex items-center mt-1">
                    <ThumbsUp className="h-3 w-3 mr-1" />
                    {user.likes.toLocaleString()} likes
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 flex items-center">
                    <MessageSquare className="h-3 w-3 mr-1" />
                    {user.comments.toLocaleString()} comments
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="w-32 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-green-500 to-emerald-500"
                        style={{ width: `${user.engagement}%` }}
                      />
                    </div>
                    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-white">
                      {user.engagement}%
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    {user.change > 0 ? (
                      <TrendingUp className="h-5 w-5 text-green-500 mr-2" />
                    ) : user.change < 0 ? (
                      <TrendingDown className="h-5 w-5 text-red-500 mr-2" />
                    ) : (
                      <div className="h-5 w-5 mr-2" />
                    )}
                    <span className={`text-sm font-medium ${
                      user.change > 0 ? 'text-green-600 dark:text-green-400' :
                      user.change < 0 ? 'text-red-600 dark:text-red-400' :
                      'text-gray-500 dark:text-gray-400'
                    }`}>
                      {user.change > 0 ? `+${user.change}` : user.change} ranks
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <div className="flex items-center space-x-2">
                    <button className="p-1 hover:bg-purple-100 dark:hover:bg-purple-900/30 rounded">
                      <Users className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                    </button>
                    <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                      <MessageSquare className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                    </button>
                    <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                      <MoreVertical className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="p-4 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">Avg. Posts/User</p>
            <p className="text-xl font-bold text-gray-900 dark:text-white mt-1">
              {Math.round(topUsers.reduce((sum, user) => sum + user.posts, 0) / topUsers.length)}
            </p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">Total Engagement</p>
            <p className="text-xl font-bold text-gray-900 dark:text-white mt-1">
              {Math.round(topUsers.reduce((sum, user) => sum + user.engagement, 0) / topUsers.length)}%
            </p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">Total Likes</p>
            <p className="text-xl font-bold text-gray-900 dark:text-white mt-1">
              {(topUsers.reduce((sum, user) => sum + user.likes, 0) / 1000).toFixed(1)}K
            </p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">Active Ranking</p>
            <p className="text-xl font-bold text-gray-900 dark:text-white mt-1">
              {topUsers.filter(u => u.change > 0).length}/{topUsers.length}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}