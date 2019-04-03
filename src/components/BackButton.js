import React from 'react';
import PropTypes from 'prop-types';

export default function BackButton({ to }) {

  return (
    <button onClick={to} style={{
      border: '0px', 
      backgroundColor: 'inherit', 
      color: 'inherit',
      margin: '1.5em 0 0 2em'}}>
      <i style={{fontSize: '1.5em'}} className="fas fa-arrow-left"></i>
    </button>
  )
}

BackButton.propTypes = {
  to: PropTypes.func.isRequired
}