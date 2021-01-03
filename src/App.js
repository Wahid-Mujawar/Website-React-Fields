import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import {Home} from './Components/Home';
import {About} from './Components/About';
import {Contact} from './Components/Contact';
import {NoMatch} from './Components/Nomatch';
import {Layout} from './Components/Layout';
import {Navigationbar} from './Components/NavigationBar';

class App extends Component {
  render () {
    return (
      <React.Fragment>
        <Navigationbar/>
        <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route component={NoMatch}/>
          </Switch>
        </Router>
        </Layout>
      </React.Fragment>
    )
  }
}

export default App;