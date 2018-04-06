import React, {Component} from 'react'
import { Router, Route } from 'react-router'
import { Link } from 'react-router-dom'


class MenuLeft extends Component {
  render() {
    return(
      <nav id="menu-left">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/cat">Category</Link></li>
          <li><a href="/post">Post</a></li>
          <li><a href="/user">User</a></li>
        </ul>
      </nav>
    )
  }
}

export default MenuLeft
