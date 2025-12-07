import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import PrivateRoute from "./PrivateRoute";

import DetailPage from "../pages/DetailPage";
import MessagePage from "../pages/MessagePage";
import ExplorePage from "../pages/ExplorePage";
import ChatTest from "../pages/ChatText";
import Premium from "../pages/Premium";
import Communities from "../pages/Communities";
import CreateCommunity from "../pages/CreateCommunity";
import CommunityDetail from "../pages/CommunityDetail";
import { AuthFlow } from "../components/auth/AuthFlow";
import HomeFeed from "../pages/Home";
import SettingsPage from "../pages/SettingPage";
import UserSearchPage from "../pages/UserSearchPage";
import PostSearchPage from "../pages/PostSearchPage";
import UserProfile from "../pages/UserProfile";
import Profile from "../pages/Profile";
// import UsersManagement from "../components/dashboard/UsersManagement";
// import PostsAnalytics from "../components/dashboard/PostsAnalytics";
// import CommunitiesManagement from "../components/dashboard/CommunitiesManagement";
// import Dashboard from "../components/dashboard/Dashboard";

export default function AppRoutes() {
  return (
    <Routes>
      {/* 🟩 Protected Routes */}
      <Route element={<PrivateRoute><MainLayout /></PrivateRoute>}>
        <Route index element={<HomeFeed />} />
        <Route path="post/:id" element={<DetailPage />} />
        <Route path="profile" element={<Profile />} />
        <Route path="user/:id" element={<UserProfile />} />
        <Route path="settings" element={<SettingsPage />} />
        <Route path="users" element={<UserSearchPage />} />
        <Route path="posts" element={<PostSearchPage />} />




        <Route path="messages" element={<MessagePage />} />
        <Route path="messages/:id" element={<ChatTest />} />
        <Route path="explore" element={<ExplorePage />} />
        <Route path="premium" element={<Premium />} />
        {/* <Route path="dashboard" element={<Dashboard />} /> */}


        {/* Communities */}
        <Route path="communities" element={<Communities />} />
        <Route path="communities/create" element={<CreateCommunity />} />
        <Route path="communities/:id" element={<CommunityDetail />} />

         {/* <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/users" element={<UsersManagement />} />
        <Route path="/admin/posts" element={<PostsAnalytics />} />
        <Route path="/admin/communities" element={<CommunitiesManagement />} /> */}

      </Route>

      {/* 🟦 Public Routes */}
      <Route path="auth" element={<AuthFlow />} />

      {/* 🟥 Catch-all → redirect to auth */}
      <Route path="*" element={<Navigate to="/auth" replace />} />
    </Routes>
  );
}
