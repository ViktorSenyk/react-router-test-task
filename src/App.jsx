import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/navigation/Navigation';
import Home from './components/home/Home';
import Users from './components/users/Users';

export default function App() {
  return (
    <section className="page">
      <Navigation
        linksInfo={[
          { title: 'Home', href: '/' },
          { title: 'Users', href: '/users' },
        ]}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users/*" element={<Users />} />
        <Route path="*" element={<h1>Not found!</h1>} />
      </Routes>
    </section>
  );
}
