import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Post from "../components/card/Post";
import { toggleLike } from "../api/userPost";

interface Post {
  id: string;
  user: {
    name: string;
    username: string;
    avatar: string;
    verified: boolean;
  };
  content: string;
  image?: string;
  timestamp: string;
  likes: number;
  comments: number;
  shares: number;
  isLiked: boolean;
  isBookmarked: boolean;
}

export default function DetailPage() {
  const { postId } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState<Post | null>(null);
  const [comment, setComment] = useState("");
  const { state } = useLocation();

  const postDetail = state;

  useEffect(() => {
    setPost(postDetail);
  }, [postId]);

  const handleLike = async (postId: string) => {
    try {
      await toggleLike(postId);
    } catch (err) {
      console.error("Error liking post:", err);
    }
  };
  const handleComment = () => {
    if (post) {
      setPost({
        ...post,
        likes: post.isLiked ? post.likes - 1 : post.likes + 1,
        isLiked: !post.isLiked,
      });
    }
  };
  const handleDelete = () => {
    if (post) {
      setPost({
        ...post,
        likes: post.isLiked ? post.likes - 1 : post.likes + 1,
        isLiked: !post.isLiked,
      });
    }
  };

  const handleUpdate = () => {
    if (post) {
      setPost({
        ...post,
        isBookmarked: !post.isBookmarked,
      });
    }
  };

  if (!postDetail) {
    return (
      <div className="flex items-center justify-center min-h-96">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center space-x-2 text-slate-400 hover:text-white mb-6 transition-colors"
      >
        <span>←</span>
        <span>Back</span>
      </button>

      {/* Main Post */}
      <Post
        key={postDetail._id}
        post={postDetail}
        onUpdate={handleUpdate}
        onDelete={handleDelete}
        onLike={handleLike}
        onComment={handleComment}
      />

      {/* Comments Section */}
      <div className="mt-6 bg-slate-800/50 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/20">
        <h3 className="text-white font-bold text-lg mb-4">
          Comments ({postDetail.comments})
        </h3>

        {/* Add Comment */}
        <div className="flex space-x-4 mb-6">
          <div className="w-10 h-10 bg-linear-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold shrink-0">
            JD
          </div>
          <div className="flex-1">
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Add a comment..."
              className="w-full bg-slate-700/50 border border-slate-600 rounded-2xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
              rows={3}
            />
            <div className="flex justify-end mt-2">
              <button
                onClick={() => setComment("")}
                disabled={!comment.trim()}
                className="bg-linear-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Comment
              </button>
            </div>
          </div>
        </div>

        {/* Comments List */}
        <div className="space-y-4">
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="flex space-x-4 p-4 rounded-2xl hover:bg-slate-700/30 transition-all"
            >
              <div className="w-10 h-10 bg-linear-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold shrink-0">
                U{index + 1}
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <h4 className="text-white font-semibold">User {index + 1}</h4>
                  <span className="text-slate-400 text-sm">· 2h ago</span>
                </div>
                <p className="text-white">
                  This is an amazing post! Really love the insights shared here.
                  {index === 0 &&
                    " Can't wait to see more content like this! 🚀"}
                </p>
                <div className="flex items-center space-x-4 mt-2">
                  <button className="text-slate-400 hover:text-red-500 transition-colors text-sm">
                    Like
                  </button>
                  <button className="text-slate-400 hover:text-blue-400 transition-colors text-sm">
                    Reply
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
