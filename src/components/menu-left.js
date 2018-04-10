import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class MenuLeft extends Component {
  render() {
    return(
      <nav id="menu-left">
        <ul>
          <li><i className="fa fa-home"></i><Link to="/">Home</Link></li>
          <li><i className="fa fa-camera"></i><Link to="/cat">Category</Link></li>
          <li><i className="fa fa-product-hunt"></i><a href="/post">Post</a></li>
          <li><i className="fa fa-user-secret"></i><a href="/user">User</a></li>
        </ul>
      </nav>
    )
  }
}

export default MenuLeft
