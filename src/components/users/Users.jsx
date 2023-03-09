import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from '../navigation/Navigation';
import User from '../user/User';

export default function Users() {
  return (
    <div className="page__content">
      <h1>Users</h1>
      <Navigation
        linksInfo={[
          { title: 'Github', href: '/users/github' },
          { title: 'Facebook', href: '/users/facebook' },
        ]}
      />
      <Routes>
        <Route path="/:userId" element={<User />} />
        <Route path="/" element={<span>Select a user please</span>} />
      </Routes>
    </div>
  );
}
