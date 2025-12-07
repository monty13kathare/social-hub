import { useState, useEffect } from "react";
import { Home, Users, User, LogOut, Bell, Search, MessageCircle } from "lucide-react";
import { getUser} from "../utils/userStorage";
import { useNavigate } from "react-router-dom";
import HomeFeed from "./Home";
import UserSearchPage from "./UserSearchPage";
import Communities from "./Communities";
import Profile from "./Profile";

type TabType = "home" | "friends" | "communities" | "profile";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<TabType>("home");
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [notificationsCount, setNotificationsCount] = useState(3);
  const [messagesCount, setMessagesCount] = useState(2);
  const [showNotifications, setShowNotifications] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const user = getUser();
    if (!user) {
      navigate("/login");
      return;
    }
    setCurrentUser(user);
  }, [navigate]);

  const handleLogout = () => {
    // clearUser();
    navigate("/login");
  };

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return <HomeFeed/>;
      case "friends":
        return <UserSearchPage />;
      case "communities":
        return <Communities />;
      case "profile":
        return <Profile/>;
      default:
        return <HomeFeed />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                SocialHub
              </div>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search posts, people, or communities..."
                  className="w-full pl-10 pr-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full border-none focus:ring-2 focus:ring-purple-500 focus:outline-none"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            {/* Right Side Icons */}
            <div className="flex items-center space-x-4">
              {/* Messages */}
              <button className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
                <MessageCircle className="h-6 w-6 text-gray-600 dark:text-gray-300" />
                {messagesCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {messagesCount}
                  </span>
                )}
              </button>

              {/* Notifications */}
              <button
                className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={() => setShowNotifications(!showNotifications)}
              >
                <Bell className="h-6 w-6 text-gray-600 dark:text-gray-300" />
                {notificationsCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {notificationsCount}
                  </span>
                )}
              </button>

              {/* Profile Dropdown */}
              <div className="relative">
                <button className="flex items-center space-x-2">
                  <img
                    src={currentUser?.avatar || "/default-avatar.png"}
                    alt={currentUser?.name}
                    className="w-8 h-8 rounded-full border-2 border-purple-500"
                  />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {currentUser?.name?.split(" ")[0]}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Notifications Dropdown */}
        {showNotifications && (
          <div className="absolute right-4 top-16 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-50">
            <div className="p-4">
              <h3 className="font-semibold text-gray-800 dark:text-white mb-3">Notifications</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3 p-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg">
                  <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
                    <Users className="h-4 w-4 text-purple-600 dark:text-purple-300" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      <span className="font-semibold">Alex Johnson</span> accepted your friend request
                    </p>
                    <span className="text-xs text-gray-500">2 minutes ago</span>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg">
                  <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                    <User className="h-4 w-4 text-green-600 dark:text-green-300" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      <span className="font-semibold">Sarah Lee</span> liked your post
                    </p>
                    <span className="text-xs text-gray-500">1 hour ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex gap-6">
          {/* Left Sidebar */}
          <aside className="w-64 flex-shrink-0">
            <div className="sticky top-24 space-y-6">
              {/* Navigation */}
              <nav className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-sm border border-gray-200 dark:border-gray-700">
                <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
                  Navigation
                </h3>
                <div className="space-y-2">
                  {[
                    { id: "home", icon: Home, label: "Home", active: activeTab === "home" },
                    { id: "friends", icon: Users, label: "Friends", active: activeTab === "friends" },
                    { id: "communities", icon: Users, label: "Communities", active: activeTab === "communities" },
                    { id: "profile", icon: User, label: "Profile", active: activeTab === "profile" },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.id}
                        onClick={() => setActiveTab(item.id as TabType)}
                        className={`flex items-center space-x-3 w-full p-3 rounded-xl transition-all ${item.active
                            ? "bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300"
                            : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                          }`}
                      >
                        <Icon className="h-5 w-5" />
                        <span className="font-medium">{item.label}</span>
                      </button>
                    );
                  })}
                </div>
              </nav>

              {/* Quick Stats */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-sm border border-gray-200 dark:border-gray-700">
                <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
                  Quick Stats
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">Posts</span>
                    <span className="font-semibold text-gray-800 dark:text-white">42</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">Friends</span>
                    <span className="font-semibold text-gray-800 dark:text-white">127</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">Communities</span>
                    <span className="font-semibold text-gray-800 dark:text-white">8</span>
                  </div>
                </div>
              </div>

              {/* Logout Button */}
              <button
                onClick={handleLogout}
                className="flex items-center space-x-3 w-full p-3 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-xl transition-all"
              >
                <LogOut className="h-5 w-5" />
                <span className="font-medium">Logout</span>
              </button>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {renderContent()}
          </main>

          {/* Right Sidebar - Friends/Online */}
          <aside className="w-80 flex-shrink-0">
            <div className="sticky top-24 space-y-6">
              {/* Friends Online */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-semibold text-gray-800 dark:text-white">Friends Online</h3>
                  <span className="text-sm text-purple-600 dark:text-purple-400">12 online</span>
                </div>
                <div className="space-y-3">
                  {[
                    { name: "Alex Johnson", status: "active", lastSeen: "2 min ago" },
                    { name: "Sarah Miller", status: "active", lastSeen: "5 min ago" },
                    { name: "Mike Chen", status: "away", lastSeen: "10 min ago" },
                    { name: "Emma Davis", status: "active", lastSeen: "Just now" },
                  ].map((friend, index) => (
                    <div key={index} className="flex items-center justify-between p-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="relative">
                          <img
                            src={`https://i.pravatar.cc/150?img=${index + 10}`}
                            alt={friend.name}
                            className="w-10 h-10 rounded-full"
                          />
                          <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white dark:border-gray-800 ${friend.status === "active" ? "bg-green-500" : "bg-yellow-500"
                            }`} />
                        </div>
                        <div>
                          <p className="font-medium text-gray-800 dark:text-white">{friend.name}</p>
                          <p className="text-xs text-gray-500">{friend.lastSeen}</p>
                        </div>
                      </div>
                      <button className="p-2 hover:bg-purple-100 dark:hover:bg-purple-900/30 rounded-lg">
                        <MessageCircle className="h-4 w-4 text-purple-600 dark:text-purple-300" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trending Communities */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-sm border border-gray-200 dark:border-gray-700">
                <h3 className="font-semibold text-gray-800 dark:text-white mb-4">Trending Communities</h3>
                <div className="space-y-3">
                  {[
                    { name: "React Developers", members: "5.2k", icon: "⚛️" },
                    { name: "Web3 Enthusiasts", members: "3.8k", icon: "🔗" },
                    { name: "UI/UX Designers", members: "7.1k", icon: "🎨" },
                    { name: "Startup Founders", members: "2.4k", icon: "🚀" },
                  ].map((community, index) => (
                    <div key={index} className="flex items-center justify-between p-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white">
                          {community.icon}
                        </div>
                        <div>
                          <p className="font-medium text-gray-800 dark:text-white">{community.name}</p>
                          <p className="text-xs text-gray-500">{community.members} members</p>
                        </div>
                      </div>
                      <button className="px-3 py-1 text-sm bg-purple-600 hover:bg-purple-700 text-white rounded-full transition-colors">
                        Join
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Upcoming Events */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-sm border border-gray-200 dark:border-gray-700">
                <h3 className="font-semibold text-gray-800 dark:text-white mb-4">Upcoming Events</h3>
                <div className="space-y-3">
                  {[
                    { title: "React Conference 2024", date: "Tomorrow, 10:00 AM", type: "virtual" },
                    { title: "Web3 Meetup", date: "Dec 15, 6:00 PM", type: "in-person" },
                    { title: "Design Workshop", date: "Dec 18, 2:00 PM", type: "virtual" },
                  ].map((event, index) => (
                    <div key={index} className="p-3 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="font-medium text-gray-800 dark:text-white">{event.title}</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{event.date}</p>
                        </div>
                        <span className={`px-2 py-1 text-xs rounded-full ${event.type === "virtual"
                            ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                            : "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                          }`}>
                          {event.type}
                        </span>
                      </div>
                      <button className="w-full mt-2 px-3 py-2 text-sm bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors">
                        RSVP
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}