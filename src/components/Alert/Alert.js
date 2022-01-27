import React from 'react';
import './Alert.css';
import {
  FaInfoCircle,
  FaCheckCircle,
  FaExclamationCircle,
} from 'react-icons/fa';

export const AlertTitle = ({ children }) => {
  return (
    <h3>
      <b>{children}</b>
    </h3>
  );
};

export const AlertDescription = ({ children }) => {
  return <p>{children} </p>;
};

export const AlertIcon = ({ type }) => {
  return (
    <>
      {type === 'info' && (
        <FaInfoCircle style={{ color: `var(--info-icon-color)` }} />
      )}
      {type === 'error' && (
        <FaExclamationCircle style={{ color: `var(--error-icon-color)` }} />
      )}
      {type === 'warning' && (
        <FaExclamationCircle style={{ color: `var(--warning-icon-color)` }} />
      )}
      {type === 'success' && (
        <FaCheckCircle style={{ color: `var(--success-icon-color)` }} />
      )}
    </>
  );
};

export const Alert = ({ children, mode }) => {
  return <div className={`alert alert-${mode}`}>{children}</div>;
};
