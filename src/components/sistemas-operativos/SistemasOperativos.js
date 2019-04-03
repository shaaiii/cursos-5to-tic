import React from 'react';
import { NavLink } from 'react-router-dom';

import Clase3Repaso from './Clase3Repaso';
import ElShell from './ElShell';
import BasicCommands from './BasicCommands';

import './SistemasOperativos.scss';

class SistemasOperativos extends React.Component {
  render() {
    return (
    <div className='ss-oo-container'>
      <h1>Bienvenidas y Bienvenidos al curso de Sistemas Operativos 2</h1>

      <h3>Elija la clase que quiere consultar</h3>

      <ul>
        <li><NavLink to='/ss-oo/clase-3-repaso'>Clase 3 - Repaso</NavLink></li>
        <li><b>Clase 4 - Jueves 4 de abril de 2019</b> </li>
        <li><NavLink to='/ss-oo/el-shell'>El Shell</NavLink></li>
        <li><NavLink to='/ss-oo/basic-commands'>Los 7 comandos más usados</NavLink></li>
      </ul>

    </div>
    )
  }
}

export {
  SistemasOperativos,
  Clase3Repaso,
  ElShell,
  BasicCommands,
};