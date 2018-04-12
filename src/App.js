import React, { Component } from 'react';
import './assets/styles/App.css';
import './assets/styles/menu.css';
import Header from './components/header'
import Footer from './components/footer'
import MenuLeft from './components/menu-left'
import Router from './router/Router'
import Login from './screens/login/Login'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      login: false
    }
  }

  componentDidMount() {

  }

  render() {

      return (
        <MainContent />
      )
    
  }
}

class MainContent extends Component {
    render() {
      return(
        <div className="App container-fluid" id="wrapper">
          <Header />
          <div className="container-fluid content">
              <div className="row">
                  <div className="col-sm-3">
                    <div className="menu">
                      <MenuLeft />
                    </div>
                  </div>
                  <div className="col-sm-9 content-details">
                    <Router />
                  </div>
              </div>
          </div>
          <Footer />
        </div>
      )
    }
  }

export default App;
