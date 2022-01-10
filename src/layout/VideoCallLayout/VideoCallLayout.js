import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import UserAvatar from '../../components/UserAvatar/UserAvatar';
import BreadCrumb from '../../features/Breadcrumb/Breadcrumb';
import { getUserInfo } from '../../services/userService';

const VideoCallLayout = () => {
  const [user, setUser] = useState({ name: '', photo: {} });

  useEffect(() => {
    (async () => {
      setUser(await getUserInfo());
    })();
  }, []);

  return (
    <div className={classNames('layout layout-video-call')}>
      <div className="layout-header">
        <UserAvatar photo={user.photo} name={user.name} />
        <BreadCrumb />
      </div>
      <div className="layout-body"></div>
    </div>
  );
};

export default VideoCallLayout;
