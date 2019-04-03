import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './styles.scss'

import { DesarrolloWeb, Clase2 as DesWebClase2, Git } from './components/desarrollo-web/DesarrolloWeb';
import Home from './components/Home';
import { SistemasOperativos, Clase3Repaso, ElShell, BasicCommands } from './components/sistemas-operativos/SistemasOperativos';

class App extends Component {
  render() {

    return (
      <div className="App app-container">
        <Router basename='/cursos-5to-tic'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/des-web' component={DesarrolloWeb} />
            <Route path='/des-web/clase2' component={DesWebClase2}/>
            <Route path='/des-web/git' component={Git} />
            <Route exact path='/ss-oo' component={SistemasOperativos} />
            <Route path='/ss-oo/clase-3-repaso' component={Clase3Repaso} />
            <Route path='/ss-oo/el-shell' component={ElShell} />
            <Route path='/ss-oo/basic-commands' component={BasicCommands} />
            <Route render={() => <p>Not found</p> } />
          </Switch>
        </Router>
      </div>

    );
  }
}

export default App;
