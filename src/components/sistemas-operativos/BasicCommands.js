import React from 'react';

import { NavLink } from 'react-router-dom';

import './BasicCommands.scss';

class BasicCommands extends React.Component {
  render() {
    return (
      <div className='basic-commands-container'>
        <div style={{textAlign: 'left'}}>
          <NavLink className='img-back-link' to='/ss-oo'><i className="fas fa-arrow-left"></i></NavLink>
        </div>
      </div>
    )
  }
}

export default BasicCommands;