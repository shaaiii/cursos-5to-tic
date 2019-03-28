import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './styles.scss'

import Clase2 from './components/Clase2'
import Home from './components/Home'

class App extends Component {
  render() {

    console.log(process);

    return (
      <div className="App app-container">
        <Router basename='/curso-desarrollo-web'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/clase2' component={Clase2}/>
          </Switch>
        </Router>
      </div>

    );
  }
}

export default App;
