
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { motion } from "framer-motion";
import { AuthProvider, useAuth } from "@/contexts/AuthContext";

// Layouts
import Layout from "@/components/Layout";

// Pages
import HomePage from "@/pages/HomePage";
import GamingPage from "@/pages/GamingPage";
import CodingPage from "@/pages/CodingPage";
import TipsPage from "@/pages/TipsPage";
import TicketPage from "@/pages/TicketPage";
import LoginPage from "@/pages/LoginPage";
import RegisterPage from "@/pages/RegisterPage";
import AdminPage from "@/pages/AdminPage";
import NotFoundPage from "@/pages/NotFoundPage";
import PartnerPage from "@/pages/PartnerPage";
import ChangelogPage from "@/pages/ChangelogPage";
import SocialStatsPage from "@/pages/SocialStatsPage";

const ProtectedRoute = ({ children, roles }) => {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  if (roles && !roles.includes(user.role)) {
    return <Navigate to="/" replace />; 
  }
  return children;
};

function AppContent() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="gaming" element={<GamingPage />} />
          <Route path="coding" element={<CodingPage />} />
          <Route path="tips" element={<TipsPage />} />
          <Route path="tickets" element={<TicketPage />} />
          <Route path="partners" element={<PartnerPage />} />
          <Route path="changelog" element={<ChangelogPage />} />
          <Route path="social-stats" element={<SocialStatsPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route 
            path="admin" 
            element={
              <ProtectedRoute roles={['admin']}>
                <AdminPage />
              </ProtectedRoute>
            } 
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <Toaster />
    </motion.div>
  );
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </Router>
  );
}

export default App;
