import React from 'react'

import { NavLink } from 'react-router-dom'

import logo from '../logo.svg'

import './home.scss'

class Home extends React.Component {

  render() {
    return (
      <header className="app-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          ¡Bienvenidas y Bienvenidos a Ánima!
        </p>

        <p>Seleccione la materia</p>

        <div className='container'>

          <div className='row justify-content-center'>
            <div className='col-12 col-md-3'>
              <NavLink className='custom-nav-item-sytle' activeClassName='active' to='/ss-oo'>
                Sistemas Operativos
              </NavLink>
            </div>
            <div className='col-12 col-md-3'>
              <NavLink className='custom-nav-item-sytle' activeClassName='active' to='/des-web'>
                Desarrollo Web
              </NavLink>
            </div>
          </div>

        </div>
      </header>
    )
  }
}

export default Home;