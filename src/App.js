import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import {Home} from './Components/Home';
import {About} from './Components/About';
import {Contact} from './Components/Contact';
import {NoMatch} from './Components/Nomatch';

class App extends Component {
  render () {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route component={NoMatch}/>
          </Switch>
        </Router>
      </React.Fragment>
    )
  }
}

export default App;