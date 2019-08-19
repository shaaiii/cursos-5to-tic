import React from 'react';
import { NavLink } from 'react-router-dom'

import Sections from './Sections'
import Functions from './Functions'

class IntroDesWeb extends React.Component {
  render() {
    return (
      <div>
        <NavLink to='/intro-des-web/sections'>Secciones</NavLink>
        <NavLink to='/intro-des-web/functions-es6'>Funciones</NavLink>
      </div>
    )
  }
}

export {
  IntroDesWeb,
  Functions,
  Sections
}