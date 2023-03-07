import React from 'react';
import { Link, useParams } from 'react-router-dom';
import User from '../user/User';

import './users.scss';

export default function Users() {
  const { user } = useParams();
  return (
    <div className="page__content">
      <h1>Users</h1>
      <ul className="navigation">
        <li className="navigation__item">
          <Link to="/users/github">Github</Link>
        </li>
        <li className="navigation__item">
          <Link to="/users/facebook">Facebook</Link>
        </li>
      </ul>
      {user ? <User /> : <span>Select a user please</span>}
    </div>
  );
}
