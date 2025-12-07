// pages/dashboard/PostsAnalytics.tsx
import React, { useState } from 'react';
import DashboardLayout from '../../components/dashboard/DashboardLayout';
import { TrendingUp, TrendingDown, Eye, ThumbsUp, MessageSquare, Share2, Filter, Calendar, FileText } from 'lucide-react';

interface Post {
  id: number;
  title: string;
  author: string;
  type: 'text' | 'image' | 'video';
  likes: number;
  comments: number;
  shares: number;
  views: number;
  engagement: number;
  status: 'published' | 'draft' | 'flagged';
  date: string;
}

export default function PostsAnalytics() {
  const [timeRange, setTimeRange] = useState('7d');
  const [postType, setPostType] = useState('all');

  const posts: Post[] = [
    {
      id: 1,
      title: 'Exciting new features coming soon!',
      author: 'Alex Johnson',
      type: 'text',
      likes: 1245,
      comments: 342,
      shares: 189,
      views: 15432,
      engagement: 12.5,
      status: 'published',
      date: '2024-01-15',
    },
    {
      id: 2,
      title: 'Sunset at the beach 🌅',
      author: 'Sarah Miller',
      type: 'image',
      likes: 3421,
      comments: 521,
      shares: 412,
      views: 23456,
      engagement: 18.7,
      status: 'published',
      date: '2024-01-14',
    },
    // Add more posts...
  ];

  const stats = {
    totalPosts: 12456,
    totalLikes: 1234567,
    totalComments: 234567,
    avgEngagement: 15.8,
    topPerformingPost: 'Sunset at the beach 🌅',
    engagementChange: +12.5,
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Posts Analytics</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Track performance and engagement of all posts
            </p>
          </div>
          <div className="flex items-center space-x-2 mt-4 sm:mt-0">
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="px-3 py-2 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-300 dark:border-gray-600"
            >
              <option value="24h">Last 24 hours</option>
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
              <option value="90d">Last 90 days</option>
            </select>
            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
              <Calendar className="h-5 w-5 text-gray-600 dark:text-gray-300" />
            </button>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Total Posts</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white mt-2">{stats.totalPosts.toLocaleString()}</p>
              </div>
              <div className="p-3 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500">
                <FileText className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Total Likes</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white mt-2">{stats.totalLikes.toLocaleString()}</p>
              </div>
              <div className="p-3 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500">
                <ThumbsUp className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Engagement Rate</p>
                <div className="flex items-center mt-2">
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{stats.avgEngagement}%</p>
                  <div className={`ml-3 flex items-center ${stats.engagementChange >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {stats.engagementChange >= 0 ? (
                      <TrendingUp className="h-4 w-4 mr-1" />
                    ) : (
                      <TrendingDown className="h-4 w-4 mr-1" />
                    )}
                    <span className="text-sm font-medium">{Math.abs(stats.engagementChange)}%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Top Post</p>
                <p className="text-sm font-medium text-gray-900 dark:text-white mt-2 truncate">{stats.topPerformingPost}</p>
              </div>
              <div className="p-3 rounded-lg bg-gradient-to-br from-orange-500 to-red-500">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Posts Table */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Posts</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-900">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400">Post</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400">Likes</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400">Comments</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400">Shares</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400">Views</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400">Engagement</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {posts.map((post) => (
                  <tr key={post.id} className="hover:bg-gray-50 dark:hover:bg-gray-900/50">
                    <td className="px-6 py-4">
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">{post.title}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">by {post.author}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <ThumbsUp className="h-4 w-4 text-gray-400 mr-2" />
                        <span className="text-sm text-gray-900 dark:text-white">{post.likes.toLocaleString()}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <MessageSquare className="h-4 w-4 text-gray-400 mr-2" />
                        <span className="text-sm text-gray-900 dark:text-white">{post.comments.toLocaleString()}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <Share2 className="h-4 w-4 text-gray-400 mr-2" />
                        <span className="text-sm text-gray-900 dark:text-white">{post.shares.toLocaleString()}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <Eye className="h-4 w-4 text-gray-400 mr-2" />
                        <span className="text-sm text-gray-900 dark:text-white">{post.views.toLocaleString()}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className={`w-20 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden`}>
                          <div
                            className={`h-full ${
                              post.engagement > 20 ? 'bg-green-500' :
                              post.engagement > 10 ? 'bg-yellow-500' :
                              'bg-red-500'
                            }`}
                            style={{ width: `${Math.min(post.engagement, 100)}%` }}
                          />
                        </div>
                        <span className="ml-2 text-sm font-medium text-gray-900 dark:text-white">{post.engagement}%</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        post.status === 'published' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                        post.status === 'flagged' ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' :
                        'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
                      }`}>
                        {post.status.charAt(0).toUpperCase() + post.status.slice(1)}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}