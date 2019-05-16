import React from 'react';
import { NavLink } from 'react-router-dom';

import BackButton from '../BackButton';
import Clase2 from './Clase2';
import Git from './Git';
import BootstrapUtils from './BootstrapUtils';
import Javascript from './javascript/Javascript';

import logoAnima from '../../assets/logo_anima_completo_oscuro.svg'

import './DesarrolloWeb.scss';

class DesarrolloWeb extends React.Component {

  backTo = () => {
    this.props.history.push('/');
  }

  render() {
    return (
    <div className='des-web-container'>
      <div className='background-img'></div>
    
      <div style={{textAlign: 'left'}}>
        <BackButton to={this.backTo} />
      </div>
      <div className='content'>
        <img id='logo-anima-completo' src={logoAnima} alt='Logo Anima' width='200px'></img>
        <h2>Bienvenidas y Bienvenidos al curso de <span style={{color: '#0E6251', fontWeight: 'bold', textShadow: '1px 1px 4px #2D9929'}}>Desarrollo Web</span> año 2019</h2>
        <p>Si me quieren contactar pueden mandarme un mail a <a href='mailto:franciscocobas@anima.edu.uy' target='blank'>franciscocobas@anima.edu.uy</a></p>
        <h3>Desarrollo del curso y temas</h3>
        <div className='list-topics'>
          <NavLink to='/des-web/git/'>Git y Github</NavLink>
          <NavLink to='/des-web/bootstrap-utils'>Bootstrap Utilities</NavLink>
        </div>
      </div>
    </div>
    )
  }
}

export {
  DesarrolloWeb,
  Clase2,
  Git,
  BootstrapUtils,
  Javascript
}