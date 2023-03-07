import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Users from './components/users/Users';
import Home from './components/home/Home';

import './app.scss';

export default function App() {
  return (
    <section className="page">
      <ul className="navigation">
        <li className="navigation__item">
          <Link to="/">Home</Link>
        </li>
        <li className="navigation__item">
          <Link to="/users">Users</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:user" element={<Users />} />
        <Route path="*" element={<h1>Not found!</h1>} />
      </Routes>
    </section>
  );
}
