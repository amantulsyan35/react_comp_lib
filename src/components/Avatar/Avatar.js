import React from 'react';
import './Avatar.css';

export const Avatar = ({ name, img, size }) => {
  // console.log(size);
  return (
    <div className={` avatar avatar-${size}`}>
      {img ? (
        <img src={img} alt={name} />
      ) : (
        <div className={`avatar-name avatar-name-${size}`}>{name[0]}</div>
      )}
    </div>
  );
};

export const AvatarMode = ({ name, img, size, type }) => {
  return (
    <div className={` avatar avatar-${size}`}>
      {img ? (
        <img src={img} alt={name} />
      ) : (
        <div className={`avatar-name avatar-name-${size}`}>{name[0]}</div>
      )}
      <div className={`avatar-badge avatar-badge-${size} avatar-${type}`}></div>
    </div>
  );
};
