import React, {Component} from 'react'
import Category from '../screens/categories/Category'
import Home from '../screens/home/Home'
import { Router, Route } from 'react-router'
import { Link } from 'react-router-dom'


class MenuLeft extends Component {
  render() {
    return(
      <nav id="menu-left">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Category">Category</Link></li>
          <li><a href="#">Post</a></li>
          <li><a href="#">User</a></li>
        </ul>
      </nav>
    )
  }
}

export default MenuLeft
