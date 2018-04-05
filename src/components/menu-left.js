import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import Category from '../screens/categories/Category'

class MenuLeft extends Component {
  render() {
    return(
      <nav id="menu-left">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="/Category">Category</a></li>
          <li><a href="#">Post</a></li>
          <li><a href="#">User</a></li>
          <Link to="/about">Abount</Link>

        </ul>
      </nav>
    )
  }
}

export default MenuLeft
