import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from 'pages/home'
import Post from 'pages/postWrapper'
import Null from 'pages/404'

export default (_) => (
  <Switch>
    <Route path="/p/:pid" component={Post} />
    <Route exact path="/" component={Home} />
    <Route path="/" component={Null} />
  </Switch>
)
