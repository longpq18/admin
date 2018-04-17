import React, {Component} from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import MenuLeft from '../components/menu-left'

class MainLayout extends Component {
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
                  {this.props.children}
                </div>
            </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default MainLayout
