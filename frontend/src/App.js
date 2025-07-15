import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header'; // Corrected import paths
import AddFeedback from './components/AddFeedback';
import ViewFeedback from './components/ViewFeedback';
import AboutUs from './components/AboutUs';
import Signup from './components/Signup';
import UserProfile from './components/UserProfile';
import Login from './components/Login';
import ManageUsers from "./components/ManageUsers";
import ForgotPassword from "./components/ForgotPassword";
import FeedbackAnalytics from "./components/FeedbackAnalytics";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/" element={<AboutUs />} />
          <Route path="/add" element={<AddFeedback />} />
          <Route path="/feedback" element={<ViewFeedback />} />
          <Route path="/manage-users" element={<ManageUsers />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/feedback-analytics" element={<FeedbackAnalytics />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
