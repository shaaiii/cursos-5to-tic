import React from 'react'

import { NavLink } from 'react-router-dom'

import logo from '../assets/logo_anima.svg'
import logoCompleto from '../assets/logo_anima_completo.svg'

import './home.scss'

class Home extends React.Component {

  render() {
    return (
      <header className="app-header">

        <img id='logo-completo-anima' src={logoCompleto} alt='Logo Completo Anima' />

        <img src={logo} className="app-logo" alt="logo" />
        <p>
          ¡Bienvenidas y Bienvenidos a Ánima!
        </p>

        <p>Seleccione la materia</p>

        <div className='container'>

          <div className='row justify-content-center'>

            <div className='col-12 col-md-6 col-xl-4 mb-2'>
              <NavLink className='custom-nav-item-sytle text-truncate' activeClassName='active' to='/intro-des-web'>
                Intro Desarrollo Web
              </NavLink>
            </div>

            <div className='col-12 col-md-6 col-xl-4 my-2 mt-md-0'>
              <NavLink className='custom-nav-item-sytle' activeClassName='active' to='/ss-oo'>
                Sistemas Operativos 2
              </NavLink>
            </div>
            <div className='col-12 col-md-6 col-xl-4 my-2'>
              <NavLink className='custom-nav-item-sytle' activeClassName='active' to='/des-web'>
                Desarrollo Web
              </NavLink>
            </div>

            <div className='col-12 col-md-6 col-xl-4 mt-2 mb-5'>
              <NavLink className='custom-nav-item-sytle' activeClassName='active' to='/ss-oo-3/ssh'>
                Sistemas Operativos 3
              </NavLink>
            </div>

          </div>

        </div>
      </header>
    )
  }
}

export default Home;