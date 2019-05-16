import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './styles.scss'

import Home from './components/Home';

// Desarrollo Web
import { 
  DesarrolloWeb, 
  Clase2 as DesWebClase2, 
  Git, 
  BootstrapUtils,
  Javascript } from './components/desarrollo-web/DesarrolloWeb';

// Sistemas Operativos 2
import { SistemasOperativos, Clase3Repaso, ElShell, BasicCommands, TrabajoBasicCommands } from './components/sistemas-operativos/SistemasOperativos';

// Sistemas Operativos 3
import Ssh from './components/ss-oo-3/Ssh';

class App extends Component {
  render() {

    return (
      <div className="App app-container">
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />

            {/* Desarrollo Web */}
            <Route exact path='/des-web' component={DesarrolloWeb} />
            <Route path='/des-web/clase2' component={DesWebClase2}/>
            <Route path='/des-web/git' component={Git} />
            <Route path='/des-web/bootstrap-utils' component={BootstrapUtils} />
            <Route path='/des-web/js' component={Javascript} />

            {/* Sistemas Operativos 2 */}
            <Route exact path='/ss-oo' component={SistemasOperativos} />
            <Route path='/ss-oo/clase-3-repaso' component={Clase3Repaso} />
            <Route path='/ss-oo/el-shell' component={ElShell} />
            <Route exact path='/ss-oo/basic-commands' component={BasicCommands} />
            <Route path='/ss-oo/basic-commands/task' component={TrabajoBasicCommands} />

            {/* Sistemas Operativos 3 */}
            <Route exact path='/ss-oo-3/ssh' component={Ssh}/>

            {/* NOT FOUND 404 */}
            <Route render={() => <p>Not found</p> } />
          </Switch>
        </Router>
      </div>

    );
  }
}

export default App;
