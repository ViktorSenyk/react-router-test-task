import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import fetchUserData from '../../gateway/user';

import './user.scss';

export default function User() {
  const { userId } = useParams();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetchUserData(userId).then(userData => setUserData(userData));
  }, [userId]);

  return !userData ? null : (
    <div className="user">
      <img alt="User Avatar" src={userData.avatar_url} className="user__avatar" />
      <div className="user__info">
        <span className="user__name">{userData.name}</span>
        <span className="user__location">{userData.location}</span>
      </div>
    </div>
  );
}
