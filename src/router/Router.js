import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../screens/home/Home'
import Category from '../screens/category/Category'
import Post from '../screens/post/Post'
import User from '../screens/user/User'
import AddUser from '../screens/user/AddUser'


const Router = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/cat' component={Category} />
      <Route path='/post' component={Post} />
      <Route path='/user' component={User} />
      <Route path='/add_user' component={AddUser} />
    </Switch>
  </main>
)

export default Router
