import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../pages/home/Home'
import Category from '../pages/category/Category'
import Post from '../pages/post/Post'
import User from '../pages/user/User'
import AddUser from '../pages/user/AddUser'
import EditUser from '../pages/user/EditUser'
import Login from '../pages/login/Login'

const Router = [
  {
    path: '/',
    exact: true,
    main : ({history}) => <Login history={history} />
  },
  {
    path: '/home',
    exact: false,
    main: () => <Home />,
  },
  {
    path: '/cat',
    exact: false,
    main: () => <Category />,
  },
  {
    path: '/post',
    exact: false,
    main: () => <Post />
  },
  {
    path: '/user',
    exact: false,
    main: () => <User />
  },
  {
    path: '/add_user',
    exact: false,
    main: ({history}) => <AddUser history={history} />
  },
  {
    path: '/edit_user/:id',
    exact: false,
    main : () => <EditUser />
  }
]

export default Router
