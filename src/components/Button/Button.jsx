import React from 'react';
import './Button.css';

export const Button = ({ text, variant, ...rest }) => {
  return <button className={`button button-${variant}`} {...rest} />;
};
