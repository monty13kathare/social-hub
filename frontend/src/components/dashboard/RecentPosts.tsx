// components/dashboard/RecentPosts.tsx
import React from 'react';
import { Clock, TrendingUp, Eye, ThumbsUp, MessageSquare, Share2, MoreVertical } from 'lucide-react';

interface RecentPost {
  id: number;
  title: string;
  author: string;
  type: 'text' | 'image' | 'video';
  time: string;
  likes: number;
  comments: number;
  shares: number;
  views: number;
  engagement: number;
  trending: boolean;
}

const recentPosts: RecentPost[] = [
  {
    id: 1,
    title: 'Exciting new features coming to SocialHub!',
    author: 'Alex Johnson',
    type: 'text',
    time: '2 hours ago',
    likes: 1245,
    comments: 342,
    shares: 189,
    views: 15432,
    engagement: 12.5,
    trending: true,
  },
  {
    id: 2,
    title: 'Sunset at the beach 🌅',
    author: 'Sarah Miller',
    type: 'image',
    time: '4 hours ago',
    likes: 3421,
    comments: 521,
    shares: 412,
    views: 23456,
    engagement: 18.7,
    trending: true,
  },
  {
    id: 3,
    title: 'How to build a React app in 2024',
    author: 'Mike Chen',
    type: 'video',
    time: '6 hours ago',
    likes: 892,
    comments: 234,
    shares: 98,
    views: 12345,
    engagement: 9.8,
    trending: false,
  },
  {
    id: 4,
    title: 'Community guidelines update',
    author: 'Admin',
    type: 'text',
    time: '1 day ago',
    likes: 456,
    comments: 123,
    shares: 45,
    views: 8765,
    engagement: 7.2,
    trending: false,
  },
];

const getTypeColor = (type: string) => {
  switch (type) {
    case 'text': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
    case 'image': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
    case 'video': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
    default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
  }
};

export default function RecentPosts() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Clock className="h-6 w-6 text-gray-600 dark:text-gray-400 mr-3" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Posts</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Latest activity from the platform</p>
            </div>
          </div>
          <button className="text-sm text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300">
            View All →
          </button>
        </div>
      </div>

      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        {recentPosts.map((post) => (
          <div key={post.id} className="p-6 hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <h4 className="text-sm font-medium text-gray-900 dark:text-white">{post.title}</h4>
                  {post.trending && (
                    <span className="px-2 py-1 text-xs bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full flex items-center">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      Trending
                    </span>
                  )}
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                  <span>by {post.author}</span>
                  <span className="flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {post.time}
                  </span>
                  <span className={`px-2 py-1 text-xs rounded-full ${getTypeColor(post.type)}`}>
                    {post.type.charAt(0).toUpperCase() + post.type.slice(1)}
                  </span>
                </div>
              </div>
              <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                <MoreVertical className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              </button>
            </div>

            {/* Engagement Stats */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mt-4">
              <div className="text-center p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                <div className="flex items-center justify-center">
                  <ThumbsUp className="h-4 w-4 text-gray-600 dark:text-gray-400 mr-2" />
                  <span className="text-lg font-bold text-gray-900 dark:text-white">{post.likes.toLocaleString()}</span>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Likes</p>
              </div>

              <div className="text-center p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                <div className="flex items-center justify-center">
                  <MessageSquare className="h-4 w-4 text-gray-600 dark:text-gray-400 mr-2" />
                  <span className="text-lg font-bold text-gray-900 dark:text-white">{post.comments.toLocaleString()}</span>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Comments</p>
              </div>

              <div className="text-center p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                <div className="flex items-center justify-center">
                  <Share2 className="h-4 w-4 text-gray-600 dark:text-gray-400 mr-2" />
                  <span className="text-lg font-bold text-gray-900 dark:text-white">{post.shares.toLocaleString()}</span>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Shares</p>
              </div>

              <div className="text-center p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                <div className="flex items-center justify-center">
                  <Eye className="h-4 w-4 text-gray-600 dark:text-gray-400 mr-2" />
                  <span className="text-lg font-bold text-gray-900 dark:text-white">
                    {(post.views / 1000).toFixed(1)}K
                  </span>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Views</p>
              </div>

              <div className="text-center p-3 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg">
                <div className="text-lg font-bold text-gray-900 dark:text-white">{post.engagement}%</div>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Engagement</p>
              </div>
            </div>

            {/* Engagement Bar */}
            <div className="mt-4">
              <div className="flex items-center justify-between text-xs text-gray-600 dark:text-gray-400 mb-1">
                <span>Post Performance</span>
                <span>{post.engagement}% engagement rate</span>
              </div>
              <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div
                  className={`h-full ${
                    post.engagement > 15 ? 'bg-gradient-to-r from-green-500 to-emerald-500' :
                    post.engagement > 10 ? 'bg-gradient-to-r from-yellow-500 to-orange-500' :
                    'bg-gradient-to-r from-red-500 to-pink-500'
                  }`}
                  style={{ width: `${Math.min(post.engagement, 100)}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Summary Footer */}
      <div className="p-4 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Showing {recentPosts.length} of 12,456 recent posts
          </div>
          <div className="flex items-center space-x-2">
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Avg. Engagement: <span className="font-bold text-gray-900 dark:text-white">
                {Math.round(recentPosts.reduce((sum, post) => sum + post.engagement, 0) / recentPosts.length)}%
              </span>
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Trending: <span className="font-bold text-gray-900 dark:text-white">
                {recentPosts.filter(p => p.trending).length}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}