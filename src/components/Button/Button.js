import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

export const Button = ({ children, type, size, ...rest }) => {
  return (
    <button {...rest} className={` btn btn-${type} btn-${size}`}>
      {children}
    </button>
  );
};

export const LinkButton = ({ children, type, size, src }) => {
  return (
    <a className={` btn btn-${type} link-btn-${size}`} href={src}>
      {children}
    </a>
  );
};
