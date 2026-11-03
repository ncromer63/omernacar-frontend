import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import EventsPage from './pages/EventsPage';
import EventDetailPage from './pages/EventDetailPage';
import AdminPage from './pages/AdminPage';
import AddEventPage from './pages/AddEventPage';
import EditEventPage from './pages/EditEventPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <>
      <Header />
      <Navbar />
      <main>
        <Routes>
          {/* 10 adet router tanımı */}
          <Route path="/" element={<HomePage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/events/:id" element={<EventDetailPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/admin/new" element={<AddEventPage />} />
          <Route path="/admin/:id/edit" element={<EditEventPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

