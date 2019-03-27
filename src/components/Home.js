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
          Bienvenidos/as al curso de Desarrollo Web
        </p>
        <ul>
          <li className='custom-nav-item-sytle'>
            <NavLink activeClassName='active' to='/clase2'>
              Clase2
            </NavLink>
          </li>
        </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    )
  }
}

export default Home;