import React from 'react';
import { NavLink } from 'react-router-dom';

import './SistemasOperativos.scss';

class SistemasOperativos extends React.Component {
  render() {
    return (
    <div className='ss-oo-container'>
      <h1>Bienvenidas y Bienvenidos al curso de Sistemas Operativos 2</h1>

      <h3>Elija la clase que quiere consultar</h3>

      <div>
        <NavLink to='/ss-oo/clase-4'>Clase 4</NavLink>
      </div>

    </div>
    )
  }
}

export default SistemasOperativos;