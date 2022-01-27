import React from 'react';
import './Card.css';

export const CardHero = ({ children, bg }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
      className='card-hero'
    >
      {children}
    </div>
  );
};

export const HeroTitle = ({ children }) => {
  return <h3 className='hero-title'>{children}</h3>;
};

export const HeroBody = ({ children }) => {
  return (
    <div className='hero-body'>
      <p>{children}</p>
    </div>
  );
};

export const CardTitle = ({ children }) => {
  return <h3 className='card-title'>{children}</h3>;
};

export const CardSubTitle = ({ children }) => {
  return (
    <div className='card-sub-title'>
      <b>{children}</b>
    </div>
  );
};

export const CardBody = ({ children }) => {
  return (
    <div className='card-body'>
      <p>{children}</p>
    </div>
  );
};

export const CardFooter = ({ children }) => {
  return <div className='card-footer'>{children}</div>;
};

export const CardLink = ({ text, src }) => {
  return (
    <a className='card-link' href={src}>
      {text}
    </a>
  );
};

export const Card = ({ children }) => {
  return <div className='card'>{children}</div>;
};
