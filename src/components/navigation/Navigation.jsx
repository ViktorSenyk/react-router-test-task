import React from 'react';
import { Link } from 'react-router-dom';

import './navigation.scss';

export default function Navigation({ linksInfo }) {
  return (
    <ul className="navigation">
      {linksInfo.map(linkInfo => (
        <li className="navigation__item" key={linkInfo.href}>
          <Link to={linkInfo.href}>{linkInfo.title}</Link>
        </li>
      ))}
    </ul>
  );
}
