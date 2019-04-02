import React from 'react';
import { NavLink } from 'react-router-dom';

import Clase3Repaso from './Clase3Repaso';
import SsOoClase4 from './Clase4';

import './SistemasOperativos.scss';

class SistemasOperativos extends React.Component {
  render() {
    return (
    <div className='ss-oo-container'>
      <h1>Bienvenidas y Bienvenidos al curso de Sistemas Operativos 2</h1>

      <h3>Elija la clase que quiere consultar</h3>

      <ul>
        <li><NavLink to='/ss-oo/clase-3-repaso'>Clase 3 - Repaso</NavLink></li>
        <li><NavLink to='/ss-oo/clase-4'>Clase 4 - Jueves 4 de abril de 2019</NavLink></li>
      </ul>

    </div>
    )
  }
}

export {
  SistemasOperativos,
  Clase3Repaso,
  SsOoClase4,
};