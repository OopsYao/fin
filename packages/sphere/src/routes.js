import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from 'pages/home'
import Post from 'pages/postWrapper'
import Null from 'pages/404'
import HomeBanner from 'components/HomeBanner'
const BannerPage = () => (
  <div>
    <HomeBanner />
  </div>
)

export default (_) => (
  <Switch>
    <Route path="/p/:pid" component={Post} />
    <Route exact path="/" component={Home} />
    <Route exact path="/banner" component={BannerPage} />
    <Route path="/" component={Null} />
  </Switch>
)
