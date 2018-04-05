// import { Router, Route, Switch } from 'react-router'
import Category from '../screens/categories/Category.js'
import { Switch, Route } from 'react-router-dom'
import Home from '../screens/home/Home'
import Category from '../screens/categories/Category'


const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/category' component={Category}/>
    </Switch>
  </main>
)
