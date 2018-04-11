import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../screens/home/Home'
import Category from '../screens/category/Category'
import Post from '../screens/post/Post'
import User from '../screens/user/User'
import AddUser from '../screens/user/AddUser'
import EditUser from '../screens/user/EditUser'


const Router = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/cat' component={Category} />
      <Route path='/post' component={Post} />
      <Route path='/user' component={User} />
      <Route path='/add_user' component={AddUser} />
      <Route path='/edit_user/:id' component={EditUser} />
    </Switch>
  </main>
)

export default Router
