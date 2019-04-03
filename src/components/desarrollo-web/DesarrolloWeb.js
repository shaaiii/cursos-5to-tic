import React from 'react';
import { NavLink } from 'react-router-dom';

import BackButton from '../BackButton';
import Clase2 from './Clase2';
import Git from './Git';

import './DesarrolloWeb.scss';

class DesarrolloWeb extends React.Component {

  backTo = () => {
    this.props.history.push('/');
  }

  render() {
    return (
    <div className='des-web-container'>
      <div style={{textAlign: 'left'}}>
        <BackButton to={this.backTo} />
      </div>
      <h2>Bienvenidas y Bienvenidos al curso de Desarrollo Web año 2019</h2>
      <p>Si me quieren contactar pueden mandarme un mail a <a href='mailto:franciscocobas@anima.edu.uy' target='blank'>franciscocobas@anima.edu.uy</a></p>
      <h3>Desarrollo del curso y temas</h3>
      <div className='list-topics'>
        <NavLink to='/des-web/git/'>Git y Github</NavLink>
      </div>
    </div>
    )
  }
}

export {
  DesarrolloWeb,
  Clase2,
  Git
}