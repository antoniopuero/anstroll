import React from 'react'
import { Router, Route, Link } from 'react-router'
import { render } from 'react-dom'
import App from './app'

render((
  <Router>
    <Route path="/" component={App} />
  </Router>
), document.getElementById('main'));