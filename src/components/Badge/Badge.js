import React from 'react';
import './Badge.css';
import { FaCommentAlt } from 'react-icons/fa';

export const AvatarBadge = ({ children, num, type }) => {
  return (
    <div className={` badge badge-${type}`}>
      {children}
      <div className={`badge-icon badge-icon-${type}`}>
        <b>{num}</b>
      </div>
    </div>
  );
};

export const IconBadge = ({ num, type }) => {
  return (
    <div className={` icon-badge icon-badge-${type}`}>
      <FaCommentAlt className={`icon-${type}`} />
      <div className={`icon-badge-icon icon-badge-icon-${type}`}>
        <b>{num}</b>
      </div>
    </div>
  );
};
