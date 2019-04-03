import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { GitChanges, GitModel, GitHome } from './git/GitPages';

import './Git.scss';

class Git extends React.Component {

  routes = [
    {
      path: "/des-web/git/",
      exact: true,
      main: () => <GitHome />
    },
    {
      path: "/des-web/git/model",
      main: () => <GitModel />
    },
    {
      path: "/des-web/git/make-changes",
      main: () => <GitChanges />
    }
  ];

  toBack = () => {
    this.props.history.push('/des-web')
  }

  render() {
    return (
    <div className='git-container'>
      <Router basename='/cursos-5to-tic'>
        <div className='container-fluid'>
          <div id='menu-bar' className='row git-header justify-content-start'>
            <div className='col-2 logo-container'>
              <button onClick={this.toBack}>
                <i style={{fontSize: '1.5em'}} className="fas fa-arrow-left"></i>
              </button>
              <a href='https://github.com/' target='_blank'>
                <i className="fab fa-github"></i>
              </a>
            </div>
            <div className='col-8 pt-2 menu-container'>
              <Link to='/des-web/git/model'>Modelo de Git</Link>
              <Link to='/des-web/git/'>Git y Github</Link>
              <Link to='/des-web/git/make-changes'>Versiones</Link>
            </div>
          </div>
        </div>

        <div className='git-body'>
          {this.routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.main}
            />
          ))}
        </div>
      </Router>
    </div>
    )
  }
}

export default Git;