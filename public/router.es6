import React from 'react'
import { Router, Route, Redirect, Link } from 'react-router'
import { render } from 'react-dom'
import App from './app'

render((
  <Router>
    <Route path="app" component={App} />
    <Redirect from="*" to="app" />
  </Router>
), document.getElementById('main'));