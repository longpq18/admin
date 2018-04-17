import React, { Component } from 'react';
import './assets/styles/App.css';
import './assets/styles/menu.css';
import routes from './router/Router';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      login: false
    }
  }

  showContent = (routes) => {
    var result = null;
    if(routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route key={index} path={route.path} exact={route.exact} component={route.main} />
        );
      });
    }
    return result;
  }

  componentDidMount() {}

  render() {
      return (
        <Router>
          <Switch>
              {this.showContent(routes)}
          </Switch>
      </Router>
      )
  }
}

export default App;
