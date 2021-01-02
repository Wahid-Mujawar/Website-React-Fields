import React, { Components } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import

class App extends Component {
  render () {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/" component={About}/>
            <Route path="/" component={Contact}/>
            <Route path="NoMatch"/>
          </Switch>
        </Router>
      </React.Fragment>
    )
  }
}