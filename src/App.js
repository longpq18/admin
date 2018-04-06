import React, { Component } from 'react';
import './assets/styles/App.css';
import './assets/styles/menu.css';
import Header from './components/header'
import Footer from './components/footer'
import MenuLeft from './components/menu-left'
import Router from './router/Router'

class App extends Component {
  render() {
    return (
      <div className="App container-fluid" id="wrapper">
        <Header />
        <div className="container-fluid content">
            <div className="row">
                <div className="col-sm-3 menu">
                  <MenuLeft />
                </div>
                <div className="col-sm-9 content-details">
                  <Router />
                </div>
            </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
